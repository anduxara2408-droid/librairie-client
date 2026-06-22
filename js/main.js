// js/main.js - MAURILIVRES complet avec panier détaillé

// ============================================================
// DONNÉES DES LIVRES
// ============================================================
const booksData = [
    // ---- Romans ----
    { id: 1, title: "L'Enfant noir", author: "Camara Laye", price: 400, category: "roman", image: "images/books/camara-laye.jpg", description: "Autobiographie d'une enfance en Haute-Guinée.", isNew: true, isBestseller: true },
    { id: 2, title: "Marche ou crève", author: "Stephen King", price: 600, category: "roman", image: "images/books/marche-ou-creve.jpg", description: "Cent adolescents en marche forcée.", isNew: true, isBestseller: false },
    { id: 3, title: "Priére aux vivants pour leur pardonner d'être vivants", author: "Charlotte Delbo", price: 500, category: "poésie", image: "images/books/charlotte.jpg", description: "Vie tragique de Charlotte Salomon.", isNew: false, isBestseller: true },
    { id: 4, title: "La Femme de ménage", author: "Freida McFadden", price: 600, category: "roman", image: "images/books/femme-menage.jpg", description: "Millie découvre des secrets sombres.", isNew: true, isBestseller: true },
    { id: 5, title: "Nos étoiles contraires", author: "John Green", price: 600, category: "roman", image: "images/books/nos-etoiles-contraires.jpg", description: "Hazel et Augustus.", isNew: true, isBestseller: true },
    { id: 6, title: "Mille et un je", author: "Mariam Derwich", price: 300, category: "poésie", image: "images/books/mille-en-un.jpg", description: "Poppy et Rune.", isNew: true, isBestseller: false },
    { id: 7, title: "Les Chroniques de Narnia", author: "C.S. Lewis", price: 700, category: "jeunesse", image: "images/books/narnia.jpg", description: "Quatre enfants libèrent Narnia.", isNew: true, isBestseller: true },
    { id: 8, title: "La Sélection", author: "Kiera Cass", price: 550, category: "roman", image: "images/books/la-selection.jpg", description: "America Singer.", isNew: true, isBestseller: false },
    { id: 9, title: "Vampire Academy", author: "Richelle Mead", price: 600, category: "roman", image: "images/books/vampire-academy.jpg", description: "Rose protège Lissa.", isNew: true, isBestseller: false },
    { id: 10, title: "Le livre des étoiles", author: "Erik L'Homme", price: 500, category: "roman", image: "images/books/livre-etoiles.jpg", description: "Robin et Qadehar.", isNew: true, isBestseller: false },
    { id: 11, title: "Comme toi", author: "Lisa Jewell", price: 1000, category: "roman", image: "images/books/comme-toi.jpg", description: "Une fillette au visage d'une disparue.", isNew: true, isBestseller: false },
    { id: 12, title: "Le prince de la brume", author: "Carlos Ruiz Zafón", price: 550, category: "roman", image: "images/books/prince-brume.jpg", description: "Max et le Prince de la Brume.", isNew: true, isBestseller: false },
    { id: 13, title: "Oksa Pollock", author: "Anne Plichota", price: 600, category: "roman", image: "images/books/oksa-pollock.jpg", description: "Oksa et ses dons.", isNew: true, isBestseller: false },
    { id: 14, title: "Meurtre mode d'emploi", author: "Holly Jackson", price: 650, category: "roman", image: "images/books/meurtre-mode-emploi.jpg", description: "Pip enquête.", isNew: true, isBestseller: false },
    { id: 15, title: "L'Arbre à la cour criminelle", author: "Djibril Hamet Ly", price: 300, category: "théatre", image: "images/books/arbre-cours.jpg", description: "Enquête en Sologne.", isNew: true, isBestseller: false },
    { id: 16, title: "Je veux parler", author: "Djibril zakaria sall", price: 300, category: "poésie", image: "images/books/je-veux-parler.jpg", description: "28 nouvelles-poésies.", isNew: true, isBestseller: false },

    // ---- Développement personnel ----
    { id: 17, title: "L'autoroute du millionnaire", author: "MJ DeMarco", price: 2000, category: "developpement", image: "images/books/autoroute-millionnaire.jpg", description: "Devenez riche rapidement.", isNew: true, isBestseller: true },
    { id: 18, title: "Père riche, père pauvre", author: "Robert Kiyosaki", price: 2500, category: "developpement", image: "images/books/pere-riche-pere-pauvre.jpg", description: "Les clés de la réussite financière.", isNew: true, isBestseller: true },
    { id: 19, title: "Réfléchissez et devenez riche", author: "Napoleon Hill", price: 2000, category: "developpement", image: "images/books/reflechissez-devenez-riche.jpg", description: "Les 13 principes de la réussite.", isNew: true, isBestseller: true },
    { id: 20, title: "Atomic Habits", author: "James Clear", price: 1500, category: "developpement", image: "images/books/atomic-habits.jpg", description: "Changez vos habitudes.", isNew: true, isBestseller: true },
    { id: 21, title: "Les 4 accords toltèques", author: "Don Miguel Ruiz", price: 600, category: "developpement", image: "images/books/4-accords-tolteques.jpg", description: "Sagesse toltèque.", isNew: true, isBestseller: false },
    { id: 22, title: "L'Art subtil de s'en foutre", author: "Mark Manson", price: 1000, category: "developpement", image: "images/books/art-subtil-sen-foutre.webp", description: "Choisissez vos combats.", isNew: true, isBestseller: true },
    { id: 23, title: "Les 7 habitudes des gens efficaces", author: "Stephen Covey", price: 1500, category: "developpement", image: "images/books/7-habitudes.webp", description: "Management et productivité.", isNew: true, isBestseller: false },
    { id: 24, title: "La Semaine de 4 heures", author: "Tim Ferriss", price: 600, category: "developpement", image: "images/books/semaine-4-heures.webp", description: "Vivez mieux en travaillant moins.", isNew: true, isBestseller: false },

    // ---- Thrillers ----
    { id: 25, title: "La Psy", author: "Freida McFadden", price: 600, category: "thriller", image: "images/books/la-psy.jpg", description: "Tricia et Ethan piégés.", isNew: true, isBestseller: false },
    { id: 26, title: "La Conversion", author: "James Baldwin", price: 500, category: "thriller", image: "images/books/la-conversion.jpg", description: "John Grimes.", isNew: true, isBestseller: false },
    { id: 27, title: "Le Joueur d'échecs", author: "Stefan Zweig", price: 300, category: "thriller", image: "images/books/le-joueur-dechecs.jpg", description: "Czentovic.", isNew: true, isBestseller: true },
    { id: 28, title: "Les P'tites Poules", author: "Christian Jolibois", price: 350, category: "thriller", image: "images/books/ptites-poules.jpg", description: "Carmen et Carmélito.", isNew: true, isBestseller: false },

    // ---- Poésie ----
    { id: 29, title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", price: 500, category: "roman", image: "images/books/le-petit-prince.jpg", description: "Conte philosophique.", isNew: true, isBestseller: true },
    { id: 30, title: "Une saison en enfer", author: "Arthur Rimbaud", price: 500, category: "poesie", image: "images/books/saison-enfer.jpg", description: "Poésie en prose.", isNew: true, isBestseller: false },
    { id: 31, title: "Capitale de la douleur", author: "Paul Éluard", price: 500, category: "poesie", image: "images/books/capitale-douleur.jpg", description: "Surréalisme.", isNew: true, isBestseller: false },
    { id: 32, title: "Le Prophète", author: "Khalil Gibran", price: 500, category: "poesie", image: "images/books/prophete.jpg", description: "Amour, travail, liberté.", isNew: true, isBestseller: false },
    { id: 33, title: "Les Fleurs du Mal", author: "Charles Baudelaire", price: 500, category: "poesie", image: "images/books/les-fleurs-du-mal.jpg", description: "Symbolisme.", isNew: true, isBestseller: true },
    { id: 34, title: "Fureur et Mystère", author: "René Char", price: 500, category: "poesie", image: "images/books/fureur-mystere.jpg", description: "Résistance.", isNew: true, isBestseller: false },

    // ---- Mangas ----
    { id: 35, title: "One Piece – Tome 1", author: "Eiichiro Oda", price: 500, category: "manga", image: "images/books/one-piece-tome1.jpg", description: "Luffy veut devenir Roi des Pirates.", isNew: true, isBestseller: true },
    { id: 36, title: "Chainsaw Man – Tome 1", author: "Tatsuki Fujimoto", price: 600, category: "manga", image: "images/books/chainsaw-man-1.jpg", description: "Denji et son démon.", isNew: true, isBestseller: true },
    { id: 37, title: "l'attaque des Titans – Tome 1", author: "Hajime Isayama", price: 500, category: "manga", image: "images/books/attack-on-titan-1.jpg", description: "Eren contre les Titans.", isNew: true, isBestseller: true },
    { id: 38, title: "Naruto – Tome 1", author: "Masashi Kishimoto", price: 500, category: "manga", image: "images/books/naruto-1.jpg", description: "Le ninja au démon-renard.", isNew: true, isBestseller: true },
    { id: 39, title: "Dragon Ball – Tome 1", author: "Akira Toriyama", price: 500, category: "manga", image: "images/books/dragon-ball-1.jpg", description: "Son Goku et les Dragon Balls.", isNew: true, isBestseller: true },
    { id: 40, title: "Demon Slayer – Tome 1", author: "Koyoharu Gotouge", price: 500, category: "manga", image: "images/books/demon-slayer-1.jpg", description: "Tanjiro sauve sa sœur.", isNew: true, isBestseller: true },
    { id: 41, title: "Fruits Basket – Tome 1", author: "Natsuki Takaya", price: 500, category: "manga", image: "images/books/fruits-basket-1.jpg", description: "La malédiction du zodiaque.", isNew: true, isBestseller: false },
    { id: 42, title: "Sailor Moon – Tome 1", author: "Naoko Takeuchi", price: 500, category: "manga", image: "images/books/sailor-moon-1.jpg", description: "Usagi, guerrière magique.", isNew: true, isBestseller: false },
    { id: 43, title: "Jujutsu Kaisen – Tome 1", author: "Gege Akutami", price: 500, category: "manga", image: "images/books/jujutsu-kaisen-1.jpg", description: "Yuji et Sukuna.", isNew: true, isBestseller: true },
    { id: 44, title: "Vinland Saga – Tome 1", author: "Makoto Yukimura", price: 550, category: "manga", image: "images/books/vinland-saga-1.jpg", description: "Thorfinn, vengeance et paix.", isNew: true, isBestseller: false },

    // ---- Nouveaux livres ----
    { id: 45, title: "Hunger Games", author: "Suzanne Collins", price: 500, category: "roman", image: "images/books/hunger-games.jpg", description: "Katniss et les jeux de la faim.", isNew: true, isBestseller: true },
    { id: 46, title: "Matilda", author: "Roald Dahl", price: 400, category: "roman", image: "images/books/matilda.jpg", description: "Une petite fille surdouée.", isNew: true, isBestseller: false },
    { id: 47, title: "Le Petit Nicolas", author: "René Goscinny", price: 350, category: "roman", image: "images/books/le-petit-nicolas.jpg", description: "Les aventures de Nicolas.", isNew: true, isBestseller: false },
    { id: 48, title: "Tous nos lendemains", author: "lylyblabla", price: 850, category: "roman", image: "images/books/tous-nos-lendemains.jpg", description: "Un roman contemporain.", isNew: true, isBestseller: false },
    { id: 49, title: "Âmes miroirs", author: "Olivia Atwater", price: 600, category: "jeunesse", image: "images/books/ames-miroirs.jpg", description: "Un roman fantastique.", isNew: true, isBestseller: false },

    // ---- Mangas supplémentaires ----
    { id: 50, title: "One Piece – Tome 8", author: "Eiichiro Oda", price: 500, category: "manga", image: "images/books/one-piece-8.jpg", description: "Luffy et son équipage.", isNew: true, isBestseller: true },
    { id: 51, title: "One Punch Man – Tome 1", author: "Yusuke Murata", price: 500, category: "manga", image: "images/books/one-punch-man-1.jpg", description: "Saitama, le héros le plus puissant.", isNew: true, isBestseller: true },
    { id: 52, title: "Demon Slayer – Tome 9", author: "Koyoharu Gotouge", price: 500, category: "manga", image: "images/books/demon-slayer-9.jpg", description: "Tanjiro affronte les démons.", isNew: true, isBestseller: true },
    { id: 53, title: "Demon Slayer – Tome 12", author: "Koyoharu Gotouge", price: 500, category: "manga", image: "images/books/demon-slayer-12.jpg", description: "Suite des aventures.", isNew: true, isBestseller: true },
    { id: 54, title: "Demon Slayer – Tome 13", author: "Koyoharu Gotouge", price: 500, category: "manga", image: "images/books/demon-slayer-13.jpg", description: "Suite des aventures.", isNew: true, isBestseller: true },
    { id: 55, title: "Demon Slayer – Tome 14", author: "Koyoharu Gotouge", price: 500, category: "manga", image: "images/books/demon-slayer-14.jpg", description: "Suite des aventures.", isNew: true, isBestseller: true },
    { id: 56, title: "l'attaque des Titans – Tome 10", author: "Hajime Isayama", price: 500, category: "manga", image: "images/books/attack-on-titan-10.jpg", description: "Eren et les Titans.", isNew: true, isBestseller: true },
    { id: 57, title: "l'attaque des Titans – Tome 13", author: "Hajime Isayama", price: 500, category: "manga", image: "images/books/attack-on-titan-13.jpg", description: "Eren et les Titans.", isNew: true, isBestseller: true },
    { id: 58, title: "l'attaque des Titans – Tome 14", author: "Hajime Isayama", price: 500, category: "manga", image: "images/books/attack-on-titan-14.jpg", description: "Eren et les Titans.", isNew: true, isBestseller: true },
    { id: 59, title: "l'attaque des Titans – Tome 15", author: "Hajime Isayama", price: 500, category: "manga", image: "images/books/attack-on-titan-15.jpg", description: "Eren et les Titans.", isNew: true, isBestseller: true },
    { id: 60, title: "Hunter x Hunter – Tome 5", author: "Yoshihiro Togashi", price: 500, category: "manga", image: "images/books/hunter-x-hunter-5.jpg", description: "Gon et ses amis.", isNew: true, isBestseller: true },
    { id: 61, title: "Hunter x Hunter – Tome 7", author: "Yoshihiro Togashi", price: 500, category: "manga", image: "images/books/hunter-x-hunter-7.jpg", description: "Gon et ses amis.", isNew: true, isBestseller: true },
    { id: 62, title: "Naruto – Tome 10", author: "Masashi Kishimoto", price: 500, category: "manga", image: "images/books/naruto-10.jpg", description: "Naruto et ses compagnons.", isNew: true, isBestseller: true },
    { id: 63, title: "Naruto – Tome 11", author: "Masashi Kishimoto", price: 500, category: "manga", image: "images/books/naruto-11.jpg", description: "Naruto et ses compagnons.", isNew: true, isBestseller: true },
    { id: 64, title: "Blue Lock – Tome 1", author: "Muneyuki Kaneshiro", price: 500, category: "manga", image: "images/books/blue-lock-1.jpg", description: "Le football version survival.", isNew: true, isBestseller: true },
    { id: 65, title: "Blue Lock – Tome 2", author: "Muneyuki Kaneshiro", price: 500, category: "manga", image: "images/books/blue-lock-2.jpg", description: "Le football version survival.", isNew: true, isBestseller: true },
    { id: 66, title: "Chainsaw Man – Tome 7", author: "Tatsuki Fujimoto", price: 500, category: "manga", image: "images/books/chainsaw-man-7.jpg", description: "Denji et ses démons.", isNew: true, isBestseller: true },
    { id: 67, title: "Chainsaw Man – Tome 8", author: "Tatsuki Fujimoto", price: 500, category: "manga", image: "images/books/chainsaw-man-8.jpg", description: "Denji et ses démons.", isNew: true, isBestseller: true },

    // ---- Nouveaux livres jeunesse / albums / BD ----
    { id: 68, title: "Je t'aimerai toujours, quoi qu'il arrive...", author: "Debi Gliori", price: 500, category: "jeunesse", image: "images/books/je-taimerai-toujours.jpg", description: "Un album tendre sur l'amour inconditionnel.", isNew: true, isBestseller: false },
    { id: 69, title: "Le monstre des couleurs : la couleur des émotions", author: "Anna Llenas", price: 1500, category: "jeunesse", image: "images/books/le-monstre-des-couleurs.jpg", description: "Un livre animé pour aider les enfants à identifier leurs émotions.", isNew: true, isBestseller: true },
    { id: 70, title: "Grosse Colère", author: "Mireille d'Allancé", price: 500, category: "jeunesse", image: "images/books/grosse-colere.jpg", description: "Une histoire sur la colère et comment l'apprivoiser.", isNew: true, isBestseller: false },
    { id: 71, title: "Au revoir Blaireau", author: "Susan Varley", price: 500, category: "jeunesse", image: "images/books/au-revoir-blaireau.jpg", description: "Un album poignant sur le deuil et l'amitié.", isNew: true, isBestseller: false },
    { id: 72, title: "La boite à étoiles", author: "Jerome Camil", price: 1100, category: "jeunesse", image: "images/books/la-boite-a-etoiles.jpg", description: "Une histoire poétique sur les rêves et l'imagination.", isNew: true, isBestseller: false },
    { id: 73, title: "Une surprise pour maman", author: "Karine-Marie Amiot, Diane De Saint-exupery", price: 850, category: "jeunesse", image: "images/books/une-surprise-pour-maman.jpg", description: "Un album pour célébrer l'amour filial.", isNew: true, isBestseller: false },
    { id: 74, title: "Petit amour", author: "Nadine Brun-Cosme, Marion Cocklico", price: 800, category: "jeunesse", image: "images/books/petit-amour.jpg", description: "Un livre tendre sur les premiers émois.", isNew: true, isBestseller: false },
    { id: 75, title: "Dans le magasin des mamans j'aurais choisi toi", author: "Mathou", price: 1100, category: "jeunesse", image: "images/books/dans-le-magasin-des-mamans.jpg", description: "Un message d'amour pour sa maman.", isNew: true, isBestseller: false },
    { id: 76, title: "Les Schtroumpfs Tome 39 : Les Schtroumpfs et la tempête blanche", author: "Peyo, Alain Jost, Thierry Culliford", price: 1000, category: "bd", image: "images/books/schtroumpfs-tome39.jpg", description: "Une aventure des Schtroumpfs dans la neige.", isNew: true, isBestseller: false },
    { id: 77, title: "Pokémon - La grande aventure Tome 1", author: "Hidenori Kusaka, Mato", price: 800, category: "manga", image: "images/books/pokemon-grande-aventure-t1.jpg", description: "Les aventures de Pokémon en version manga.", isNew: true, isBestseller: false },
    { id: 78, title: "Les aventures de Tintin, le secret de la licorne", author: "Steven Spielberg (réalisateur)", price: 400, category: "bd", image: "images/books/tintin-secret-licorne.jpg", description: "Le film d'animation adapté de la BD d'Hergé.", isNew: false, isBestseller: false }
];

// ============================================================
// ÉTAT
// ============================================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// ============================================================
// CARROUSELS - Utilitaires
// ============================================================
function getRandomSample(arr, n) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, n);
}

