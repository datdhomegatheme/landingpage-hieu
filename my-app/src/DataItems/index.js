import Images from "../assets/Images";
import PolylineIcon from "@mui/icons-material/Polyline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import IconBasicPackage from "../assets/Images/packagesPage/basic-icon.svg";
import IconStandardPackage from "../assets/Images/packagesPage/standard-icon.svg";
import IconUnlimitedPackage from "../assets/Images/packagesPage/unlimited-icon.svg";

export const aboutItems = [
    {
        icon: Images.iconGoal,
        title: `Proactively syndicate open-source e-markets after low-risk high-yield synergy. Professionally simplify visionary technology.`,
    },
    {
        icon: Images.iconCloud,
        title: `Intrinsicly aggregate cutting-edge internal or "organic" sources through pandemic manufactured products. Synergistically.`,
    },
    {
        icon: Images.iconSpeaker,
        title: `Completely administrate empowered e-tailers after extensive experiences. Holisticly leverage existing quality networks.`,
    },
    {
        icon: Images.iconChat,
        title: `Intrinsicly incentivize functionalized metrics whereas go forward networks. Collaboratively fabricate clicks-and-mortar intellectual.`,
    },
];

export const promoItems = [
    {
        icon: <PolylineIcon className="promo-icon" />,
        title: "Clean Design",
        content: "Increase sales by showing true dynamics of your website.",
    },
    {
        icon: <LockOutlinedIcon className="promo-icon" />,
        title: "Secure Data",
        content:
            "Build your online store’s trust using Social Proof & Urgency.",
    },
    {
        icon: <VisibilityOutlinedIcon className="promo-icon" />,
        title: "Retina Ready",
        content:
            "Realize importance of social proof in customer’s purchase decision.",
    },
];

export const headerItems = [
    {
        title: "Home",
        to: "/home",
        submenus: [
            {
                title: "Demo Template 1",
                to: "/demo1",
            },
            {
                title: "Demo Template 2",
                to: "/demo2",
                new: true,
            },
        ],
    },
    {
        title: "About",
        to: "/About",
    },
    {
        title: "Features",
        to: "/features",
    },
    {
        title: "Pricing",
        to: "/pricing",
    },
    {
        title: "Screenshots",
        to: "/screenshots",
    },
    {
        title: "Pages",
        to: "/pages",
        submenus: [
            {
                title: "Login",
                to: "/login",
            },
            {
                title: "Logout",
                to: "/logout",
            },
        ],
    },
    {
        title: "Blog",
        to: "/blog",
        new: true,
        submenus: [
            {
                title: "Grip",
                to: "/grip",
            },
            {
                title: "Sidebar",
                to: "/sidebar",
            },
        ],
    },
    {
        title: "Team",
        to: "/team",
    },
    {
        title: "Contact",
        to: "/contact",
    },
];

export const packageItems = [
    {
        type: "Basic",
        icon: IconBasicPackage,
        user: 5,
        interface: "Customization interface",
        update: "Weekly",
        price: "$29",
    },
    {
        type: "Standard",
        icon: IconStandardPackage,
        user: 10,
        interface: "Customization interface",
        update: "Daily",
        price: "$145",
    },
    {
        type: "Unlimited",
        icon: IconUnlimitedPackage,
        user: 20,
        interface: "Fully Customization interface",
        update: "Free",
        price: "$249",
    },
];

export const dataClients = [
    {
        avatar: Images.client1,
        name: "John Charles",
        company: "Google",
        feedback: ` Interactively optimize fully researched expertise vis-a-vis plug-and-play relationships. Intrinsicly develop viral core competencies for fully tested customer service. Enthusiastically create next-generation growth strategies and.`,
    },
    {
        avatar: Images.client1,
        name: "Arabella Ora",
        company: "Amazon",
        feedback: `Rapidiously develop user friendly growth strategies after extensive initiatives. Conveniently grow innovative benefits through fully tested deliverables. Rapidiously utilize focused platforms through end-to-end schemas.`,
    },
    {
        avatar: Images.client1,
        name: "Jeremy Jere",
        company: "Themetags",
        feedback: `Objectively synthesize client-centered e-tailers for maintainable channels. Holisticly administrate customer directed vortals whereas tactical functionalities. Energistically monetize reliable imperatives through client-centric best practices. Collaboratively.`,
    },
];

export const dataScreenshots = [
    {
        id: "c1",
        img: Images.screenshot01,
    },
    {
        id: "c2",
        img: Images.screenshot02,
    },
    {
        id: "c3",
        img: Images.screenshot03,
    },
    {
        id: "c4",
        img: Images.screenshot04,
    },
    {
        id: "c5",
        img: Images.screenshot05,
    },
    {
        id: "c6",
        img: Images.screenshot06,
    },
];

export const dataMembers = [
    {
        avatar: Images.member1,
        name: "Edna Mason 1",
        job: "Developer 1",
    },
    {
        avatar: Images.member2,
        name: "Edna Mason 2",
        job: "Developer 2",
    },
    {
        avatar: Images.member3,
        name: "Edna Mason 3",
        job: "Developer 3",
    },
    {
        avatar: Images.member4,
        name: "Edna Mason 4",
        job: "Developer 4",
    },
];
