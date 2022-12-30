import Images from "../assets/Images";
import PolylineIcon from "@mui/icons-material/Polyline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const aboutItems = [
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

const promoItems = [
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

const headerItems = [
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
        to: "contact",
    },
];

export { aboutItems, promoItems, headerItems };
