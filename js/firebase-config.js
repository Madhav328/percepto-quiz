/**
 * Percepto Firebase Configuration
 * Centralized Firebase initialization to prevent duplicate config across pages
 * 
 * Usage:
 *   <script src="js/firebase-config.js"></script>
 *   <script>
 *     // Firebase is already initialized - use these globals:
 *     // auth, db, database, storage
 *   </script>
 * 
 * Safety:
 *   - Checks if Firebase is already initialized before re-initializing
 *   - Safe to include on any page without breaking existing Firebase usage
 */

(function() {
    'use strict';

    // Firebase configuration for Percepto project
    const FIREBASE_CONFIG = {
        apiKey: "AIzaSyDFENL5Z_2Cewh4p6zp_BZtxL9n0di-9u8",
        authDomain: "projeccvi.firebaseapp.com",
        projectId: "projeccvi",
        storageBucket: "projeccvi.firebasestorage.app",
        messagingSenderId: "123456789",
        appId: "1:123456789:web:abc123def456"
    };

    // Initialize Firebase safely (prevent duplicate initialization)
    try {
        if (typeof firebase !== 'undefined') {
            // Check if Firebase is already initialized
            if (!firebase.apps.length) {
                firebase.initializeApp(FIREBASE_CONFIG);
                console.log('[Firebase Config] Firebase initialized successfully');
            } else {
                console.log('[Firebase Config] Firebase already initialized, using existing app');
            }
        } else {
            console.error('[Firebase Config] Firebase SDK not loaded. Make sure to include Firebase scripts before this file.');
        }
    } catch (error) {
        console.error('[Firebase Config] Error initializing Firebase:', error);
    }

    // Make service references globally available for consistency
    // These will be undefined if Firebase failed to load, which is safe
    window.percepto = window.percepto || {};
    window.percepto.firebaseConfig = FIREBASE_CONFIG;
    window.percepto.auth = (typeof firebase !== 'undefined' && firebase.auth) ? firebase.auth() : null;
    window.percepto.db = (typeof firebase !== 'undefined' && firebase.firestore) ? firebase.firestore() : null;
    window.percepto.database = (typeof firebase !== 'undefined' && firebase.database) ? firebase.database() : null;
    window.percepto.storage = (typeof firebase !== 'undefined' && firebase.storage) ? firebase.storage() : null;

    // Legacy global variables for backward compatibility
    // Pages that haven't been refactored yet can still use these
    if (typeof firebase !== 'undefined' && firebase.apps.length) {
        window.auth = window.percepto.auth;
        window.db = window.percepto.db;
        window.database = window.percepto.database;
        window.storage = window.percepto.storage;
    }

    console.log('[Firebase Config] Module loaded. Globals available: auth, db, database, storage');
})();
