import { dataPackages, packageItems } from "../../DataItems";

import React from "react";
import PackagePageCard from "../../component/PackagePageCard";

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
                                <button className="btn">Purchase now</button>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray">
                        If you need custom services or Need more?{" "}
                        <span>
                            <a href="/#">Contact us</a>
                        </span>
                    </p>

                    <div className="container__package-card">
                        {dataPackages.map((item) => (
                            <div key={item.id}>
                                <PackagePageCard
                                    icon={item.icon}
                                    title={item.title}
                                    content={item.content}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PackagesPage;