let usedCarouselIds = new Set();

function getUniqueSample(books, n, filterFn = null) {
    let pool = filterFn ? books.filter(filterFn) : books;
    pool = pool.filter(b => !usedCarouselIds.has(b.id));
    const sample = getRandomSample(pool, n);
    sample.forEach(b => usedCarouselIds.add(b.id));
    return sample;
}

// ============================================================
// AFFICHAGE DE LA GRILLE
// ============================================================
function displayBooks(books) {
    const container = document.getElementById('booksContainer');
    if (!container) return;
    container.innerHTML = books.map(book => `
        <div class="book-card" data-id="${book.id}">
            <div class="book-image">
                <img src="${book.image}" alt="${book.title}" 
                     onerror="this.onerror=null; this.src='https://placehold.co/200x280/145daa/fff?text=${encodeURIComponent(book.title)}'">
                ${book.isNew ? '<span class="book-badge">Nouveau</span>' : ''}
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <p class="book-price">${book.price} MRU</p>
                <div class="book-actions">
                    <button class="btn-add-cart" onclick="addToCart(${book.id})"><i class="fas fa-shopping-cart"></i> Ajouter</button>
                    <button class="btn-favorite ${isFavorite(book.id) ? 'active' : ''}" onclick="toggleFavorite(${book.id})"><i class="fas fa-heart"></i></button>
                </div>
                <button class="btn-summary" onclick="location.href='book.html?id=${book.id}'"><i class="fas fa-arrow-right"></i> Voir détails</button>
            </div>
        </div>
    `).join('');
}

