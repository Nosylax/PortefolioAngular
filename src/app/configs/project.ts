import { CardData } from "../models/card";


export const getProjects = (): CardData[] => [
    {
        title: 'Bookie',
        description: 'Créez la page d\'accueil d\'une agence de voyage avec HTML & CSS',
        imageUrl: "/booki.png",
        link: 'https://nosylax.github.io/BOOKI/'
    },
    {
        title: 'Kasa',
        description: 'Créez une application web de location immobilière avec React',
        imageUrl: "/kasa.png",
        link: 'https://nosylax.github.io/kasa/'
    },
    {
        title: 'Sophie Bluel',
        description: 'Créez une page web dynamique avec JavaScript',
        imageUrl: "/SophieBluel.png",
        link: 'https://nosylax.github.io/sophie-bluel/'
    }
]