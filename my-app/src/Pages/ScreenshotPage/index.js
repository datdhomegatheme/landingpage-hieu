import { dataScreenshots } from "../../component/DataItems";
import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function ScreenshotPage() {
    return (
        <section className="screenshots-page">
            <div className="screenshots-page__container d-flex">
                <h1>App Screenshots Looks Awesome</h1>
                <h2 className={"text-gray"}>
                    Credibly synthesize multimedia based networks vis-a-vis
                    top-line growth strategies. Continually leverage existing
                    worldwide interfaces
                </h2>

                <div className="screenshots-page__container__slider">
                    <div className="slider__frame"></div>
                    <div className="slider__items">
                        <OwlCarousel
                            loop={true}
                            autoPlay={true}
                            autoplaySpeed="1"
                            items="3"
                            mouseDrag
                            center={true}
                            className="owl-theme"
                        >
                            {dataScreenshots.map((item, index) => (
                                <div key={index}>
                                    <img src={item.img} alt={item} />
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScreenshotPage;
