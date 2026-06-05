/**
 * Percepto Report & Assessment Utilities
 * Centralized helpers for saving and retrieving quiz/assessment data
 * 
 * Usage:
 *   <script src="js/firebase-config.js"></script>
 *   <script src="js/report-utils.js"></script>
 *   <script>
 *     // Save quiz results
 *     PerceptoReports.saveQuizResult({
 *       quizType: 'VDT1',
 *       score: 85,
 *       timeSpent: 45000,
 *       accuracy: 90
 *     });
 *   </script>
 */

(function() {
    'use strict';

    // Namespace for report utilities
    window.PerceptoReports = window.PerceptoReports || {};

    /**
     * Default database paths used across the app
     * These match the paths found in CURRENT_STATE_AUDIT.md
     */
    const DEFAULT_PATHS = {
        userQuiz: 'users/{userId}/quiz/{quizType}',
        userProfile: 'users/{userId}/profile',
        userReports: 'users/{userId}/reports',
        doctorPatientQuiz: 'doctors/{doctorId}/patients/{patientId}/quiz',
        doctorPatientProfile: 'doctors/{doctorId}/patients/{patientId}/profile'
    };

    /**
     * Get the current user's ID safely
     * @returns {string|null}
     */
    function getUserId() {
        if (typeof PerceptoAuth !== 'undefined' && PerceptoAuth.getCurrentUserId) {
            return PerceptoAuth.getCurrentUserId();
        }
        if (typeof firebase !== 'undefined' && firebase.auth && firebase.auth().currentUser) {
            return firebase.auth().currentUser.uid;
        }
        return null;
    }

    /**
     * Format a timestamp for display
     * @param {number} timestamp - Unix timestamp in milliseconds
     * @returns {string} Formatted date string
     */
    PerceptoReports.formatDate = function(timestamp) {
        if (!timestamp) return 'Unknown';
        
        const date = new Date(timestamp);
        const options = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return date.toLocaleDateString(undefined, options);
    };

    /**
     * Format time duration for display
     * @param {number} milliseconds - Time in milliseconds
     * @returns {string} Formatted duration (e.g., "45s", "2m 30s")
     */
    PerceptoReports.formatDuration = function(milliseconds) {
        if (!milliseconds || milliseconds < 0) return '0s';
        
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        
        if (minutes > 0) {
            return `${minutes}m ${seconds % 60}s`;
        }
        return `${seconds}s`;
    };

    /**
     * Save quiz/assessment result to Firebase
     * Uses the standard path pattern found across quiz pages
     * 
     * @param {Object} result - Quiz result data
     * @param {string} result.quizType - Quiz identifier (e.g., 'VDT1', 'VFC11')
     * @param {number} result.score - Score (0-100 typically)
     * @param {number} result.timeSpent - Time in milliseconds
     * @param {number} [result.accuracy] - Accuracy percentage
     * @param {number} [result.totalTaps] - Number of interactions
     * @param {Object} [result.additionalData] - Any extra data to save
     * @returns {Promise} Resolves when save is complete
     */
    PerceptoReports.saveQuizResult = function(result) {
        return new Promise(function(resolve, reject) {
            // Validate required fields
            if (!result.quizType) {
                reject('quizType is required');
                return;
            }

            const userId = getUserId();
            if (!userId) {
                reject('User not authenticated');
                return;
            }

            if (typeof firebase === 'undefined' || !firebase.database) {
                reject('Firebase Database not available');
                return;
            }

            // Build the save path: users/{uid}/quiz/{quizType}
            const path = `users/${userId}/quiz/${result.quizType}`;
            
            // Construct the data object (consistent with existing patterns)
            const data = {
                score: result.score || 0,
                timeSpent: result.timeSpent || 0,
                timestamp: Date.now(),
                accuracy: result.accuracy || 0,
                totalTaps: result.totalTaps || 0
            };

            // Add any additional data
            if (result.additionalData && typeof result.additionalData === 'object') {
                Object.keys(result.additionalData).forEach(function(key) {
                    data[key] = result.additionalData[key];
                });
            }

            // Save to Firebase
            firebase.database().ref(path).set(data)
                .then(function() {
                    console.log('[Report Utils] Quiz result saved:', result.quizType, data.score);
                    resolve({ success: true, path: path, data: data });
                })
                .catch(function(error) {
                    console.error('[Report Utils] Error saving quiz result:', error);
                    reject(error);
                });
        });
    };

    /**
     * Save quiz attempt with timestamp (alternative path pattern)
     * Some quizzes use: users/{uid}/quiz/{type}/{timestamp}
     * 
     * @param {Object} result - Quiz result data
     * @returns {Promise}
     */
    PerceptoReports.saveQuizAttempt = function(result) {
        return new Promise(function(resolve, reject) {
            if (!result.quizType) {
                reject('quizType is required');
                return;
            }

            const userId = getUserId();
            if (!userId) {
                reject('User not authenticated');
                return;
            }

            if (typeof firebase === 'undefined' || !firebase.database) {
                reject('Firebase Database not available');
                return;
            }

            const timestamp = Date.now();
            const path = `users/${userId}/quiz/${result.quizType}/${timestamp}`;
            
            const data = {
                score: result.score || 0,
                timeSpent: result.timeSpent || 0,
                accuracy: result.accuracy || 0,
                totalTaps: result.totalTaps || 0,
                timestamp: timestamp
            };

            if (result.additionalData) {
                Object.assign(data, result.additionalData);
            }

            firebase.database().ref(path).set(data)
                .then(function() {
                    console.log('[Report Utils] Quiz attempt saved:', result.quizType, timestamp);
                    resolve({ success: true, path: path, data: data });
                })
                .catch(reject);
        });
    };

    /**
     * Get quiz results for current user
     * @param {string} quizType - Quiz identifier
     * @returns {Promise<Object>} Quiz data
     */
    PerceptoReports.getQuizResults = function(quizType) {
        return new Promise(function(resolve, reject) {
            const userId = getUserId();
            if (!userId) {
                reject('User not authenticated');
                return;
            }

            if (typeof firebase === 'undefined' || !firebase.database) {
                reject('Firebase Database not available');
                return;
            }

            const path = `users/${userId}/quiz/${quizType}`;
            
            firebase.database().ref(path).once('value')
                .then(function(snapshot) {
                    resolve(snapshot.val() || {});
                })
                .catch(reject);
        });
    };

    /**
     * Get all quiz results for current user
     * @returns {Promise<Object>} All quiz data keyed by quiz type
     */
    PerceptoReports.getAllQuizResults = function() {
        return new Promise(function(resolve, reject) {
            const userId = getUserId();
            if (!userId) {
                reject('User not authenticated');
                return;
            }

            if (typeof firebase === 'undefined' || !firebase.database) {
                reject('Firebase Database not available');
                return;
            }

            const path = `users/${userId}/quiz`;
            
            firebase.database().ref(path).once('value')
                .then(function(snapshot) {
                    resolve(snapshot.val() || {});
                })
                .catch(reject);
        });
    };

    /**
     * Get score classification/label
     * @param {number} score - Score (0-100)
     * @returns {string} Classification label
     */
    PerceptoReports.getScoreLabel = function(score) {
        if (score >= 80) return 'Excellent';
        if (score >= 60) return 'Good';
        if (score >= 40) return 'Fair';
        if (score >= 20) return 'Needs Practice';
        return 'Starting Out';
    };

    /**
     * Get score color class for styling
     * @param {number} score - Score (0-100)
     * @returns {string} CSS class name
     */
    PerceptoReports.getScoreColorClass = function(score) {
        if (score >= 80) return 'score-high';
        if (score >= 60) return 'score-medium';
        return 'score-low';
    };

    /**
     * Parse numeric value safely
     * @param {*} value - Value to parse
     * @param {number} defaultValue - Default if parsing fails
     * @returns {number}
     */
    PerceptoReports.parseNumber = function(value, defaultValue) {
        defaultValue = defaultValue || 0;
        if (value === null || value === undefined) return defaultValue;
        const parsed = parseFloat(value);
        return isNaN(parsed) ? defaultValue : parsed;
    };

    /**
     * Build a standard result object
     * Helper to ensure consistency across quiz pages
     * 
     * @param {Object} params - Result parameters
     * @returns {Object} Standardized result object
     */
    PerceptoReports.buildResult = function(params) {
        return {
            score: PerceptoReports.parseNumber(params.score, 0),
            timeSpent: PerceptoReports.parseNumber(params.timeSpent, 0),
            accuracy: PerceptoReports.parseNumber(params.accuracy, 0),
            totalTaps: PerceptoReports.parseNumber(params.totalTaps, 0),
            timestamp: Date.now(),
            additionalData: params.additionalData || {}
        };
    };

    console.log('[Report Utils] Module loaded. Available methods:');
    console.log('  - PerceptoReports.formatDate(timestamp)');
    console.log('  - PerceptoReports.formatDuration(milliseconds)');
    console.log('  - PerceptoReports.saveQuizResult(result)');
    console.log('  - PerceptoReports.saveQuizAttempt(result)');
    console.log('  - PerceptoReports.getQuizResults(quizType)');
    console.log('  - PerceptoReports.getAllQuizResults()');
    console.log('  - PerceptoReports.getScoreLabel(score)');
    console.log('  - PerceptoReports.getScoreColorClass(score)');
    console.log('  - PerceptoReports.parseNumber(value, default)');
    console.log('  - PerceptoReports.buildResult(params)');
})();
