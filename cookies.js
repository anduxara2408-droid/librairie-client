// js/cookies.js - Gestion du consentement des cookies

(function() {
    // Vérifier si le consentement a déjà été donné
    if (localStorage.getItem('cookies_consent') === 'accepted') {
        return; // Ne rien afficher
    }

    // Créer le bandeau
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #1a1a2e;
        color: #fff;
        padding: 15px 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        z-index: 9999;
        font-size: 0.9rem;
        box-shadow: 0 -2px 10px rgba(0,0,0,0.3);
        font-family: 'Inter', sans-serif;
    `;

    banner.innerHTML = `
        <div style="flex:1; min-width:200px; margin-right:20px;">
            <span>🍪 Nous utilisons des cookies pour améliorer votre expérience. En poursuivant votre navigation, vous acceptez leur utilisation.</span>
        </div>
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <a href="cookies-politique.html" style="color:#aaa; text-decoration:underline; font-size:0.85rem;">Personnaliser</a>
            <button id="cookie-accept" style="background:#145daa; color:#fff; border:none; padding:8px 20px; border-radius:6px; cursor:pointer; font-weight:600;">Accepter</button>
            <button id="cookie-refuse" style="background:#555; color:#fff; border:none; padding:8px 20px; border-radius:6px; cursor:pointer;">Refuser</button>
        </div>
    `;

    document.body.appendChild(banner);

    // Gestion des boutons
    document.getElementById('cookie-accept').addEventListener('click', function() {
        localStorage.setItem('cookies_consent', 'accepted');
        banner.remove();
    });

    document.getElementById('cookie-refuse').addEventListener('click', function() {
        localStorage.setItem('cookies_consent', 'refused');
        banner.remove();
    });
})();
