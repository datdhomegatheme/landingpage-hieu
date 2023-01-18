import { packageItems } from "../../DataItems";
import Images from "../../assets/Images";
import {
    Card,
    CardContent,
    CardHeader,
    Collapse,
    IconButton,
    styled,
    Typography,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { ExpandMore } from "@mui/icons-material";
import PackagePageCard from "../../component/PackagePageCard";
import FilterIcon from "@mui/icons-material/Filter";
import LockIcon from "@mui/icons-material/Lock";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import WalletIcon from "@mui/icons-material/Wallet";

function PackagesPage() {
    return (
        <>
            <div className="package">
                <div className="package__container d-flex">
                    <div className="package__title d-flex">
                        <h1>
                            Affordable Pricing and Packages Choose your Best One
                        </h1>
                        <h2 className="text-gray">
                            Distinctively brand cutting-edge imperatives through
                            synergistic infrastructures customize low-risk
                            high-yield processes rather than user friendly.
                        </h2>
                    </div>
                    <div className="package__content d-flex">
                        {packageItems.map((item, index) => (
                            <>
                                <div key={index} className="content__bg">
                                    <h2>{item.type}</h2>
                                    <div className="bg-icon d-flex">
                                        <img src={item.icon} alt={item.type} />
                                    </div>
                                    <p>
                                        {item.user}{" "}
                                        <span>Users access same time</span>
                                    </p>
                                    <p>Integrated eCommerce</p>
                                    <p>{item.interface}</p>
                                    <p>
                                        {item.update}
                                        <span>updated</span>
                                    </p>
                                    <p>24/7 Phone Support</p>
                                    <p>Event Analytics</p>
                                    <p className="bg__price">{item.price}</p>
                                    <button className="btn">
                                        Purchase now
                                    </button>
                                </div>
                            </>
                        ))}
                    </div>
                    <p className="text-gray">
                        If you need custom services or Need more?{" "}
                        <span>
                            <a href="/#">Contact us</a>
                        </span>
                    </p>

                    <div className="container__package-card">
                        <PackagePageCard
                            icon={<DescriptionIcon className="card__icon" />}
                            title={"Which license do i need?"}
                            content={`Uniquely leverage other's distinctive
                        infomediaries rather than leveraged
                        supply chains. Continually seize
                        distributed collaboration and
                        idea-sharing whereas user.`}
                        />
                        <PackagePageCard
                            icon={<DescriptionIcon className="card__icon" />}
                            title={" Which license do I need?"}
                            content={`Distinctively recaptiualize customer directed channels before installed base communities. Continually disintermediate distinctive web services vis-a-vis team building e-commerce.`}
                        />
                        <PackagePageCard
                            icon={<FilterIcon className="card__icon" />}
                            title={"How do I get access to a theme?"}
                            content={`Rapidiously incentivize virtual e-commerce and exceptional e-tailers. Progressively network focused catalysts for change without orthogonal benefits. Dramatically empower.`}
                        />
                        <PackagePageCard
                            icon={<LockIcon className="card__icon" />}
                            title={"How do I get access to a theme?"}
                            content={`Quickly recaptiualize revolutionary meta-services and multimedia based channels. Seamlessly impact diverse deliverables rather than cooperative strategic theme areas.`}
                        />
                        <PackagePageCard
                            icon={
                                <AccountBalanceWalletIcon className="card__icon" />
                            }
                            title={"How do I see previous orders?"}
                            content={`Proactively monetize long-term high-impact innovation and scalable relationships. Dynamically mesh principle-centered functionalities before next-generation best practices. Distinctively empower.`}
                        />
                        <PackagePageCard
                            icon={<WalletIcon className="card__icon" />}
                            title={"How do I see previous orders?"}
                            content={`Efficiently supply B2B networks vis-a-vis best-of-breed schemas. Dramatically parallel task reliable technology with cross functional core competencies. Phosfluorescently.`}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PackagesPage;
