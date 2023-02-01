import Images from "../../assets/Images";
import PolylineIcon from "@mui/icons-material/Polyline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import IconBasicPackage from "../../assets/Images/packagesPage/basic-icon.svg";
import IconStandardPackage from "../../assets/Images/packagesPage/standard-icon.svg";
import IconUnlimitedPackage from "../../assets/Images/packagesPage/unlimited-icon.svg";
import FilterIcon from "@mui/icons-material/Filter";
import LockIcon from "@mui/icons-material/Lock";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import WalletIcon from "@mui/icons-material/Wallet";
import DescriptionIcon from "@mui/icons-material/Description";

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
        id: "1213213",
        icon: <PolylineIcon className="promo-icon" />,
        title: "Clean Design",
        content: "Increase sales by showing true dynamics of your website.",
    },
    {
        id: "2qwe",
        icon: <LockOutlinedIcon className="promo-icon" />,
        title: "Secure Data",
        content:
            "Build your online store’s trust using Social Proof & Urgency.",
    },
    {
        id: "qfdwq3",
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

export const dataPackages = [
    {
        id: 1,
        icon: <DescriptionIcon className="card__icon" />,
        title: "Which license do i need?",
        content: `Uniquely leverage other's distinctive
        infomediaries rather than leveraged
        supply chains. Continually seize
        distributed collaboration and
        idea-sharing whereas user.`,
    },
    {
        id: 2,
        icon: <DescriptionIcon className="card__icon" />,
        title: "Which license do i need?",
        content: `Distinctively recaptiualize customer directed channels before installed base communities. Continually disintermediate distinctive web services vis-a-vis team building e-commerce.`,
    },
    {
        id: 3,
        icon: <FilterIcon className="card__icon" />,
        title: "How do I get access to a theme?",
        content: `Rapidiously incentivize virtual e-commerce and exceptional e-tailers. Progressively network focused catalysts for change without orthogonal benefits. Dramatically empower.`,
    },
    {
        id: 4,
        icon: <LockIcon className="card__icon" />,
        title: "How do I get access to a theme?",
        content: `Quickly recaptiualize revolutionary meta-services and multimedia based channels. Seamlessly impact diverse deliverables rather than cooperative strategic theme areas.`,
    },
    {
        id: 5,
        icon: <AccountBalanceWalletIcon className="card__icon" />,
        title: "How do I see previous orders?",
        content: `Proactively monetize long-term high-impact innovation and scalable relationships. Dynamically mesh principle-centered functionalities before next-generation best practices. Distinctively empower.`,
    },
    {
        id: 6,
        icon: <WalletIcon className="card__icon" />,
        title: "How do I see previous orders?",
        content: `Efficiently supply B2B networks vis-a-vis best-of-breed schemas. Dramatically parallel task reliable technology with cross functional core competencies. Phosphorescently.`,
    },
];

export const dataNewPage = [
    {
        type: "lifestyle",
        image: Images.newPage1,
        date: "Jan 21, 2019",
        comments: 45,
        share: 10,
        title: "Appropriately productize fully",
        content:
            "ome quick example text to build on the card title and make up the bulk.",
    },
    {
        type: "Technology",
        image: Images.newPage2,
        date: "May 26, 2019",
        comments: 30,
        share: 5,
        title: "Quickly formulate backend",
        content:
            "Synergistically engage effective ROI after customer directed partnerships.",
    },
    {
        type: "Science",
        image: Images.newPage3,
        date: "Apr 25, 2019",
        comments: 41,
        share: 30,
        title: "Objectively extend extensive",
        content:
            "Holisticly mesh open-source leadership rather than proactive users.",
    },
];

export const dataIconClient = [
    { src: Images.airBnb, alt: "airbnb logo" },
    { src: Images.spotify, alt: "spotify logo" },
    { src: Images.payPal, alt: "paypal" },
];

export const dataTrustCompany = [
    { img: Images.payPal, alt: "payPal" },
    {
        img: Images.spotify,
        alt: "spotify",
    },
    { img: Images.airBnb, alt: "airBnb" },
    {
        img: Images.amazon,
        alt: "amazon",
    },
    { img: Images.shopBot, alt: "shopBot" },
    {
        img: Images.slack,
        alt: "slack",
    },
    { img: Images.payPal, alt: "payPal" },
    {
        img: Images.spotify,
        alt: "spotify",
    },
    { img: Images.airBnb, alt: "airBnb" },
    {
        img: Images.amazon,
        alt: "amazon",
    },
    { img: Images.shopBot, alt: "shopBot" },
    {
        img: Images.slack,
        alt: "slack",
    },
];
