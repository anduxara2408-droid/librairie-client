// ============================================================
// AUTHENTIFICATION - MAURILIVRES (avec Firebase)
// ============================================================

// ============================================================
// GESTION DE L'ÉTAT UTILISATEUR
// ============================================================

let currentUser = null;
let currentUserData = null;

// ============================================================
// OBSERVER L'ÉTAT DE CONNEXION
// ============================================================

firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
        currentUser = user;
        // Récupérer les données utilisateur
        const result = await getUserData(user.uid);
        if (result.success) {
            currentUserData = result.data;
            updateAuthUI();
        }
    } else {
        currentUser = null;
        currentUserData = null;
        updateAuthUI();
    }
});

// ============================================================
// INSCRIPTION AVEC FIREBASE
// ============================================================

async function handleRegisterFirebase(e) {
    e.preventDefault();
    
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const phone = document.getElementById('registerPhone').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const passwordConfirm = document.getElementById('registerPasswordConfirm').value.trim();
    
    // Validations
    if (!name || !email || !phone || !password || !passwordConfirm) {
        showAuthToast('Veuillez remplir tous les champs.', 'error');
        return;
    }
    
    if (password !== passwordConfirm) {
        showAuthToast('Les mots de passe ne correspondent pas.', 'error');
        return;
    }
    
    if (password.length < 6) {
        showAuthToast('Le mot de passe doit contenir au moins 6 caractères.', 'error');
        return;
    }
    
    // Créer l'utilisateur
    const result = await registerUserFirebase(email, password, name, phone);
    
    if (result.success) {
        showAuthToast('✅ Inscription réussie ! Bienvenue ' + name + ' 🎉', 'success');
        setTimeout(() => {
            closeAuthModal();
        }, 1500);
    } else {
        showAuthToast('❌ ' + result.message, 'error');
    }
}

// ============================================================
// CONNEXION AVEC FIREBASE
// ============================================================

async function handleLoginFirebase(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    
    if (!email || !password) {
        showAuthToast('Veuillez remplir tous les champs.', 'error');
        return;
    }
    
    const result = await loginUserFirebase(email, password);
    
    if (result.success) {
        showAuthToast('✅ Connexion réussie ! Bienvenue ! 🎉', 'success');
        setTimeout(() => {
            closeAuthModal();
        }, 1500);
    } else {
        showAuthToast('❌ ' + result.message, 'error');
    }
}

// ============================================================
// DÉCONNEXION AVEC FIREBASE
// ============================================================

async function logoutUser() {
    const result = await logoutUserFirebase();
    if (result.success) {
        showToast('👋 Déconnexion réussie');
        setTimeout(() => {
            location.reload();
        }, 500);
    } else {
        showToast('❌ Erreur lors de la déconnexion');
    }
}

// ============================================================
// AFFICHAGE DU MODALE AUTH
// ============================================================

function showAuthModal() {
    const existing = document.getElementById('authModal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'authModal';
    overlay.className = 'auth-modal-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'auth-modal';
    
    // Vérifier si l'utilisateur est déjà connecté
    if (currentUser && currentUserData) {
        modal.innerHTML = `
            <button class="auth-close" onclick="closeAuthModal()">&times;</button>
            <div style="text-align:center; padding:20px 0;">
                <i class="fas fa-user-circle" style="font-size:64px; color:#145daa;"></i>
                <h2 style="margin:10px 0 5px;">${currentUserData.name || currentUser.displayName || 'Utilisateur'}</h2>
                <p style="color:#6c757d;">${currentUser.email}</p>
                <p style="color:#6c757d; font-size:0.9rem;">${currentUserData.phone || ''}</p>
                <div style="margin:20px 0; padding:15px; background:#f8f9fa; border-radius:10px;">
                    <p><strong>📦 Commandes :</strong> ${currentUserData.orders ? currentUserData.orders.length : 0}</p>
                    <p><strong>❤️ Favoris :</strong> ${currentUserData.favorites ? currentUserData.favorites.length : 0}</p>
                </div>
                <button onclick="logoutUser()" style="width:100%; padding:12px; background:#dc3545; color:#fff; border:none; border-radius:10px; font-size:1rem; font-weight:600; cursor:pointer; transition:background 0.3s;">
                    <i class="fas fa-sign-out-alt"></i> Se déconnecter
                </button>
            </div>
        `;
    } else {
        modal.innerHTML = `
            <button class="auth-close" onclick="closeAuthModal()">&times;</button>
            <div style="display:flex; gap:10px; margin-bottom:20px; border-bottom:2px solid #e9ecef;">
                <button class="auth-tab active" data-tab="login" onclick="switchAuthTab('login')">Connexion</button>
                <button class="auth-tab" data-tab="register" onclick="switchAuthTab('register')">Inscription</button>
            </div>
            
            <!-- Formulaire de connexion -->
            <div id="authLoginForm">
                <form onsubmit="handleLoginFirebase(event)">
                    <div class="auth-form-group">
                        <label>Email <span class="required">*</span></label>
                        <input type="email" id="loginEmail" placeholder="votre@email.com" required>
                    </div>
                    <div class="auth-form-group">
                        <label>Mot de passe <span class="required">*</span></label>
                        <input type="password" id="loginPassword" placeholder="Votre mot de passe" required>
                    </div>
                    <button type="submit" class="auth-submit">Se connecter</button>
                </form>
                <p style="text-align:center; margin-top:12px; color:#6c757d; font-size:0.9rem;">
                    Pas encore de compte ? <a href="#" onclick="switchAuthTab('register')" style="color:#145daa; font-weight:600;">Inscrivez-vous</a>
                </p>
            </div>
            
            <!-- Formulaire d'inscription -->
            <div id="authRegisterForm" style="display:none;">
                <form onsubmit="handleRegisterFirebase(event)">
                    <div class="auth-form-group">
                        <label>Nom complet <span class="required">*</span></label>
                        <input type="text" id="registerName" placeholder="Votre nom et prénom" required>
                    </div>
                    <div class="auth-form-group">
                        <label>Email <span class="required">*</span></label>
                        <input type="email" id="registerEmail" placeholder="votre@email.com" required>
                    </div>
                    <div class="auth-form-group">
                        <label>Téléphone <span class="required">*</span></label>
                        <input type="tel" id="registerPhone" placeholder="Votre numéro de téléphone" required>
                    </div>
                    <div class="auth-form-group">
                        <label>Mot de passe <span class="required">*</span></label>
                        <input type="password" id="registerPassword" placeholder="Au moins 6 caractères" required minlength="6">
                    </div>
                    <div class="auth-form-group">
                        <label>Confirmer le mot de passe <span class="required">*</span></label>
                        <input type="password" id="registerPasswordConfirm" placeholder="Confirmez votre mot de passe" required>
                    </div>
                    <button type="submit" class="auth-submit">Créer mon compte</button>
                </form>
                <p style="text-align:center; margin-top:12px; color:#6c757d; font-size:0.9rem;">
                    Déjà un compte ? <a href="#" onclick="switchAuthTab('login')" style="color:#145daa; font-weight:600;">Connectez-vous</a>
                </p>
            </div>
        `;
    }
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closeAuthModal();
    });
    
    document.addEventListener('keydown', function closeOnEsc(e) {
        if (e.key === 'Escape') {
            closeAuthModal();
            document.removeEventListener('keydown', closeOnEsc);
        }
    });
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.remove();
}

