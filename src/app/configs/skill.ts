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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/react.png",
        progress: 70

    },
    {
        title: 'HTML / CSS',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/html-css.png",
        progress: 90

    },
    {
        title: 'JS',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/js.png",
        progress: 70
    },
    {
        title: 'Gestion de projet',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/gestion-de-projet.png",
        progress: 60
    },
    {
        title: 'Optimisation et debug',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/optimisation-et-debug.png",
        progress: 70
    },
    {
        title: 'Test',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/test.png",
        progress: 80
    }
]

const skillEn = [
    {
        title: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/react.png",
        progress: 70
    },
    {
        title: 'HTML / CSS',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/html-css.png",
        progress: 90
    },
    {
        title: 'JavaScript',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/js.png",
        progress: 70
    },
    {
        title: 'Project Management',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/gestion-de-projet.png",
        progress: 60
    },
    {
        title: 'Optimization & Debugging',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/optimisation-et-debug.png",
        progress: 70
    },
    {
        title: 'Testing',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/test.png",
        progress: 80
    }
]
