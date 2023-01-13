import { packageItems } from "../../DataItems";
import Images from "../../assets/Images";
// import IconUnlimitedPackage from "../../assets/Images/packagesPage/unlimited-icon.svg";

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
                                </div>
                            </>
                        ))}
                        {/* <div className="content__bg">
                            <h2>title</h2>
                            <div className="bg-icon d-flex"></div>
                            <p>Users access same time</p>
                            <p>Integrated eCommerce</p>
                            <p>Customization interface</p>
                            <p>Weekly updated</p>
                            <p>24/7 Phone Support</p>
                            <p>Event Analytics</p>
                            <h1>$29</h1>
                            <button className="btn">Purchase now</button>
                        </div> */}
                        {/* {packageItems.map((item, index) => (
                            <>
                                <div key={index} className="content__bg">
                                    <div className="bg-icon d-flex">
                                        {item.icon}
                                    </div>
                                    <h2>{item.title}</h2>
                                    <p className="text-gray">{item.content}</p>
                                </div>
                            </>
                        ))} */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PackagesPage;