// ============================================================
// CHANGEMENT D'ONGLET
// ============================================================

function switchAuthTab(tab) {
    const loginForm = document.getElementById('authLoginForm');
    const registerForm = document.getElementById('authRegisterForm');
    const tabs = document.querySelectorAll('.auth-tab');
    
    tabs.forEach(t => t.classList.remove('active'));
    
    if (tab === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        document.querySelector('.auth-tab[data-tab="login"]').classList.add('active');
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        document.querySelector('.auth-tab[data-tab="register"]').classList.add('active');
    }
}

// ============================================================
// TOAST
// ============================================================

function showAuthToast(message, type) {
    const old = document.querySelector('.auth-toast');
    if (old) old.remove();
    
    const toast = document.createElement('div');
    toast.className = 'auth-toast';
    toast.textContent = message;
    
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        info: '#17a2b8'
    };
    
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: ${colors[type] || '#333'};
        color: #fff;
        padding: 14px 28px;
        border-radius: 12px;
        font-weight: 500;
        font-size: 15px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.2);
        z-index: 9999999;
        opacity: 0;
        transition: opacity 0.3s ease;
        max-width: 90%;
        text-align: center;
        font-family: 'Inter', sans-serif;
    `;
    
    document.body.appendChild(toast);
    
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
    });
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// ============================================================
// MISE À JOUR DE L'INTERFACE
// ============================================================

function updateAuthUI() {
    const userLink = document.querySelector('.user-nav a[href="#"]:nth-child(2)');
    if (!userLink) return;
    
    const icon = userLink.querySelector('i');
    const span = userLink.querySelector('span');
    
    if (currentUser) {
        if (icon) icon.className = 'fas fa-user-check';
        if (span) {
            const name = currentUserData?.name || currentUser.displayName || 'Compte';
            span.textContent = name.length > 10 ? name.substring(0, 10) + '...' : name;
        }
        if (!userLink.querySelector('.connected-badge')) {
            const badge = document.createElement('span');
            badge.className = 'connected-badge';
            badge.textContent = '✓';
            userLink.appendChild(badge);
        }
    } else {
        if (icon) icon.className = 'fas fa-user';
        if (span) span.textContent = 'Compte';
        const badge = userLink.querySelector('.connected-badge');
        if (badge) badge.remove();
    }
}

// ============================================================
// SYNC FAVORIS AVEC FIREBASE
// ============================================================

async function syncFavoritesWithFirebase() {
    if (!currentUser) return;
    
    const localFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Si l'utilisateur a des favoris en local, les sync
    if (localFavorites.length > 0) {
        await updateUserFavorites(currentUser.uid, localFavorites);
        // Mettre à jour les données locales
        const result = await getUserData(currentUser.uid);
        if (result.success) {
            currentUserData = result.data;
            localStorage.setItem('favorites', JSON.stringify(currentUserData.favorites || []));
        }
    }
}

// ============================================================
// EXPOSER LES FONCTIONS
// ============================================================

window.showAuthModal = showAuthModal;
window.closeAuthModal = closeAuthModal;
window.switchAuthTab = switchAuthTab;
window.handleLoginFirebase = handleLoginFirebase;
window.handleRegisterFirebase = handleRegisterFirebase;
window.logoutUser = logoutUser;
window.updateAuthUI = updateAuthUI;
window.showAuthToast = showAuthToast;
window.syncFavoritesWithFirebase = syncFavoritesWithFirebase;
window.currentUser = currentUser;
window.currentUserData = currentUserData;

// ============================================================
// INITIALISATION
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    updateAuthUI();
});
