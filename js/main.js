// main.js - Fonctions principales de la librairie

// Données des livres (à remplacer par les vrais livres du client)
const booksData = [
    {
        id: 1,
        title: "Le Voyage Immobile",
        author: "Jean Dupont",
        price: 15.99,
        category: "roman",
        image: "https://placehold.co/200x250/002CC8/white?text=Livre+1",
        description: "Un roman captivant sur le voyage intérieur",
        isNew: true,
        isBestseller: true
    },
    {
        id: 2,
        title: "Poèmes du Soir",
        author: "Jean Dupont",
        price: 12.50,
        category: "poesie",
        image: "https://placehold.co/200x250/4169E1/white?text=Livre+2",
        description: "Recueil de poèmes inspirants",
        isNew: true,
        isBestseller: false
    },
    {
        id: 3,
        title: "L'Art d'Écrire",
        author: "Jean Dupont",
        price: 18.00,
        category: "essai",
        image: "https://placehold.co/200x250/1a1a1a/white?text=Livre+3",
        description: "Essai sur le processus créatif",
        isNew: false,
        isBestseller: true
    },
    {
        id: 4,
        title: "Contes pour Enfants",
        author: "Jean Dupont",
        price: 14.99,
        category: "jeunesse",
        image: "https://placehold.co/200x250/28a745/white?text=Livre+4",
        description: "Histoires merveilleuses pour les petits",
        isNew: true,
        isBestseller: false
    }
];

// État de l'application
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentUser = null;

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    displayBooks(booksData);
    updateCartCount();
    updateFavoriteCount();
    setupEventListeners();
});

// Afficher les livres
function displayBooks(books) {
    const container = document.getElementById('booksContainer');
    if (!container) return;

    container.innerHTML = books.map(book => `
        <div class="book-card" data-id="${book.id}">
            <div class="book-image">
                <img src="${book.image}" alt="${book.title}">
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
            </div>
        </div>
    `).join('');
}

// Vérifier si un livre est en favori
function isFavorite(bookId) {
    return favorites.some(fav => fav.id === bookId);
}

// Ajouter/Retirer des favoris
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
    displayBooks(booksData); // Rafraîchir l'affichage
}

// Mettre à jour le compteur de favoris
function updateFavoriteCount() {
    const countEl = document.getElementById('favoriteCount');
    if (countEl) {
        countEl.textContent = favorites.length;
    }
}

// Ajouter au panier
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

// Mettre à jour le compteur du panier
function updateCartCount() {
    const countEl = document.getElementById('cartCount');
    if (countEl) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        countEl.textContent = totalItems;
    }
}

// Afficher le panier
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
                        <img src="${item.image}" alt="${item.title}" class="cart-item-image">
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
                    Passer à la caisse
                </button>
            ` : ''}
        </div>
    `;
    document.body.appendChild(modal);
}

// Mettre à jour la quantité dans le panier
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
        // Fermer l'ancien modal et rouvrir
        document.querySelector('.modal')?.remove();
        showCart();
    }
}

// Retirer du panier
function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    document.querySelector('.modal')?.remove();
    showCart();
    showMessage('Livre retiré du panier', 'success');
}