// ============================================================
// CARROUSELS
// ============================================================
function initCarousel(trackId, books) {
    const track = document.getElementById(trackId);
    if (!track) return;
    track.innerHTML = books.map(book => `
        <div class="carousel-item">
            <a href="book.html?id=${book.id}" style="text-decoration:none; color:inherit;">
                <img src="${book.image}" alt="${book.title}" onerror="this.src='https://placehold.co/200x280/145daa/fff?text=Livre'">
                <h4>${book.title}</h4>
                <p style="font-size:0.8rem; color:#6c757d;">${book.author}</p>
                <div class="price">${book.price} MRU</div>
            </a>
        </div>
    `).join('');
}

function moveCarousel(trackId, direction) {
    const track = document.getElementById(trackId);
    if (!track) return;
    const items = track.querySelectorAll('.carousel-item');
    if (items.length === 0) return;
    const itemWidth = items[0].offsetWidth + 20;
    const maxScroll = (items.length - 1) * itemWidth;
    let currentScroll = parseFloat(track.dataset.scroll || 0);
    currentScroll += direction * itemWidth;
    if (currentScroll < 0) currentScroll = 0;
    if (currentScroll > maxScroll) currentScroll = maxScroll;
    track.style.transform = 'translateX(-' + currentScroll + 'px)';
    track.dataset.scroll = currentScroll;
}

