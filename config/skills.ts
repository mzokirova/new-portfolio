import { Icons } from "@/components/icons";

export interface skillsInterface {
    name: string;
    description: string;
    rating: number;
    icon?: any;
}
export const skillsUnsorted: skillsInterface[] = [
    {
        name: "Next.js",
        description:
            "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
        rating: 4,
        icon: Icons.nextjs,
    },
    {
        name: "React",
        description:
            "Craft interactive user interfaces using components, state, props, and virtual DOM.",
        rating: 5,
        icon: Icons.react,
    },
    {
        name: "Typescript",
        description:
            "Enhance JavaScript with static types, making code more understandable and reliable.",
        rating: 5,
        icon: Icons.typescript,
    },
    {
        name: "Javascript",
        description:
            "Create interactive and dynamic web experiences with the versatile scripting language.",
        rating: 5,
        icon: Icons.javascript,
    },
    {
        name: "HTML 5",
        description:
            "Structure web content beautifully with the latest version of HyperText Markup Language.",
        rating: 5,
        icon: Icons.html5,
    },
    {
        name: "CSS 3",
        description:
            "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
        rating: 5,
        icon: Icons.css3,
    },
    {
        name: "React Native",
        description:
            "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
        rating: 3,
        icon: Icons.react,
    },

    {
        name: "Redux",
        description:
            "Manage app state effectively using a predictable and centralized state container.",
        rating: 4,
        icon: Icons.redux,
    },
    // {
    //     name: "Shadcn",
    //     description:
    //         "Manage app state effectively using a predictable and centralized state container.",
    //     rating: 5,
    // },
    {
        name: "Material UI",
        description:
            "Create stunning and responsive UIs with a popular React UI framework.",
        rating: 4,
        icon: Icons.mui,
    },

    {
        name: "Tailwind CSS",
        description:
            "Design beautiful, modern websites faster with a utility-first CSS framework.",
        rating: 5,
        icon: Icons.tailwindcss,
    },
    {
        name: "React",
        description:
            "Design beautiful, modern websites faster with a utility-first CSS framework.",
        rating: 5,
        icon: Icons.tailwindcss,
    },
    {
        name: "Bootstrap",
        description:
            "Quickly create responsive and appealing web designs using a popular CSS framework.",
        rating: 2,
        icon: Icons.bootstrap,
    },
    {
        name: "MySQL",
        description:
            "Manage and organize relational databases efficiently for data-driven applications.",
        rating: 1,
        icon: Icons.mysql,
    },
    {
        name: "React Hook Form",
        description:
            "Focus on user and developer experience. through the proxy .Avoiding unnecessary computation.",
        rating: 4,
        icon: Icons.reacthookform,
    },
    {
        name: "React Query",
        description:
            "It gives you declarative, always-up-to-date auto-managed queries and mutations that directly improve both your developer and user experiences.",
        rating: 4,
        icon: Icons.reactquery,
    },
    {
        name: "Netlify",
        description:
            "Manage and organize relational databases efficiently for data-driven applications.",
        rating: 5,
        icon: Icons.netlify,
    },
];

export const skills = skillsUnsorted
    .slice()
    .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
