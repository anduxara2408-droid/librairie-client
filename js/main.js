// main.js - RIMBOOK avec tous les livres et fonction résumé
// Version avec les vraies images des livres

// ============================================
// DONNÉES DES LIVRES (41 livres au total - supprimé Je veux parler)
// ============================================

const booksData = [
    // === LIVRES EXISTANTS (id 1-9) - GARDÉS TELS QUELS ===
    {
        id: 1,
        title: "L'Enfant noir",
        author: "Camara Laye",
        price: 15.99,
        category: "roman",
        image: "images/books/camara-laye.jpg",
        description: "Dans ce roman autobiographique, Camara Laye nous plonge dans son enfance en Haute-Guinée. Il décrit avec tendresse la vie de son village, les traditions, le travail de son père forgeron, et son initiation au monde des adultes, jusqu'à son départ pour la France.",
        isNew: true,
        isBestseller: true
    },
    {
        id: 2,
        title: "Marche ou crève",
        author: "Stephen King",
        price: 12.50,
        category: "roman",
        image: "images/books/ray.jpg",
        description: "Dans un univers dystopique, cent adolescents participent à une épreuve de marche forcée où le dernier survivant gagne. Le livre suit Ray Garraty, 16 ans, et explore la psychologie des concurrents poussés dans leurs derniers retranchements.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 3,
        title: "Charlotte",
        author: "David Foenkinos",
        price: 18.00,
        category: "roman",
        image: "images/books/charlotte.jpg",
        description: "Ce roman retrace la vie tragique de Charlotte Salomon, une peintre juive allemande morte à Auschwitz à 26 ans. Le livre, écrit dans un style poétique, est une quête pour comprendre le destin de cette artiste.",
        isNew: false,
        isBestseller: true
    },
    {
        id: 4,
        title: "La Femme de ménage",
        author: "Freida McFadden",
        price: 14.99,
        category: "roman",
        image: "images/books/femme-menage.jpg",
        description: "Millie, une femme au passé trouble, devient femme de ménage chez les Winchester, un couple riche. Elle découvre rapidement que la maison et ses occupants cachent de sombres secrets.",
        isNew: true,
        isBestseller: true
    },
    {
        id: 5,
        title: "L'Arbre à la cour criminelle",
        author: "Patrick Masure",
        price: 20.00,
        category: "roman",
        image: "images/books/arbre-cours.jpg",
        description: "Dans le milieu élitiste des passionnés d'arbres en Sologne, un ancien juge d'instruction enquête sur des événements troublants au sein d'un club huppé.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 6,
        title: "Je voudrais vous parler...",
        author: "Isabelle Deljehier",
        price: 7.63,
        category: "poesie",
        image: "images/books/je-veux-parler.jpg",
        description: "Un recueil original de 28 'nouvelles-poésies' mettant en scène des personnages à travers différentes époques historiques, mêlant destins atypiques, histoires d'amour et voyages.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 7,
        title: "Mille vies en une",
        author: "Mario Luraschi",
        price: 25.00,
        category: "essai",
        image: "images/books/mille-en-un.jpg",
        description: "L'autobiographie du célèbre cascadeur équestre du cinéma français. Il raconte sa carrière exceptionnelle, ayant travaillé avec les plus grands acteurs.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 8,
        title: "Et le ciel a oublié de pleuvoir",
        author: "À renseigner",
        price: 15.99,
        category: "roman",
        image: "images/books/ciel-oublie.jpg",
        description: "Description à ajouter dès que possible.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 9,
        title: "Poésie de la nature à l'âge abbasside",
        author: "Farhat Messaadi",
        price: 29.99,
        category: "essai",
        image: "images/books/poesie-nature.jpg",
        description: "Cet ouvrage explore la place de la nature dans la poésie arabe de l'âge d'or abbasside (VIIIe-XIIIe siècles).",
        isNew: false,
        isBestseller: false
    },

    // === NOUVEAUX LIVRES (id 10-41) - AVEC LES VRAIES IMAGES ===
    {
        id: 10,
        title: "Histoire-Géographie 2de",
        author: "Martin Ivernel (dir.)",
        price: 25.99,
        category: "scolaire",
        image: "images/books/histoire-seconde.webp",
        description: "Manuel conforme au nouveau programme 2019. Il propose une approche chronologique et thématique de l'histoire et de la géographie, avec des études de cas, des documents variés (cartes, textes, images) et des fiches de révision.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 11,
        title: "SVT 2de - Sciences de la Vie et de la Terre",
        author: "Collectif Nathan",
        price: 26.50,
        category: "scolaire",
        image: "images/books/svt-2de.jpg",
        description: "Manuel de Sciences de la Vie et de la Terre pour la classe de seconde. Il aborde la Terre dans l'univers, la biodiversité, les enjeux environnementaux et la gestion des ressources naturelles.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 12,
        title: "SES 2de - Collection Sésame",
        author: "Gilles Durupt, Christine Duvigneau",
        price: 24.99,
        category: "scolaire",
        image: "images/books/ses-2de.jpg",
        description: "Manuel de Sciences Économiques et Sociales conforme au nouveau programme. Il introduit les concepts clés de l'économie, de la sociologie et des sciences politiques à travers des exemples concrets.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 13,
        title: "Hop! - CP (Méthode de lecture)",
        author: "Micheline Cellier",
        price: 12.50,
        category: "jeunesse",
        image: "images/books/hop-in.jpg",
        description: "Méthode de lecture pour le CP de la collection 'Un monde à lire'. Elle propose une approche équilibrée entre l'apprentissage du code et la compréhension des textes, avec le personnage de Kipanda.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 14,
        title: "Le Chat Chapeauté",
        author: "Dr. Seuss",
        price: 8.50,
        category: "jeunesse",
        image: "images/books/adele.jpg",  // En attendant l'image du Chat Chapeauté
        description: "Classique de la littérature jeunesse. Un chat haut en couleurs rend visite à deux enfants un jour de pluie, transformant leur maison en un terrain de jeu fantastique malgré les interdictions de leur poisson rouge.",
        isNew: true,
        isBestseller: true
    },
    {
        id: 15,
        title: "Les Abeilles",
        author: "Stéphanie Ledu",
        price: 7.60,
        category: "jeunesse",
        image: "images/books/mission-indigo.webp", // Image temporaire
        description: "Collection Mes p'tits docs. Découvre la vie fascinante des abeilles, leur organisation en ruche, leur rôle dans la pollinisation et la fabrication du miel.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 16,
        title: "Mission Indigo – Mathématiques 3e",
        author: "Christophe Barnet, Nadine Billa, et al.",
        price: 27.50,
        category: "scolaire",
        image: "images/books/mission-indigo.webp",
        description: "Manuel de mathématiques pour la classe de 3e, conforme aux nouveaux programmes. Il propose une approche progressive avec des exercices variés, des problèmes ouverts et des tâches complexes pour préparer le brevet.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 17,
        title: "Cup of Tea CP - Cycle 2",
        author: "Michelle Rivoire, Catherine Subtil",
        price: 18.90,
        category: "scolaire",
        image: "images/books/cup-of-tea-cp.jpg",
        description: "Méthode d'apprentissage de l'anglais pour le CP, fondée sur des comptines, des jeux de rôle et des activités ludiques.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 18,
        title: "Histoire-Géographie CM2",
        author: "Collectif Magnard",
        price: 24.99,
        category: "scolaire",
        image: "images/books/histoire-geographie-cm2.webp",
        description: "Manuel couvrant l'intégralité du programme d'histoire-géographie et d'EMC. Il propose des documents variés (cartes, frises, textes) et des activités pour comprendre les grandes périodes historiques.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 19,
        title: "SVT Cycle 4 (5e, 4e, 3e)",
        author: "André Duco, Bruno Semelin",
        price: 32.00,
        category: "scolaire",
        image: "images/books/svt-cycle-4.jpg",
        description: "Manuel unique pour le cycle 4, abordant la Terre, la vie et l'évolution des espèces. Il met l'accent sur la démarche scientifique et les enjeux environnementaux.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 20,
        title: "SES 2de – Sciences Économiques et Sociales",
        author: "Géraldine Durand, Laurent Clerc",
        price: 26.90,
        category: "scolaire",
        image: "images/books/ses-2de-sciences.jpg",
        description: "Manuel conforme au nouveau programme de seconde. Il introduit les concepts fondamentaux de l'économie, de la sociologie et de la science politique.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 21,
        title: "Hop in Cycle 3",
        author: "Collectif Belin",
        price: 19.50,
        category: "scolaire",
        image: "images/books/hop-in-cycle-3.webp",
        description: "Méthode d'anglais pour le cycle 3, axée sur la communication orale et l'acquisition du vocabulaire à travers des dialogues et des chansons.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 22,
        title: "Un monde à lire CP – Kimamila Série rouge",
        author: "Isabelle Le Guay, Nadine Robert",
        price: 16.50,
        category: "scolaire",
        image: "images/books/kimamila-cp.webp",
        description: "Méthode de lecture complète pour le CP, alliant apprentissage du code et compréhension de textes avec le personnage de Kimamila.",
        isNew: true,
        isBestseller: true
    },
    {
        id: 23,
        title: "Cap Maths CP",
        author: "Roland Charnay, Marie-Paule Dussuc",
        price: 17.90,
        category: "scolaire",
        image: "images/books/cap-maths.jpg",
        description: "Manuel de mathématiques fondé sur la résolution de problèmes. Une progression structurée pour construire le nombre, le calcul et la géométrie.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 24,
        title: "Les Francs – Histoire d'un peuple",
        author: "Collectif Ouest-France",
        price: 15.99,
        category: "histoire",
        image: "images/books/les-francs.webp",
        description: "Ouvrage retraçant l'histoire des Francs, de leurs origines germaniques à l'empire carolingien. Explore leur organisation sociale et leur rôle dans la formation de la France médiévale.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 25,
        title: "Adèle – Les mésaventures du quotidien",
        author: "Mr Tan",
        price: 11.50,
        category: "jeunesse",
        image: "images/books/adele.jpg",
        description: "Bande dessinée humoristique mettant en scène Adèle, une petite fille à l'imagination débordante et au caractère bien trempé.",
        isNew: true,
        isBestseller: true
    },
    {
        id: 26,
        title: "¡A mí me encanta! Espagnol 2de",
        author: "Araceli Rodríguez Tomp",
        price: 25.90,
        category: "scolaire",
        image: "images/books/a-mi-me-encanta.webp",
        description: "Manuel d'espagnol pour la classe de seconde, favorisant une approche culturelle et communicative avec des documents authentiques.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 27,
        title: "What's on... Workbook 6e",
        author: "Collectif Hachette",
        price: 8.90,
        category: "scolaire",
        image: "images/books/whats-workbook.webp",
        description: "Cahier d'activités pour l'apprentissage de l'anglais en 6e. Il propose des exercices ludiques pour consolider le vocabulaire et la grammaire.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 28,
        title: "Sciences et technologie en 50 enquêtes CM",
        author: "Jack Guichard",
        price: 23.50,
        category: "scolaire",
        image: "images/books/sciences-50-enquetes.jpg",
        description: "Ouvrage proposant 50 enquêtes pour aborder les sciences et la technologie au cycle 3. Chaque enquête invite à formuler des hypothèses et expérimenter.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 29,
        title: "À portée de mots CE2",
        author: "Jean-Claude Lucas, Janine Leclec'h",
        price: 19.50,
        category: "scolaire",
        image: "images/books/a-portee-de-mots.jpg",
        description: "Manuel de français pour le CE2, couvrant l'étude de la langue (grammaire, orthographe, vocabulaire) et la compréhension de textes.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 30,
        title: "Questionner le monde CP-CE1",
        author: "Collectif Retz",
        price: 21.90,
        category: "scolaire",
        image: "images/books/questionner-le-monde.jpg",
        description: "Fichier pédagogique pour découvrir le monde du vivant, de la matière et de l'espace. Des séquences clés en main avec des expériences simples.",
        isNew: true,
        isBestseller: false
    }
];

