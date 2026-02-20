// js/main.js - À remplacer dans votre fichier

// Données des livres (mise à jour avec les livres du client)
const booksData = [
    {
        id: 1,
        title: "L'Enfant noir",
        author: "Camara Laye",
        price: 15.99, // Prix à confirmer
        category: "roman",
        image: "images/books/camara-laye.jpg", // Nom du fichier image (renommez-le pour éviter les espaces)
        description: "Dans ce roman autobiographique, Camara Laye nous plonge dans son enfance en Haute-Guinée. Il décrit avec tendresse la vie de son village, les traditions, le travail de son père forgeron, et son initiation au monde des adultes, jusqu'à son départ pour la France.",
        isNew: true,
        isBestseller: true
    },
    {
        id: 2,
        title: "Marche ou crève",
        author: "Stephen King (sous le nom de Richard Bachman)",
        price: 12.50,
        category: "roman",
        image: "images/books/ray.jpg",
        description: "Dans un futur proche et totalitaire, cent adolescents participent à la 'Longue Marche'. Ils doivent marcher sans s'arrêter, jour et nuit, jusqu'à ce qu'il n'en reste qu'un. Le livre suit Ray Garraty dans cette épreuve de survi, où l'épuisement et la folie guettent chaque concurrent.",
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
        description: "Ce roman retrace la vie de Charlotte Salomon, une jeune peintre juive allemande morte à Auschwitz. C'est un récit poignant et poétique qui explore le destin tragique de l'artiste, sa passion pour la peinture et la création de son œuvre majeure 'Vie ? ou Théâtre ?'.",
        isNew: false,
        isBestseller: true
    },
    {
        id: 4,
        title: "La Femme de ménage",
        author: "Freida McFadden",
        price: 14.99,
        category: "roman",
        image: "images/books/la-femme-de-menage.jpg",
        description: "Millie, une femme au passé trouble, accepte un emploi de femme de ménage chez les Winchester, un couple riche. Très vite, elle se rend compte que la maison renferme des secrets inavouables et qu'elle est prise au piège d'un jeu psychologique dangereux.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 5,
        title: "L'Arbre à la cour criminelle",
        author: "Patrick Masure", // Auteur à confirmer selon le livre exact
        price: 20.00,
        category: "roman",
        image: "images/books/larbre-a-la-cours-criminelle.jpg",
        description: "Dans le milieu feutré des amateurs d'arbres rares en Sologne, des événements troublants viennent perturber un voyage d'étude. Un ancien juge d'instruction mène l'enquête, nous entraînant des plus beaux parcs du Loiret jusqu'à la Chine du XIXe siècle.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 6,
        title: "Je voudrais vous parler...",
        author: "Isabelle Deljehier",
        price: 7.63,
        category: "poesie",
        image: "images/books/je-voudrais-vous-parler.jpg",
        description: "Un recueil original de 28 'nouvelles-poésies'. Chaque texte vous invite à incarner un personnage différent, traversant des époques historiques marquantes. Destins atypiques, histoires d'amour et rêves d'enfants se mêlent dans cet univers singulier.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 7,
        title: "Mille vies en une",
        author: "Mario Luraschi",
        price: 25.00,
        category: "essai",
        image: "images/books/mille-en-un-je.jpg",
        description: "L'autobiographie du légendaire cascadeur équestre du cinéma français. Il raconte ses cinq cents films, ses collaborations avec les plus grands acteurs, ses spectacles grandioses et une vie d'aventures au plus près des chevaux.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 8,
        title: "Et le ciel a oublié de pleuvoir",
        author: "Auteur à renseigner",
        price: 15.99, // Prix à définir
        category: "roman",
        image: "images/books/et-le-ciel-a-oublie-de-pleuvoir.jpg",
        description: "Description à ajouter dès que possible.",
        isNew: true,
        isBestseller: false
    },
    {
        id: 9,
        title: "Poésie de la nature à l'âge abbasside",
        author: "Farhat Messaadi",
        price: 29.99, // Prix estimé pour un ouvrage académique
        category: "essai",
        image: "images/books/poesie-de-la-nature-a-lage-abbasside.jpg",
        description: "Cet ouvrage, issu d'une thèse de doctorat, explore en profondeur la place de la nature dans la poésie arabe de l'âge d'or abbasside (VIIIe-XIIIe siècles). Il analyse l'évolution esthétique, l'imaginaire et l'importance de cette poésie descriptive.",
        isNew: false,
        isBestseller: false
    }
];
