import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
    title: string;
    imgArr: string[];
    description?: string;
}

interface DescriptionDetailsInterface {
    paragraphs: string[];
    bullets: string[];
}

export interface ExperienceInterface {
    id: string;
    type: ValidExpType;
    companyName: string;
    category: ValidCategory[];
    shortDescription: string;
    websiteLink?: string;
    githubLink?: string;
    techStack: ValidSkills[];
    startDate: Date;
    endDate: Date;
    companyLogoImg?: any;
    descriptionDetails: DescriptionDetailsInterface;
    pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [

    {
        id: "todo",
        companyName: "To Do List",
        type: "Personal Project",
        category: ["Frontend",  "UI/UX"],
        shortDescription:
            "Helps to organize daily task ",
        githubLink: "https://github.com/mzokirova/tod0",
        techStack: [
            "Javascript",
            "SCSS"
        ],
        startDate: new Date("2023-09-14"),
        endDate: new Date("2023-09-08"),
        companyLogoImg: "/experience/todo/default.png",
        pagesInfoArr: [
            {
                title: "Main Screen",
                description: "Vibrant design",
                imgArr: ["/experience/todo/default.png"],
            },
            {
                title: "How todos look",
                description: "",
                imgArr: ["/experience/todo/list.png"],
            },
            {
                title: "Editable and delete function existance",
                description: "User can edit and delete ",
                imgArr: ["/experience/todo/editable.png"],
            },

        ],
        descriptionDetails: {
            paragraphs: [
                `I always use todo lists in my daily life, this project handle this paper work in with single click`,
            ],
            bullets: [
                "Learned how to work events in JS",
                "Learned how to use DOM",
                "Enhanced my skill set in working with localstorage and REST API",
            ],
        },
    },
    {
        id: "countrySearch",
        companyName: "Country Searcher",
        type: "Personal Project",
        category: ["Web Dev", "Frontend",],
        shortDescription:
            "In this project, the user enters the country name and search. App display an output that consists of the country name, country flag and other statistics about the country. REST Api is used",
        websiteLink: "https://my-country-search-app.netlify.app/",
        githubLink: "https://github.com/mzokirova/country-guide-app",
        techStack: [
            "Javascript",
            "HTML 5",
            "SCSS",
        ],
        startDate: new Date("2023-03-01"),
        endDate: new Date("2023-07-01"),
        companyLogoImg: "/experience/country-search/default.png",
        pagesInfoArr: [
            {
                title: "Initial state",
                description: "View of search field before input",
                imgArr: [
                    "/experience/country-search/default.png",
                ],
            },
            {
                title: "Result view",
                description: "",
                imgArr: ["/experience/country-search/found.png"],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "In this small project help pupils to get quickly info about countries over the world, app gives basic information about country, helps teachers who gives lecture geography at schools,makes lessons more interactive",
            ],
            bullets: [
                "Enhanced using REST API",
                "For styling used SCSS"
            ],
        },
    },
    {
        id: "notary",
        companyName: "Notary Book App",
        type: "Personal Project",
        category: ["Web Dev", "Frontend", "UI/UX"],
        shortDescription:
            "Created a project using JS , focusing on searching keywords in text",
        websiteLink: "https://notary-book-app.netlify.app/#",
        githubLink: "https://github.com/mzokirova/notary-book-app",
        techStack: ["Javascript","CSS 3"],
        startDate: new Date("2024-01-01"),
        endDate: new Date("2024-01-01"), // You can fill this in later
        companyLogoImg: "/experience/notary/logo.png",
        pagesInfoArr: [
            {
                title: "Initial View",
                description: "",
                imgArr: [
                    "/experience/notary/initial.png",
                ],
            },
            {
                title: "Book View",
                description: "",
                imgArr: [
                    "/experience/notary/book.png",
                ],
            },
            {
                title: "Most Used Words",
                description: "Shows most used words and counts in the selected book",
                imgArr: [
                    "/experience/notary/mostused.png",
                ],
            },
            {
                title: "Least Used Words",
                description: "Shows least used words and counts in the selected book",
                imgArr: [
                    "/experience/notary/leastused.png",
                ],
            },
            {
                title: "Statistics",
                description: "Shows document length and words counts",
                imgArr: [
                    "/experience/notary/stats.png",
                ],
            },
            {
                title: "Results",
                description: "Shows searched word in book highlighted",
                imgArr: [
                    "/experience/notary/foundWord.png",
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "Notary is app that helps user to search keywords in text using JS,to count the most used words and the most least words,it can help to imrove reading experience",
            ],
            bullets: [
                "Implemented Javascript Array methods to find most used and least used words",
                "Designed UI components to provide an intuitive and visually pleasing experience.",
                "Focused on implementing a smooth loading",
                "Enhanced my skills in UI design",
            ],
        },
    },
    {
        id: "bankist",
        companyName: "Bankist Website",
        type: "Personal Project",
        category: ["Frontend", "UI/UX"],
        shortDescription:
            "Developed a user-friendly website for Bankist financial service website",
        websiteLink: "https://roaring-klepon-bankist.netlify.app", // You can fill this in later
        githubLink: "https://github.com/mzokirova/bankist", // You can fill this in later
        techStack: ["HTML 5", "CSS 3", "Javascript","Swiper.js"],
        startDate: new Date("2023-05-01"),
        endDate: new Date("2023-05-01"), // You can fill this in later
        companyLogoImg: "/experience/bankist/logo.png",
        pagesInfoArr: [
            {
                title: "Home Page",
                description:
                    "Minimal and user-friendly showcase",
                imgArr: ["/experience/bankist/home.png"],
            },
            {
                title: "Animation ",
                description:
                    "Animation with pleasant UI components",
                imgArr: [
                    "/experience/bankist/animation.png",
                ],
            },
            {
                title: "Carousel ",
                description:
                    "Swiper.js library used for carousel and pagination",
                imgArr: [
                    "/experience/bankist/carousel.png",
                ],
            },
            {
                title: "Modal ",
                description:
                    "Learned modal logic and form to send inputs",
                imgArr: [
                    "/experience/bankist/modal.png",
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "Financial services  website with user friendly design ",
            ],
            bullets: [
                "Developed a user-friendly website for Bankist ",
                "Utilized HTML and CSS to design a user-friendly UI.",
                "Implemented Swiper.js library for the first time",
            ],
        },
    },
];

export const featuredExperiences = Experiences.slice(0, 3);