// ============================================
// ÉTAT DE L'APPLICATION
// ============================================

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// ============================================
// INITIALISATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    displayBooks(booksData);
    updateCartCount();
    updateFavoriteCount();
    setupEventListeners();
});

// ============================================
// FONCTIONS D'AFFICHAGE DES LIVRES
// ============================================

function displayBooks(books) {
    const container = document.getElementById('booksContainer');
    if (!container) return;

    container.innerHTML = books.map(book => `
        <div class="book-card" data-id="${book.id}">
            <div class="book-image">
                <img src="${book.image}" alt="${book.title}" 
                     onerror="this.onerror=null; this.src='https://placehold.co/200x250/002CC8/white?text=${encodeURIComponent(book.title)}'">
                ${book.isNew ? '<span class="book-badge">Nouveau</span>' : ''}
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <p class="book-price">${book.price.toFixed(2)} €</p>
                <div class="book-actions">
                    <button class="btn-add-cart" onclick="addToCart(${book.id})">
                        <i class="fas fa-shopping-cart"></i> Ajouter
                    </button>
                    <button class="btn-favorite ${isFavorite(book.id) ? 'active' : ''}" onclick="toggleFavorite(${book.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                <button class="btn-summary" onclick="showBookDescription(${book.id})" style="margin-top: 10px; width: 100%; padding: 8px; background: var(--light-blue); color: var(--primary-blue); border: 1px solid var(--primary-blue); border-radius: 6px; cursor: pointer; font-size: 13px;">
                    <i class="fas fa-arrow-right"></i> Voir résumé
                </button>
            </div>
        </div>
    `).join('');
}

