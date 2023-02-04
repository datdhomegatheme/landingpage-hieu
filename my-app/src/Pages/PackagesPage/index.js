import { dataPackages, packageItems } from "../../component/DataItems";

import React from "react";
import PackagePageCard from "../../component/PackagePageCard";
import { Grid } from "@mui/material";

function PackagesPage() {
    return (
        <>
            <div className="package d-flex">
                <div className="package__container d-flex">
                    <Grid container className="package__title d-flex">
                        <h1>
                            Affordable Pricing and Packages Choose your Best One
                        </h1>
                        <h2 className="text-gray">
                            Distinctively brand cutting-edge imperatives through
                            synergistic infrastructures customize low-risk
                            high-yield processes rather than user friendly.
                        </h2>
                    </Grid>
                    <Grid container xs={12} className="package__content d-flex">
                        {packageItems.map((item, index) => (
                            <Grid
                                className={"grid-container d-flex"}
                                item
                                xs={12}
                                lg={6}
                                xl={4}
                                key={index}
                            >
                                {item.type === "Standard" ? (
                                    <div className="content__bg package-standard">
                                        <h2>{item.type}</h2>
                                        <div className="bg-icon d-flex">
                                            <img
                                                src={item.icon}
                                                alt={item.type}
                                            />
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
                                        <p className="bg__price">
                                            {item.price}
                                        </p>
                                        <button className="btn package-standard__btn">
                                            Purchase now
                                        </button>
                                    </div>
                                ) : (
                                    <div className="content__bg">
                                        <h2>{item.type}</h2>
                                        <div className="bg-icon d-flex">
                                            <img
                                                src={item.icon}
                                                alt={item.type}
                                            />
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
                                        <p className="bg__price">
                                            {item.price}
                                        </p>
                                        <button className="btn">
                                            Purchase now
                                        </button>
                                    </div>
                                )}
                            </Grid>
                        ))}
                    </Grid>
                    <p className="text-gray">
                        If you need custom services or Need more?{" "}
                        <span>
                            <a href="/#">Contact us</a>
                        </span>
                    </p>

                    <Grid
                        container
                        sx={12}
                        className="container__package-card d-flex"
                    >
                        {dataPackages.map((item) => (
                            <Grid item key={item.id}>
                                <PackagePageCard
                                    icon={item.icon}
                                    title={item.title}
                                    content={item.content}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </>
    );
}

export default PackagesPage;
