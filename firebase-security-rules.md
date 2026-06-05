# Firebase Security Rules for Percepto

## ⚠️ IMPORTANT SECURITY NOTICE

These rules are **RECOMMENDATIONS ONLY**. They have **NOT** been deployed to your Firebase project. You must manually configure these in the Firebase Console.

**Current Status:** The app currently uses open/development rules (if any). Before using with real patient data, these rules MUST be configured.

---

## Collections and Paths Used

Based on codebase analysis, the following Firebase paths are actively used:

### Firestore Collections
- `userProfiles` - User account profiles (email, name, photoURL, role, timestamps)
- `quizReports` - Quiz results and scores
- `patients` - Patient profiles (in doctor subcollections)

### Realtime Database Paths
- `users/{userId}/profile` - User profile data
- `users/{userId}/reports` - User quiz reports
- `doctors/{doctorId}/patients` - Doctor's patient list
- `doctors/{doctorId}/patients/{patientId}/reports` - Patient reports per doctor
- `roles/{userId}` - User role assignments (doctor/user)

---

## Recommended Firestore Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }
    
    function isOwner(userId) {
      return request.auth.uid == userId;
    }
    
    function isDoctor() {
      return exists(/databases/$(database)/documents/userProfiles/$(request.auth.uid)) &&
             get(/databases/$(database)/documents/userProfiles/$(request.auth.uid)).data.role == 'doctor';
    }
    
    // User Profiles
    match /userProfiles/{userId} {
      allow read: if isAuthenticated() && isOwner(userId);
      allow create: if isAuthenticated() && isOwner(userId);
      allow update: if isAuthenticated() && isOwner(userId);
      allow delete: if false; // Never allow profile deletion via client
    }
    
    // Quiz Reports
    match /quizReports/{reportId} {
      allow read: if isAuthenticated() && 
                   (resource == null || resource.data.userId == request.auth.uid);
      allow create: if isAuthenticated() && 
                     request.resource.data.userId == request.auth.uid;
      allow update: if false; // Reports should be immutable
      allow delete: if false;
    }
    
    // Deny all other collections by default
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

---

## Recommended Realtime Database Rules

```json
{
  "rules": {
    
    // Helper functions
    ".read": false,
    ".write": false,
    
    "users": {
      "$uid": {
        // Users can only access their own data
        ".read": "auth != null && auth.uid == $uid",
        ".write": "auth != null && auth.uid == $uid",
        
        "profile": {
          ".validate": "newData.hasChildren(['email', 'name', 'role'])"
        },
        
        "reports": {
          "$reportId": {
            ".validate": "newData.hasChildren(['quizName', 'score', 'timestamp'])"
          }
        }
      }
    },
    
    "doctors": {
      "$doctorId": {
        // Only the doctor can access their patient data
        ".read": "auth != null && auth.uid == $doctorId",
        ".write": "auth != null && auth.uid == $doctorId",
        
        "patients": {
          "$patientId": {
            "reports": {
              "$reportId": {
                ".validate": "newData.hasChildren(['quizName', 'score', 'timestamp'])"
              }
            }
          }
        }
      }
    },
    
    "roles": {
      "$uid": {
        // Only admins can write roles (configure admin UIDs manually)
        ".read": "auth != null && auth.uid == $uid",
        ".write": "auth != null && root.child('admins').child(auth.uid).exists()"
      }
    },
    
    "admins": {
      // Pre-configure admin UIDs here for role management
      "$adminUid": {
        ".read": "auth != null && auth.uid == $adminUid",
        ".write": "auth != null && auth.uid == $adminUid"
      }
    }
  }
}
```

---

## How to Apply These Rules

### Firestore Rules:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (projeccvi)
3. Navigate to "Firestore Database" → "Rules" tab
4. Paste the Firestore rules above
5. Click "Publish"

### Realtime Database Rules:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (projeccvi)
3. Navigate to "Realtime Database" → "Rules" tab
4. Paste the Realtime Database rules above
5. Click "Publish"

---

## Security Considerations

### Current Risks (Before Rules Applied):
- **Data Exposure:** Without rules, authenticated users might access other users' data
- **Data Tampering:** Users could potentially modify other users' reports
- **No Data Validation:** No server-side validation of data structure

### Mitigated by These Rules:
- User data isolation (users can only access their own data)
- Doctor-patient data isolation
- Immutable reports (reports cannot be modified after creation)
- Basic data validation

### Remaining Risks (Even After Rules):
- **Client-side Security:** Rules don't protect against malicious client code on user's device
- **Data Encryption:** Data is NOT encrypted at rest by these rules (Firebase handles this)
- **Audit Logging:** No audit trail of who accessed what data
- **Rate Limiting:** No protection against abuse/quota exhaustion

---

## Demo/Pitch Mode Recommendations

For Shark Tank / Hospital pitch demonstrations:

1. **Use Test Data Only:** Never use real patient PHI (Protected Health Information)
2. **Clearly Label:** Add prominent "DEMO MODE - NOT FOR CLINICAL USE" banners
3. **Apply Basic Rules:** At minimum, apply the rules above to show security awareness
4. **Document Limitations:** Be transparent about what's not yet implemented

---

## Next Steps for Production

Before real clinical use, you MUST:

1. ✅ Apply the recommended security rules above
2. ✅ Enable Firebase App Check to prevent abuse
3. ✅ Implement server-side data validation (Cloud Functions)
4. ✅ Add audit logging for compliance (HIPAA/GDPR)
5. ✅ Complete a security audit
6. ✅ Obtain legal review for clinical use
7. ✅ Add encryption for sensitive fields if required
8. ✅ Implement proper backup/disaster recovery

---

## Questions?

Consult Firebase documentation: https://firebase.google.com/docs/rules

**Last Updated:** June 2026
**Percepto Version:** Demo-Ready Cleanup