function isFavorite(bookId) {
    return favorites.some(fav => fav.id === bookId);
}

function toggleFavorite(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;

    const index = favorites.findIndex(f => f.id === bookId);
    if (index === -1) {
        favorites.push(book);
        showMessage('Livre ajouté aux favoris', 'success');
    } else {
        favorites.splice(index, 1);
        showMessage('Livre retiré des favoris', 'success');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteCount();
    displayBooks(booksData);
}

function updateFavoriteCount() {
    const countEl = document.getElementById('favoriteCount');
    if (countEl) {
        countEl.textContent = favorites.length;
    }
}

function showFavorites() {
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="this.closest('.modal').remove()">&times;</span>
            <h2 class="modal-title">Mes Favoris</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px,1fr)); gap: 20px;">
                ${favorites.length === 0 ? '<p>Aucun favori</p>' : favorites.map(book => `
                    <div class="book-card">
                        <div class="book-image">
                            <img src="${book.image}" alt="${book.title}" style="height: 150px; object-fit: cover;"
                                 onerror="this.onerror=null; this.src='https://placehold.co/150x200/002CC8/white?text=${encodeURIComponent(book.title)}'">
                        </div>
                        <div class="book-info">
                            <h3 class="book-title" style="font-size: 14px;">${book.title}</h3>
                            <p class="book-price" style="font-size: 16px;">${book.price.toFixed(2)} €</p>
                            <button class="btn-add-cart" style="width:100%;" onclick="addToCart(${book.id}); this.closest('.modal').remove();">
                                Ajouter au panier
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// ============================================
// FONCTIONS PANIER
// ============================================

function addToCart(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;

    const existingItem = cart.find(item => item.id === bookId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...book,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showMessage('Livre ajouté au panier', 'success');
}

function updateCartCount() {
    const countEl = document.getElementById('cartCount');
    if (countEl) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        countEl.textContent = totalItems;
    }
}

function showCart() {
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="this.closest('.modal').remove()">&times;</span>
            <h2 class="modal-title">Votre Panier</h2>
            <div id="cartItems">
                ${cart.length === 0 ? '<p>Votre panier est vide</p>' : ''}
                ${cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.title}" class="cart-item-image"
                             onerror="this.onerror=null; this.src='https://placehold.co/60x80/002CC8/white?text=${encodeURIComponent(item.title)}'">
                        <div class="cart-item-details">
                            <div class="cart-item-title">${item.title}</div>
                            <div class="cart-item-price">${item.price.toFixed(2)} €</div>
                            <div class="cart-item-quantity">
                                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                                <span>${item.quantity}</span>
                                <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                                <button onclick="removeFromCart(${item.id})" style="margin-left:10px;color:red;">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="cart-total">
                Total: ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)} €
            </div>
            ${cart.length > 0 ? `
                <button class="btn btn-primary" style="width:100%;" onclick="showCheckout()">
                    Commander (Paiement à la livraison)
                </button>
            ` : ''}
        </div>
    `;
    document.body.appendChild(modal);
}

function updateQuantity(bookId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(bookId);
        return;
    }

    const item = cart.find(item => item.id === bookId);
    if (item) {
        item.quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        document.querySelector('.modal')?.remove();
        showCart();
    }
}

