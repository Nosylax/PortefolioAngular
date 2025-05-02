import { CardData } from "../models/card";


export const getSkills = (language = 'fr'): CardData[] => {
    if (language === "fr") {
        return skilltFr
    } else {
        return skillEn
    }
}
const skilltFr = [
    {
        title: 'React',
        description: 'Création d’applications React, création de composants et manipulation de leur état.',
        imageUrl: "/react.png",
        progress: 70

    },
    {
        title: 'HTML / CSS',
        description: 'Intégration d’interfaces responsives et accessibles, utilisation de maquettes Figma, développement d’animations CSS.',
        imageUrl: "/html-css.png",
        progress: 90

    },
    {
        title: 'JS',
        description: 'Manipulation du DOM, création d’éléments dynamiques, gestion de données de formulaires.',
        imageUrl: "/js.png",
        progress: 70
    },
    {
        title: 'Gestion de projet',
        description: 'Analyse des besoins d’un client, définition d’une solution technique répondant aux besoins fonctionnelle, planification du projet.',
        imageUrl: "/gestion-de-projet.png",
        progress: 60
    },
    {
        title: 'Optimisation et debug',
        description: 'Identification des anomalies et correction d’un site existant, optimisation SEO et performance et publication d’un site en ligne.',
        imageUrl: "/optimisation-et-debug.png",
        progress: 70
    },
    {
        title: 'Test',
        description: 'Tests exploratoires, unitaires et d’intégration, définition d’une stratégie de test et d’un rédaction d’un cahier de recette, automatisation de tests E2E et d’API.',
        imageUrl: "/test.png",
        progress: 80
    }
]

const skillEn = [
    {
        title: 'React',
        description: 'Building React applications, creating components and managing their state.',
        imageUrl: "/react.png",
        progress: 70
    },
    {
        title: 'HTML / CSS',
        description: 'Developing responsive and accessible interfaces, using Figma mockups, creating CSS animations.',
        imageUrl: "/html-css.png",
        progress: 90
    },
    {
        title: 'JS',
        description: 'Manipulating the DOM, creating dynamic elements, handling form data.',
        imageUrl: "/js.png",
        progress: 70
    },
    {
        title: 'Project Management',
        description: 'Analyzing client needs, defining a technical solution that meets functional requirements, planning the project.',
        imageUrl: "/gestion-de-projet.png",
        progress: 60
    },
    {
        title: 'Optimization and Debugging',
        description: 'Identifying and fixing bugs on existing sites, optimizing SEO and performance, deploying websites online.',
        imageUrl: "/optimisation-et-debug.png",
        progress: 70
    },
    {
        title: 'Testing',
        description: 'Exploratory, unit and integration testing, defining a testing strategy and writing a test plan, automating E2E and API tests.',
        imageUrl: "/test.png",
        progress: 80
    }
]
