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

function PackagesPage() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
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

                    <div className="container__card">
                        <Card>
                            <CardHeader
                                avatar={<DescriptionIcon />}
                                title="Which license do i need?"
                                action={
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                }
                            ></CardHeader>
                            <Collapse
                                className="card__extended-content"
                                in={expanded}
                                timeout="auto"
                                unmountOnExit
                            >
                                <CardContent>
                                    <Typography paragraph>
                                        Uniquely leverage other's distinctive
                                        infomediaries rather than leveraged
                                        supply chains. Continually seize
                                        distributed collaboration and
                                        idea-sharing whereas user.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PackagesPage;