function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    document.querySelector('.modal')?.remove();
    showCart();
    showMessage('Livre retiré du panier', 'success');
}

// ============================================
// FONCTIONS DE PAIEMENT
// ============================================

function showCheckout() {
    document.querySelector('.modal')?.remove();
    
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="this.closest('.modal').remove()">&times;</span>
            <h2 class="modal-title">Finaliser votre commande</h2>
            <p style="margin-bottom:20px;padding:15px;background:#f0f4ff;border-radius:8px;">
                <i class="fas fa-truck"></i> Livraison sous 72h - 150 MRU<br>
                <i class="fas fa-university"></i> Paiement Bankily: <strong>32202460</strong><br>
                <i class="fas fa-whatsapp"></i> Contact: <strong>41291914</strong>
            </p>
            <form id="checkoutForm" onsubmit="event.preventDefault(); processOrder()">
                <div class="form-group">
                    <label>Nom complet</label>
                    <input type="text" id="fullName" required>
                </div>
                <div class="form-group">
                    <label>Téléphone</label>
                    <input type="tel" id="phone" placeholder="Ex: 41291914" required>
                </div>
                <div class="form-group">
                    <label>Adresse de livraison (ville, quartier)</label>
                    <textarea id="address" rows="2" required></textarea>
                </div>
                <div class="form-group">
                    <label>Mode de paiement</label>
                    <select id="paymentMethod" required>
                        <option value="delivery">Paiement à la livraison</option>
                        <option value="bankily">Bankily (32202460)</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;">
                    Confirmer la commande
                </button>
            </form>
            <p style="margin-top:15px;font-size:12px;color:#666;">
                En commandant, vous acceptez les conditions de livraison (72h, 150 MRU).
            </p>
        </div>
    `;
    document.body.appendChild(modal);
}

function processOrder() {
    const fullName = document.getElementById('fullName')?.value;
    const phone = document.getElementById('phone')?.value;
    const address = document.getElementById('address')?.value;
    const paymentMethod = document.getElementById('paymentMethod')?.value;

    if (!fullName || !phone || !address || !paymentMethod) {
        showMessage('Veuillez remplir tous les champs', 'error');
        return;
    }

    const order = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        customer: { fullName, phone, address },
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        paymentMethod,
        status: 'confirmée'
    };

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    document.querySelector('.modal')?.remove();

    showMessage('Commande confirmée ! Nous vous contacterons bientôt.', 'success');
    
    if (confirm('Voulez-vous envoyer la confirmation par WhatsApp ?')) {
        const text = encodeURIComponent(`Nouvelle commande RIMBOOK:\nNom: ${fullName}\nTéléphone: ${phone}\nTotal: ${order.total}€\nAdresse: ${address}`);
        window.open(`https://wa.me/22241291914?text=${text}`, '_blank');
    }
}

