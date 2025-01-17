// type Project = {
//     title:string
//     description:string
//     imageUrl:string

import { Projet } from "../models/projets";

// }
export const getProjects = ():Projet[] => [
    {
        title:'Bookie',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl : "/booki.png",
    },
    {
        title:'Kasa',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl : "/kasa.png",
    },
    {
        title:'Sophie Bluel',
        description: 'Lorem amet dolor sit amet, consectetur adipiscing elit. Quisque at auctor libero. Curabitur erat est, sodales vitae erat vel, aliquam.',
        imageUrl : "/SophieBluel.png",
    }
]