// ============================================================
// FAVORIS
// ============================================================
function isFavorite(bookId) {
    return favorites.some(fav => fav.id === bookId);
}

function toggleFavorite(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;
    const idx = favorites.findIndex(f => f.id === bookId);
    if (idx === -1) {
        favorites.push(book);
        showMessage('Ajouté aux favoris', 'success');
    } else {
        favorites.splice(idx, 1);
        showMessage('Retiré des favoris', 'success');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteCount();
    displayBooks(booksData);
}

function updateFavoriteCount() {
    const el = document.getElementById('favoriteCount');
    if (el) el.textContent = favorites.length;
}

function showFavorites() {
    if (favorites.length === 0) { showMessage('Aucun favori', 'info'); return; }
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9999; display:flex; align-items:center; justify-content:center;';
    modal.innerHTML = `
        <div style="background:white; padding:20px; border-radius:12px; max-width:600px; width:90%; max-height:80vh; overflow-y:auto;">
            <span onclick="this.closest('.modal').remove()" style="float:right; cursor:pointer; font-size:1.5rem;">&times;</span>
            <h2>Mes Favoris</h2>
            <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(150px,1fr)); gap:15px; margin-top:15px;">
                ${favorites.map(book => `
                    <div style="background:#f8f9fa; border-radius:8px; padding:10px; text-align:center;">
                        <img src="${book.image}" alt="${book.title}" style="height:100px; object-fit:cover; border-radius:4px;" onerror="this.src='https://placehold.co/100x120/145daa/fff?text=Livre'">
                        <h4 style="font-size:0.9rem; margin:5px 0;">${book.title}</h4>
                        <p style="font-weight:bold; color:#145daa;">${book.price} MRU</p>
                        <button onclick="addToCart(${book.id}); this.closest('.modal').remove();" style="background:#145daa; color:white; border:none; padding:5px 10px; border-radius:4px; cursor:pointer;">Ajouter</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// ============================================================
// PANIER
// ============================================================
function addToCart(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;
    const existing = cart.find(i => i.id === bookId);
    if (existing) existing.quantity++;
    else cart.push({ ...book, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showMessage('Livre ajouté au panier', 'success');
}

function updateCartCount() {
    const el = document.getElementById('cartCount');
    if (el) {
        const total = cart.reduce((s, i) => s + i.quantity, 0);
        el.textContent = total;
    }
}

function showCart() {
    if (cart.length === 0) { showMessage('Panier vide', 'info'); return; }
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9999; display:flex; align-items:center; justify-content:center;';
    modal.innerHTML = `
        <div style="background:white; padding:20px; border-radius:12px; max-width:600px; width:90%; max-height:80vh; overflow-y:auto;">
            <span onclick="this.closest('.modal').remove()" style="float:right; cursor:pointer; font-size:1.5rem;">&times;</span>
            <h2>Votre Panier</h2>
            ${cart.map(item => `
                <div style="display:flex; gap:15px; padding:10px 0; border-bottom:1px solid #e9ecef;">
                    <img src="${item.image}" alt="${item.title}" style="width:60px; height:80px; object-fit:cover; border-radius:4px;" onerror="this.src='https://placehold.co/60x80/145daa/fff?text=Livre'">
                    <div style="flex:1;">
                        <h4 style="margin:0;">${item.title}</h4>
                        <p style="margin:5px 0; color:#145daa; font-weight:bold;">${item.price} MRU</p>
                        <div style="display:flex; align-items:center; gap:10px;">
                            <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" style="padding:2px 8px; border:1px solid #ccc; background:white; border-radius:4px; cursor:pointer;">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" style="padding:2px 8px; border:1px solid #ccc; background:white; border-radius:4px; cursor:pointer;">+</button>
                            <button onclick="removeFromCart(${item.id})" style="color:red; background:none; border:none; cursor:pointer;"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            `).join('')}
            <div style="text-align:right; font-size:1.2rem; font-weight:bold; margin:20px 0;">
                Total: ${cart.reduce((sum, i) => sum + (i.price * i.quantity), 0)} MRU
            </div>
            <button onclick="showCheckout()" style="width:100%; padding:12px; background:#145daa; color:white; border:none; border-radius:8px; font-weight:bold; cursor:pointer;">Commander</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function updateQuantity(bookId, newQty) {
    if (newQty < 1) { removeFromCart(bookId); return; }
    const item = cart.find(i => i.id === bookId);
    if (item) {
        item.quantity = newQty;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        document.querySelector('.modal')?.remove();
        showCart();
    }
}

function removeFromCart(bookId) {
    cart = cart.filter(i => i.id !== bookId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    document.querySelector('.modal')?.remove();
    showCart();
    showMessage('Livre retiré', 'success');
}

// ============================================================
// CHECKOUT AVEC DÉTAIL DES ARTICLES
// ============================================================
function showCheckout() {
    document.querySelector('.modal')?.remove();
    if (cart.length === 0) {
        showMessage('Panier vide', 'info');
        return;
    }
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9999; display:flex; align-items:center; justify-content:center;';
    
    // Générer le récapitulatif du panier
    const cartItemsHtml = cart.map(item => `
        <div style="display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px solid #eee; font-size:0.9rem;">
            <span>${item.title} × ${item.quantity}</span>
            <span>${item.price * item.quantity} MRU</span>
        </div>
    `).join('');
    const total = cart.reduce((s, i) => s + (i.price * i.quantity), 0);

    modal.innerHTML = `
        <div style="background:white; padding:20px; border-radius:12px; max-width:500px; width:90%; max-height:90vh; overflow-y:auto;">
            <span onclick="this.closest('.modal').remove()" style="float:right; cursor:pointer; font-size:1.5rem;">&times;</span>
            <h2>Finaliser la commande</h2>
            <div style="background:#f0f4ff; padding:15px; border-radius:8px; margin:15px 0;">
                <p><i class="fas fa-truck"></i> Livraison 48h - 150 MRU</p>
                <p><i class="fas fa-university"></i> Bankily: 32202460</p>
                <p><i class="fas fa-whatsapp"></i> Contact: 41291914</p>
            </div>
            <div style="background:#f8f9fa; padding:10px; border-radius:8px; margin:10px 0;">
                <h4 style="margin:0 0 5px 0;">Votre commande</h4>
                ${cartItemsHtml}
                <div style="display:flex; justify-content:space-between; font-weight:bold; margin-top:8px; padding-top:8px; border-top:2px solid #145daa;">
                    <span>Total</span>
                    <span>${total} MRU</span>
                </div>
            </div>
            <form onsubmit="event.preventDefault(); processOrder()">
                <div style="margin-bottom:10px;"><label>Nom complet</label><br><input type="text" id="fullName" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;" required></div>
                <div style="margin-bottom:10px;"><label>Téléphone</label><br><input type="tel" id="phone" placeholder="Ex: 41291914" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;" required></div>
                <div style="margin-bottom:10px;"><label>Adresse</label><br><textarea id="address" rows="2" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;" required></textarea></div>
                <div style="margin-bottom:10px;"><label>Paiement</label><br>
                    <select id="paymentMethod" style="width:100%; padding:8px; border:1px solid #ccc; border-radius:4px;">
                        <option value="delivery">Paiement à la livraison</option>
                        <option value="bankily">Bankily (32202460)</option>
                    </select>
                </div>
                <button type="submit" style="width:100%; padding:12px; background:#145daa; color:white; border:none; border-radius:8px; font-weight:bold; cursor:pointer;">Confirmer la commande</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function processOrder() {
    const fullName = document.getElementById('fullName')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const address = document.getElementById('address')?.value.trim();
    const paymentMethod = document.getElementById('paymentMethod')?.value;
    if (!fullName || !phone || !address || !paymentMethod) {
        showMessage('Remplissez tous les champs', 'error');
        return;
    }
    
    const total = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
    // Construire le message détaillé pour WhatsApp
    let itemsDetail = cart.map(item => 
        `- ${item.title} × ${item.quantity} = ${item.price * item.quantity} MRU`
    ).join('\n');
    const message = `Nouvelle commande MAURILIVRES :
    Client : ${fullName}
    Tél : ${phone}
    Adresse : ${address}
    Paiement : ${paymentMethod === 'delivery' ? 'À la livraison' : 'Bankily'}
    ---
    Détail de la commande :
    ${itemsDetail}
    ---
    Total : ${total} MRU
    (Livraison 48h - 150 MRU)`;

    // Sauvegarde de la commande dans localStorage
    const order = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        customer: { fullName, phone, address },
        items: cart,
        total: total,
        paymentMethod,
        status: 'confirmée'
    };
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Vider le panier
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    // Fermer la modale
    document.querySelector('.modal')?.remove();
    showMessage('Commande confirmée !', 'success');

    // Envoyer par WhatsApp
    if (confirm('Envoyer la confirmation par WhatsApp ?')) {
        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/22241291914?text=${encoded}`, '_blank');
    }
}

// ============================================================
// RÉSUMÉ – redirection vers la page de détail
// ============================================================
function showBookDescription(bookId) {
    location.href = `book.html?id=${bookId}`;
}

// ============================================================
// NAVIGATION & FILTRES
// ============================================================
function filterCategory(category) {
    if (category === 'all') displayBooks(booksData);
    else {
        const filtered = booksData.filter(b => b.category === category);
        displayBooks(filtered);
    }
    document.querySelector('.books-section')?.scrollIntoView({ behavior: 'smooth' });
}

function searchBooks() {
    const q = document.getElementById('searchInput')?.value.trim();
    if (q) {
        window.location.href = `search.html?q=${encodeURIComponent(q)}`;
    }
}

function showNewReleases() {
    displayBooks(booksData.filter(b => b.isNew));
    document.querySelector('.books-section')?.scrollIntoView({ behavior: 'smooth' });
}

function showBestsellers() {
    displayBooks(booksData.filter(b => b.isBestseller));
    document.querySelector('.books-section')?.scrollIntoView({ behavior: 'smooth' });
}

function showBooks() {
    displayBooks(booksData);
    document.querySelector('.books-section')?.scrollIntoView({ behavior: 'smooth' });
}

function showAuthor() {
    document.getElementById('authorSection')?.scrollIntoView({ behavior: 'smooth' });
}

function toggleLogin() {
    showMessage('Connexion - Fonction à venir', 'info');
}

function showEvents() {
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9999; display:flex; align-items:center; justify-content:center;';
    modal.innerHTML = `
        <div style="background:white; padding:20px; border-radius:12px; max-width:500px; width:90%;">
            <span onclick="this.closest('.modal').remove()" style="float:right; cursor:pointer; font-size:1.5rem;">&times;</span>
            <h2>Événements</h2>
            <div style="margin:15px 0;">
                <h3>Séance de dédicaces</h3>
                <p><i class="fas fa-calendar"></i> 15 Mars 2026 - 15h00</p>
                <p><i class="fas fa-map-marker"></i> Espace MAURILIVRES, Nouakchott</p>
            </div>
            <div>
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
    modal.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9999; display:flex; align-items:center; justify-content:center;';
    modal.innerHTML = `
        <div style="background:white; padding:20px; border-radius:12px; max-width:500px; width:90%;">
            <span onclick="this.closest('.modal').remove()" style="float:right; cursor:pointer; font-size:1.5rem;">&times;</span>
            <h2>Contact</h2>
            <div style="margin:15px 0;">
                <p><i class="fas fa-phone"></i> <strong>41291914</strong> (WhatsApp)</p>
                <p><i class="fas fa-university"></i> Bankily: 32202460</p>
                <p><i class="fas fa-truck"></i> Livraison 48h - 150 MRU</p>
                <p><i class="fab fa-facebook"></i> Salihina Moussa / MAURILIVRES</p>
                <p><i class="fab fa-instagram"></i> @maurilivres</p>
            </div>
            <button onclick="window.open('https://wa.me/22241291914', '_blank')" style="width:100%; padding:12px; background:#145daa; color:white; border:none; border-radius:8px; font-weight:bold; cursor:pointer;">
                <i class="fab fa-whatsapp"></i> WhatsApp
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

// ============================================================
// MESSAGES
// ============================================================
function showMessage(text, type) {
    const colors = { success: '#d4edda', error: '#f8d7da', info: '#d1ecf1' };
    const textColors = { success: '#155724', error: '#721c24', info: '#0c5460' };
    const div = document.createElement('div');
    div.style.cssText = `position:fixed; top:20px; right:20px; z-index:9999; padding:15px 25px; border-radius:8px; background:${colors[type] || '#fff'}; color:${textColors[type] || '#333'}; box-shadow:0 2px 10px rgba(0,0,0,0.1); animation: slideIn 0.3s;`;
    div.textContent = text;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 3000);
}

// ============================================================
// INITIALISATION DE LA PAGE D'ACCUEIL
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    displayBooks(booksData);
    updateCartCount();
    updateFavoriteCount();

    usedCarouselIds = new Set();

    const car1 = getUniqueSample(booksData, 8, b => b.isBestseller === true);
    initCarousel('carouselTrack1', car1);

    const car2 = getUniqueSample(booksData, 8, b => b.category === 'roman' && !b.isBestseller);
    initCarousel('carouselTrack2', car2);

    const car3 = getUniqueSample(booksData, 8, b => b.isNew === true && b.category !== 'roman');
    initCarousel('carouselTrack3', car3);

    const car4 = getUniqueSample(booksData, 8, b => b.price < 500);
    initCarousel('carouselTrack4', car4);

    const car5 = getUniqueSample(booksData, 8, b => b.price < 400);
    initCarousel('carouselTrack5', car5);
});

// ============================================================
// EXPOSER LES FONCTIONS
// ============================================================
window.addToCart = addToCart;
window.toggleFavorite = toggleFavorite;
window.showCart = showCart;
window.showFavorites = showFavorites;
window.showBooks = showBooks;
window.filterCategory = filterCategory;
window.searchBooks = searchBooks;
window.showNewReleases = showNewReleases;
window.showBestsellers = showBestsellers;
window.toggleLogin = toggleLogin;
window.showEvents = showEvents;
window.showContact = showContact;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.showCheckout = showCheckout;
window.processOrder = processOrder;
window.showMessage = showMessage;
window.showBookDescription = showBookDescription;
window.moveCarousel = moveCarousel;
window.scrollToAuthor = showAuthor;
