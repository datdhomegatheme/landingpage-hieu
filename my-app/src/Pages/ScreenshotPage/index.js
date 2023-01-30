import { dataScreenshots } from "../../DataItems";
import React from "react";
import Carousel from "react-grid-carousel";

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
                        <Carousel
                            cols={3}
                            autoplay={5000}
                            hideArrow={true}
                            loop={true}
                            showDots
                        >
                            {dataScreenshots.map((item, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        src={item.img}
                                        id={item.id}
                                        alt="screenshots"
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScreenshotPage;
