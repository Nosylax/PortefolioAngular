import { CardData } from "../models/card";


export const getProjects = (): CardData[] => [
    {
        title: 'Bookie',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/booki.png",
        displayButton: true
    },
    {
        title: 'Kasa',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/kasa.png",
        displayButton: true
    },
    {
        title: 'Sophie Bluel',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl: "/SophieBluel.png",
        displayButton: true
    }
]