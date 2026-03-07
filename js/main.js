// main.js - RIMBOOK avec les informations du client

const booksData = [
    {
        id: 1,
        title: "L'Enfant noir",
        author: "Camara Laye",
        price: 10.5,
        category: "roman",
        image: "images/books/camara-laye.jpg",
        description: "Dans ce roman autobiographique, Camara Laye nous plonge dans son enfance en Haute-Guinée.",
        isNew: true,
        isBestseller: true
    },
    {
        id: 2,
        title: "Marche ou crève",
        author: "Stephen King",
        price: 12.5,
        category: "roman",
        image: "images/books/ray.jpg",
        description: "Dans un univers dystopique, cent adolescents participent à une épreuve de marche forcée.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 3,
        title: "Charlotte",
        author: "David Foenkinos",
        price: 10.00,
        category: "roman",
        image: "images/books/charlotte.jpg",
        description: "Ce roman retrace la vie tragique de Charlotte Salomon.",
        isNew: false,
        isBestseller: true
    },
    {
        id: 4,
        title: "La Femme de ménage",
        author: "Freida McFadden",
        price: 10.99,
        category: "roman",
        image: "images/books/femme-menage.jpg",
        description: "Millie devient femme de ménage chez les Winchester et découvre de sombres secrets.",
        isNew: true,
        isBestseller: true
    },
    {
        id: 5,
        title: "L'Arbre à la cour criminelle",
        author: "Patrick Masure",
        price: 10.5,
        category: "roman",
        image: "images/books/arbre-cours.jpg",
        description: "Un ancien juge enquête sur des événements troublants en Sologne.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 6,
        title: "Je voudrais vous parler...",
        author: "Isabelle Deljehier",
        price: 10.5,
        category: "poesie",
        image: "images/books/je-veux-parler.jpg",
        description: "Recueil de 28 'nouvelles-poésies' à travers différentes époques.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 7,
        title: "Mille vies en une",
        author: "Mario Luraschi",
        price: 10.5,
        category: "essai",
        image: "images/books/mille-en-un.jpg",
        description: "L'autobiographie du célèbre cascadeur équestre.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 8,
        title: "Et le ciel a oublié de pleuvoir",
        author: "À renseigner",
        price: 10.5,
        category: "roman",
        image: "images/books/ciel-oublie.jpg",
        description: "Description à ajouter.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 9,
        title: "Poésie de la nature à l'âge abbasside",
        author: "Farhat Messaadi",
        price: 10.5,
        category: "essai",
        image: "images/books/poesie-nature.jpg",
        description: "La place de la nature dans la poésie arabe de l'âge d'or abbasside.",
        isNew: false,
        isBestseller: false
    }
];

// État de l'application
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

document.addEventListener('DOMContentLoaded', function() {
    displayBooks(booksData);
    updateCartCount();
    updateFavoriteCount();
    setupEventListeners();
});

function displayBooks(books) {
    const container = document.getElementById('booksContainer');
    if (!container) return;

    container.innerHTML = books.map(book => `
        <div class="book-card" data-id="${book.id}">
            <div class="book-image">
                <img src="${book.image}" alt="${book.title}" 
                     onerror="this.src='https://placehold.co/200x250/002CC8/white?text=Livre'">
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
    if (countEl) countEl.textContent = favorites.length;
}

function addToCart(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;

    const existingItem = cart.find(item => item.id === bookId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...book, quantity: 1 });
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
                             onerror="this.src='https://placehold.co/60x80/002CC8/white?text=Livre'">
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

function showCheckout() {
    document.querySelector('.modal')?.remove();
    
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="this.closest('.modal').remove()">&times;</span>
            <h2 class="modal-title">Finaliser votre commande</h2>
            <p style="margin-bottom:20px;padding:15px;background:#f0f4ff;border-radius:8px;">
                <i class="fas fa-truck"></i> Livraison sous 72h - Prix selon la localité<br>
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
                En commandant, vous acceptez les conditions de livraison (72h, prix selon localité).
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

    // Créer la commande
    const order = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        customer: { fullName, phone, address },
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        paymentMethod,
        status: 'confirmée'
    };

    // Sauvegarder
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Vider le panier
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    // Fermer le modal
    document.querySelector('.modal')?.remove();

    // Message de confirmation
    const message = `
        ✅ Commande confirmée !\n
        Total: ${order.total.toFixed(2)} €\n
        Livraison sous 72h\n
        Paiement: ${paymentMethod === 'bankily' ? 'Bankily 32202460' : 'À la livraison'}\n
        Contact WhatsApp: 41291914
    `;
    showMessage('Commande confirmée ! Nous vous contacterons bientôt.', 'success');
    
    // Option WhatsApp
    if (confirm('Voulez-vous envoyer la confirmation par WhatsApp ?')) {
        const text = encodeURIComponent(`Nouvelle commande RIMBOOK:\nNom: ${fullName}\nTéléphone: ${phone}\nTotal: ${order.total}€\nAdresse: ${address}`);
        window.open(`https://wa.me/22241291914?text=${text}`, '_blank');
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
                            <img src="${book.image}" alt="${book.title}" style="height: 150px; object-fit: cover;">
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
                <p><i class="fas fa-truck"></i> Livraison sous 72h - Prix selon localité</p>
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

// Export
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
