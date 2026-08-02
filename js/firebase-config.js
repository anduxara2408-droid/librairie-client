// ============================================================
// CONFIGURATION FIREBASE - MAURILIVRES
// ============================================================

const firebaseConfig = {
    apiKey: "AIzaSyAXo974rX4Uusq38DeT1GBsAIOkRzVdId0",
    authDomain: "maurilivres.firebaseapp.com",
    projectId: "maurilivres",
    storageBucket: "maurilivres.firebasestorage.app",
    messagingSenderId: "257301303933",
    appId: "1:257301303933:web:af953ad8f509507ee59714",
    measurementId: "G-BBJZ4JLNL9"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Références
const auth = firebase.auth();
const db = firebase.firestore();

// Exposer globalement
window.auth = auth;
window.db = db;

console.log('✅ Firebase configuré avec succès !');
console.log('📁 Projet :', firebaseConfig.projectId);
console.log('🔥 Authentification et Firestore prêts !');

// ============================================================
// AUTHENTIFICATION FIREBASE
// ============================================================

// Inscription
async function registerUserFirebase(email, password, name, phone) {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        await user.updateProfile({
            displayName: name
        });
        
        await db.collection('users').doc(user.uid).set({
            name: name,
            email: email,
            phone: phone,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            orders: [],
            favorites: []
        });
        
        return { success: true, user: user };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Connexion
async function loginUserFirebase(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Déconnexion
async function logoutUserFirebase() {
    try {
        await auth.signOut();
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Récupérer les données utilisateur
async function getUserData(uid) {
    try {
        const doc = await db.collection('users').doc(uid).get();
        if (doc.exists) {
            return { success: true, data: doc.data() };
        } else {
            return { success: false, message: "Utilisateur non trouvé" };
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Mettre à jour les favoris
async function updateUserFavorites(uid, favorites) {
    try {
        await db.collection('users').doc(uid).update({
            favorites: favorites
        });
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// Mettre à jour les commandes
async function addUserOrder(uid, orderData) {
    try {
        const userRef = db.collection('users').doc(uid);
        await userRef.update({
            orders: firebase.firestore.FieldValue.arrayUnion(orderData)
        });
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

// ============================================================
// EXPOSER LES FONCTIONS
// ============================================================
window.registerUserFirebase = registerUserFirebase;
window.loginUserFirebase = loginUserFirebase;
window.logoutUserFirebase = logoutUserFirebase;
window.getUserData = getUserData;
window.updateUserFavorites = updateUserFavorites;
window.addUserOrder = addUserOrder;
