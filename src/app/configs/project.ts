import { Project } from "../models/projects";

export const getProjects = (): Project[] => [
    {
        title: 'Bookie',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/booki.png",
    },
    {
        title: 'Kasa',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/kasa.png",
    },
    {
        title: 'Sophie Bluel',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/SophieBluel.png",
    }
]