// Afficher la page de paiement
function showCheckout() {
    document.querySelector('.modal')?.remove();
    
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="this.closest('.modal').remove()">&times;</span>
            <h2 class="modal-title">Finaliser la commande</h2>
            <form id="checkoutForm" onsubmit="event.preventDefault(); processOrder()">
                <div class="form-group">
                    <label>Nom complet</label>
                    <input type="text" id="fullName" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label>Téléphone</label>
                    <input type="tel" id="phone" required>
                </div>
                <div class="form-group">
                    <label>Adresse de livraison</label>
                    <textarea id="address" rows="3" required></textarea>
                </div>
                <div class="form-group">
                    <label>Mode de paiement</label>
                    <select id="paymentMethod" required>
                        <option value="">Choisissez...</option>
                        <option value="bankily">Bankily</option>
                        <option value="masrvi">Masrvi</option>
                        <option value="delivery">Paiement à la livraison</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;">
                    Confirmer la commande
                </button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

// Traiter la commande
function processOrder() {
    const fullName = document.getElementById('fullName')?.value;
    const email = document.getElementById('email')?.value;
    const phone = document.getElementById('phone')?.value;
    const address = document.getElementById('address')?.value;
    const paymentMethod = document.getElementById('paymentMethod')?.value;

    if (!fullName || !email || !phone || !address || !paymentMethod) {
        showMessage('Veuillez remplir tous les champs', 'error');
        return;
    }

    // Créer la commande
    const order = {
        id: Date.now(),
        date: new Date().toISOString(),
        customer: { fullName, email, phone, address },
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        paymentMethod,
        status: 'pending'
    };

    // Sauvegarder la commande
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Vider le panier
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    // Fermer le modal
    document.querySelector('.modal')?.remove();

    // Afficher confirmation
    showMessage(`Commande confirmée ! N°: ${order.id}`, 'success');

    // Rediriger selon le mode de paiement
    if (paymentMethod === 'bankily' || paymentMethod === 'masrvi') {
        showPaymentInstructions(paymentMethod, order.total);
    }
}

// Afficher les instructions de paiement
function showPaymentInstructions(method, amount) {
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="this.closest('.modal').remove()">&times;</span>
            <h2 class="modal-title">Paiement par ${method === 'bankily' ? 'Bankily' : 'Masrvi'}</h2>
            <div style="text-align:center;">
                <p>Montant à payer: <strong>${amount.toFixed(2)} €</strong></p>
                <p>Numéro de téléphone: <strong>+222 12 34 56 78</strong></p>
                <p>Nom: <strong>Librairie Client</strong></p>
                <p style="margin:20px 0;">1. Ouvrez votre application ${method === 'bankily' ? 'Bankily' : 'Masrvi'}</p>
                <p>2. Effectuez le transfert vers ce numéro</p>
                <p>3. Envoyez la confirmation par WhatsApp</p>
                <button class="btn btn-primary" onclick="window.open('https://wa.me/22212345678?text=Je%20viens%20de%20payer%20ma%20commande', '_blank')">
                    Confirmer sur WhatsApp
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Afficher les favoris
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
                            <img src="${book.image}" alt="${book.title}" style="height: 150px;">
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

// Afficher la section auteur
function showAuthor() {
    const section = document.getElementById('authorSection');
    if (section) {
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Afficher les livres
function showBooks() {
    document.querySelector('.books-section').scrollIntoView({ behavior: 'smooth' });
}

// Filtrer par catégorie
function filterCategory(category) {
    if (category === 'all') {
        displayBooks(booksData);
    } else {
        const filtered = booksData.filter(book => book.category === category);
        displayBooks(filtered);
    }
    document.querySelector('.books-section').scrollIntoView({ behavior: 'smooth' });
}

// Rechercher des livres
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

// Afficher les nouveautés
function showNewReleases() {
    const newBooks = booksData.filter(book => book.isNew);
    displayBooks(newBooks);
    document.querySelector('.books-section').scrollIntoView({ behavior: 'smooth' });
}

// Afficher les meilleures ventes
function showBestsellers() {
    const bestsellers = booksData.filter(book => book.isBestseller);
    displayBooks(bestsellers);
    document.querySelector('.books-section').scrollIntoView({ behavior: 'smooth' });
}

// Afficher le formulaire de connexion
function toggleLogin() {
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="this.closest('.modal').remove()">&times;</span>
            <h2 class="modal-title">Connexion / Inscription</h2>
            <form onsubmit="event.preventDefault(); login()">
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="loginEmail" required>
                </div>
                <div class="form-group">
                    <label>Mot de passe</label>
                    <input type="password" id="loginPassword" required>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;">
                    Se connecter
                </button>
            </form>
            <p style="text-align:center;margin:15px 0;">Pas encore de compte ?</p>
            <button class="btn btn-secondary" style="width:100%;" onclick="showRegister()">
                Créer un compte
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Afficher le formulaire d'inscription
function showRegister() {
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="this.closest('.modal').remove()">&times;</span>
            <h2 class="modal-title">Inscription</h2>
            <form onsubmit="event.preventDefault(); register()">
                <div class="form-group">
                    <label>Nom complet</label>
                    <input type="text" id="regName" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="regEmail" required>
                </div>
                <div class="form-group">
                    <label>Téléphone</label>
                    <input type="tel" id="regPhone" required>
                </div>
                <div class="form-group">
                    <label>Mot de passe</label>
                    <input type="password" id="regPassword" required>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;">
                    S'inscrire
                </button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

// Fonction de connexion (simulée)
function login() {
    showMessage('Connexion réussie !', 'success');
    document.querySelector('.modal')?.remove();
}

// Fonction d'inscription (simulée)
function register() {
    showMessage('Inscription réussie ! Vous pouvez maintenant vous connecter.', 'success');
    document.querySelector('.modal')?.remove();
}

// Afficher les événements
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
                <p><i class="fas fa-map-marker"></i> Librairie Centrale, Nouakchott</p>
            </div>
            <div style="margin:20px 0;">
                <h3>Rencontre littéraire</h3>
                <p><i class="fas fa-calendar"></i> 22 Mars 2026 - 16h00</p>
                <p><i class="fas fa-map-marker"></i> Institut Français, Nouakchott</p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Afficher la page de contact
function showContact() {
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="this.closest('.modal').remove()">&times;</span>
            <h2 class="modal-title">Contactez-nous</h2>
            <form onsubmit="event.preventDefault(); sendMessage()">
                <div class="form-group">
                    <label>Nom</label>
                    <input type="text" id="contactName" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="contactEmail" required>
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <textarea id="contactMessage" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;">
                    Envoyer
                </button>
            </form>
            <div style="margin-top:20px;padding-top:20px;border-top:1px solid var(--border-color);">
                <p><i class="fas fa-phone"></i> +222 12 34 56 78</p>
                <p><i class="fas fa-envelope"></i> contact@librairie.com</p>
                <p><i class="fas fa-map-marker"></i> Nouakchott, Mauritanie</p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Envoyer un message de contact
function sendMessage() {
    showMessage('Message envoyé ! Nous vous répondrons bientôt.', 'success');
    document.querySelector('.modal')?.remove();
}

// Afficher un message de notification
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

// Configurer les écouteurs d'événements
function setupEventListeners() {
    // Fermer les dropdowns en cliquant ailleurs
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

// Basculer le dropdown des catégories
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

// Exporter les fonctions pour les utiliser dans le HTML
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
window.showRegister = showRegister;
