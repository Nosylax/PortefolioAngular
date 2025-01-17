import { Contact } from "../models/contacts";

export const getContact = (): Contact[] => [
    {
        title: 'Téléphone',
        description: '06.42.61.49.75',
        imageUrl: "/phone-solid.svg",
    },
    {
        title: 'Adresse email',
        description: 'alyson.laville@gmail.com',
        imageUrl: "/envelope-solid.svg",
    },
    {
        title: 'LinKedIn',
        description: 'Alyson Laville',
        imageUrl: "/linkedin-brands-solid.svg",
    }
]