// ============================================
// FONCTIONS DE RÉSUMÉ
// ============================================

function showBookDescription(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;

    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <span class="modal-close" onclick="this.closest('.modal').remove()">&times;</span>
            <h2 class="modal-title">${book.title}</h2>
            <p style="font-style: italic; margin-bottom: 15px;">par ${book.author}</p>
            <div style="display: flex; gap: 20px; margin-bottom: 20px;">
                <img src="${book.image}" alt="${book.title}" style="width: 120px; height: auto; border-radius: 8px;" 
                     onerror="this.onerror=null; this.src='https://placehold.co/120x160/002CC8/white?text=${encodeURIComponent(book.title)}'">
                <div style="flex: 1;">
                    <p><strong>Prix :</strong> ${book.price.toFixed(2)} €</p>
                    <p><strong>Catégorie :</strong> ${book.category}</p>
                </div>
            </div>
            <div style="background: var(--light-blue); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="margin-bottom: 10px;">Résumé</h3>
                <p>${book.description}</p>
            </div>
            <button class="btn btn-primary" style="width: 100%;" onclick="addToCart(${book.id}); this.closest('.modal').remove();">
                <i class="fas fa-shopping-cart"></i> Ajouter au panier
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

// ============================================
// FONCTIONS DE NAVIGATION
// ============================================

function showAuthor() {
    document.getElementById('authorSection').scrollIntoView({ behavior: 'smooth' });
}

function showBooks() {
    document.querySelector('.books-section').scrollIntoView({ behavior: 'smooth' });
}

function filterCategory(category) {
    if (category === 'all') {
        displayBooks(booksData);
    } else {
        const filtered = booksData.filter(book => book.category === category);
        displayBooks(filtered);
    }
    document.querySelector('.books-section').scrollIntoView({ behavior: 'smooth' });
}

function searchBooks() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase();
    const category = document.getElementById('searchCategory')?.value;

    if (!searchTerm) {
        displayBooks(booksData);
        return;
    }

    const filtered = booksData.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm) ||
                             book.author.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || book.category === category;
        return matchesSearch && matchesCategory;
    });

    displayBooks(filtered);
}

