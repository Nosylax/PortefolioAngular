import { Competence } from "../models/competences";

export const getSkills = (): Competence[] => [
    {
        title: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/react.jpg",
    },
    {
        title: 'HTML / CSS',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/html-css.jpg",
    },
    {
        title: 'JS',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/js.jpg",
    },
    {
        title: 'Gestion de projet',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/gestion-de-projet.png",
    },
    {
        title: 'Optimisation et debug',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/optimisation-et-debug.png",
    },
    {
        title: 'Test',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/test.png",
    }
]