import { CardData } from "../models/card";


export const getProjects = (): CardData[] => [
    {
        title: 'Bookie : Page d\'accueil d\'une agence de voyage  (Projet OpenClassrooms)',
        description: 'J\'ai créé la page d\'accueil d\'une agence de voyage en utilisant HTML et CSS, en intégrant une interface responsive basée sur des maquettes Figma pour mobile, tablette et desktop. J\'ai développé des composants d\'interface pour garantir une correspondance exacte avec le design et veiller à ce que le site fonctionne parfaitement sur toutes les tailles d\'écran. Ce projet m\'a permis de renforcer mes compétences en design responsive et en structuration de code pour le web.',
        imageUrl: "/booki.png",
        GHlink: 'https://github.com/Nosylax/BOOKI',
        GHPlink: 'https://nosylax.github.io/BOOKI/'

    },
    {
        title: 'Kasa : Application de location de logement avec React  (Projet OpenClassrooms)',
        description: 'J\'ai développé le front-end d\'une application de location de logement en utilisant React et React Router. J\'ai créé des composants pour afficher les informations des logements et configuré la navigation entre les pages de manière fluide. Le projet m\'a permis de renforcer mes compétences en gestion de l\'état avec les hooks et en développement d\'interfaces utilisateur modernes et réactives.',
        imageUrl: "/kasa.png",
        GHlink: 'https://github.com/Nosylax/kasa-app',



    },
    {
        title: 'Sophie Bluel : Site web dynamique  (Projet OpenClassrooms)',
        description: 'Dans ce projet, j\ai créé une page web dynamique pour le site d\'une architecte d\intérieur en utilisant JavaScript et en intégrant une API. J\ai développé la page de présentation des travaux de l\architecte, une page de connexion pour l\administrateur, et une modale pour uploader de nouveaux médias. Ce projet m\a permis de perfectionner mes compétences en manipulation du DOM, gestion des événements utilisateurs, et communication avec une API, tout en utilisant des outils comme Figma, Visual Studio Code, et GitHub.',
        imageUrl: "/SophieBluel.png",
        GHlink: 'https://github.com/Nosylax/Portfolio-architecte-sophie-bluel',

    }
]