function showNewReleases() {
    const newBooks = booksData.filter(book => book.isNew);
    displayBooks(newBooks);
    document.querySelector('.books-section').scrollIntoView({ behavior: 'smooth' });
}

function showBestsellers() {
    const bestsellers = booksData.filter(book => book.isBestseller);
    displayBooks(bestsellers);
    document.querySelector('.books-section').scrollIntoView({ behavior: 'smooth' });
}

function toggleLogin() {
    showMessage('Connexion - Fonction à venir', 'info');
}

function showEvents() {
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="this.closest('.modal').remove()">&times;</span>
            <h2 class="modal-title">Événements à venir</h2>
            <div style="margin:20px 0;">
                <h3>Séance de dédicaces</h3>
                <p><i class="fas fa-calendar"></i> 15 Mars 2026 - 15h00</p>
                <p><i class="fas fa-map-marker"></i> Espace Rimbook, Nouakchott</p>
            </div>
            <div style="margin:20px 0;">
                <h3>Rencontre avec Salihina Moussa Konaté</h3>
                <p><i class="fas fa-calendar"></i> 22 Mars 2026 - 16h00</p>
                <p><i class="fas fa-map-marker"></i> Institut Français, Nouakchott</p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function showContact() {
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="this.closest('.modal').remove()">&times;</span>
            <h2 class="modal-title">Contactez-nous</h2>
            <div style="margin:20px 0;">
                <p><i class="fas fa-phone"></i> <strong>41291914</strong> (WhatsApp)</p>
                <p><i class="fas fa-university"></i> Bankily: <strong>32202460</strong></p>
                <p><i class="fas fa-truck"></i> Livraison sous 72h - 150 MRU</p>
                <p><i class="fab fa-facebook"></i> Salihina Moussa / Rimbook</p>
                <p><i class="fab fa-instagram"></i> @rimbook</p>
            </div>
            <button class="btn btn-primary" onclick="window.open('https://wa.me/22241291914', '_blank')">
                <i class="fab fa-whatsapp"></i> WhatsApp
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

function showMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '20px';
    messageDiv.style.right = '20px';
    messageDiv.style.zIndex = '3000';
    messageDiv.style.padding = '15px 25px';
    messageDiv.style.borderRadius = '8px';
    messageDiv.style.animation = 'slideIn 0.3s';
    messageDiv.textContent = text;

    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

function setupEventListeners() {
    document.addEventListener('click', function(event) {
        const dropdown = document.getElementById('categoryDropdown');
        const dropdownLink = document.querySelector('.nav-link[onclick="toggleDropdown()"]');

        if (dropdown && dropdownLink) {
            if (!dropdownLink.contains(event.target) && !dropdown.contains(event.target)) {
                dropdown.classList.remove('show');
            }
        }
    });
}

function toggleDropdown() {
    document.getElementById('categoryDropdown')?.classList.toggle('show');
}

// Animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Exports
window.addToCart = addToCart;
window.toggleFavorite = toggleFavorite;
window.showCart = showCart;
window.showFavorites = showFavorites;
window.showAuthor = showAuthor;
window.showBooks = showBooks;
window.filterCategory = filterCategory;
window.searchBooks = searchBooks;
window.showNewReleases = showNewReleases;
window.showBestsellers = showBestsellers;
window.toggleLogin = toggleLogin;
window.showEvents = showEvents;
window.showContact = showContact;
window.toggleDropdown = toggleDropdown;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.showCheckout = showCheckout;
window.processOrder = processOrder;
window.showMessage = showMessage;
window.showBookDescription = showBookDescription;
