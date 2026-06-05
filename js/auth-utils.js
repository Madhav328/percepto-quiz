/**
 * Percepto Authentication Utilities
 * Centralized auth helpers to reduce duplication across pages
 * 
 * Usage:
 *   <script src="js/firebase-config.js"></script>
 *   <script src="js/auth-utils.js"></script>
 *   <script>
 *     // Check auth state
 *     PerceptoAuth.requireAuth(); // Redirects to login if not authenticated
 *     
 *     // Or get current user
 *     const user = PerceptoAuth.getCurrentUser();
 *     if (user) {
 *       console.log(user.uid);
 *     }
 *   </script>
 */

(function() {
    'use strict';

    // Namespace for auth utilities
    window.PerceptoAuth = window.PerceptoAuth || {};

    /**
     * Get the current authenticated user
     * @returns {firebase.User|null} Current user or null if not authenticated
     */
    PerceptoAuth.getCurrentUser = function() {
        if (typeof firebase === 'undefined' || !firebase.auth) {
            console.error('[Auth Utils] Firebase Auth not available');
            return null;
        }
        return firebase.auth().currentUser;
    };

    /**
     * Get current user ID safely
     * @returns {string|null} User ID or null if not authenticated
     */
    PerceptoAuth.getCurrentUserId = function() {
        const user = PerceptoAuth.getCurrentUser();
        return user ? user.uid : null;
    };

    /**
     * Check if user is currently authenticated
     * @returns {boolean} True if authenticated
     */
    PerceptoAuth.isAuthenticated = function() {
        return !!PerceptoAuth.getCurrentUser();
    };

    /**
     * Require authentication - redirect to login if not authenticated
     * @param {string} redirectUrl - URL to redirect to after login (default: current page)
     */
    PerceptoAuth.requireAuth = function(redirectUrl) {
        const user = PerceptoAuth.getCurrentUser();
        if (!user) {
            // Store current page for redirect after login
            const returnUrl = redirectUrl || window.location.href;
            try {
                sessionStorage.setItem('percepto_return_url', returnUrl);
            } catch (e) {
                // Ignore storage errors
            }
            
            console.log('[Auth Utils] User not authenticated, redirecting to login');
            window.location.href = 'login.html';
            return false;
        }
        return true;
    };

    /**
     * Set up auth state observer with callbacks
     * @param {Function} onAuth - Callback when user is authenticated: function(user) {}
     * @param {Function} onUnauth - Callback when user is not authenticated: function() {}
     * @param {string} redirectOnUnauth - Optional redirect URL if unauthenticated
     */
    PerceptoAuth.onAuthStateChanged = function(onAuth, onUnauth, redirectOnUnauth) {
        if (typeof firebase === 'undefined' || !firebase.auth) {
            console.error('[Auth Utils] Firebase Auth not available');
            if (onUnauth) onUnauth();
            return;
        }

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('[Auth Utils] User authenticated:', user.uid);
                if (onAuth) onAuth(user);
            } else {
                console.log('[Auth Utils] User not authenticated');
                if (onUnauth) onUnauth();
                if (redirectOnUnauth) {
                    window.location.href = redirectOnUnauth;
                }
            }
        });
    };

    /**
     * Sign out the current user
     * @param {string} redirectUrl - URL to redirect to after logout (default: login.html)
     */
    PerceptoAuth.signOut = function(redirectUrl) {
        if (typeof firebase === 'undefined' || !firebase.auth) {
            console.error('[Auth Utils] Firebase Auth not available');
            return Promise.reject('Firebase Auth not available');
        }

        return firebase.auth().signOut()
            .then(function() {
                console.log('[Auth Utils] User signed out');
                // Clear any stored session data
                try {
                    sessionStorage.clear();
                } catch (e) {
                    // Ignore storage errors
                }
                
                if (redirectUrl !== false) {
                    window.location.href = redirectUrl || 'login.html';
                }
            })
            .catch(function(error) {
                console.error('[Auth Utils] Sign out error:', error);
                throw error;
            });
    };

    /**
     * Get user profile data from Firestore
     * @param {string} userId - User ID (optional, defaults to current user)
     * @returns {Promise<Object>} User profile data
     */
    PerceptoAuth.getUserProfile = function(userId) {
        const uid = userId || PerceptoAuth.getCurrentUserId();
        if (!uid) {
            return Promise.reject('No user ID available');
        }

        if (typeof firebase === 'undefined' || !firebase.firestore) {
            return Promise.reject('Firestore not available');
        }

        return firebase.firestore().collection('userProfiles').doc(uid).get()
            .then(function(doc) {
                if (doc.exists) {
                    return doc.data();
                }
                return null;
            });
    };

    /**
     * Update user display in header/UI
     * Common pattern across many pages
     * @param {string} userNameElementId - ID of element to show user name
     * @param {string} userEmailElementId - ID of element to show user email
     */
    PerceptoAuth.updateUserDisplay = function(userNameElementId, userEmailElementId) {
        const user = PerceptoAuth.getCurrentUser();
        
        if (userNameElementId) {
            const nameEl = document.getElementById(userNameElementId);
            if (nameEl) {
                nameEl.textContent = user ? (user.displayName || user.email || 'User') : 'Guest';
            }
        }
        
        if (userEmailElementId) {
            const emailEl = document.getElementById(userEmailElementId);
            if (emailEl) {
                emailEl.textContent = user ? (user.email || '') : '';
            }
        }
    };

    /**
     * Check if current user is a doctor (based on role in Firestore)
     * @returns {Promise<boolean>}
     */
    PerceptoAuth.isDoctor = function() {
        return PerceptoAuth.getUserProfile()
            .then(function(profile) {
                return profile && profile.role === 'doctor';
            })
            .catch(function() {
                return false;
            });
    };

    console.log('[Auth Utils] Module loaded. Available methods:');
    console.log('  - PerceptoAuth.getCurrentUser()');
    console.log('  - PerceptoAuth.getCurrentUserId()');
    console.log('  - PerceptoAuth.isAuthenticated()');
    console.log('  - PerceptoAuth.requireAuth()');
    console.log('  - PerceptoAuth.onAuthStateChanged(onAuth, onUnauth)');
    console.log('  - PerceptoAuth.signOut(redirectUrl)');
    console.log('  - PerceptoAuth.getUserProfile(userId)');
    console.log('  - PerceptoAuth.updateUserDisplay(nameId, emailId)');
    console.log('  - PerceptoAuth.isDoctor()');
})();
