import { Icons } from "@/components/icons";

interface SocialInterface {
    name: string;
    username: string;
    icon: any;
    link: string;
}

export const SocialLinks: SocialInterface[] = [
    {
        name: "Github",
        username: "@mzokirova",
        icon: Icons.gitHub,
        link: "https://github.com/mzokirova",
    },
    {
        name: "LinkedIn",
        username: "Mashkhura Zokirova",
        icon: Icons.linkedin,
        link: "https://www.linkedin.com/in/mashhura-zokirova/",
    },
    {
        name: "Gmail",
        username: "mashhura2020",
        icon: Icons.gmail,
        link: "mailto:mashhura2020@gmail.com",
    },
];
