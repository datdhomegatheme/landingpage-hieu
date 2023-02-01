import { dataScreenshots } from "../../component/DataItems";
import React from "react";
import Carousel from "react-elastic-carousel";

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
                            itemsToShow={3}
                            itemsToScroll={1}
                            enableAutoPlay={10000}
                            showArrows={false}
                            enableMouseSwipe
                        >
                            {dataScreenshots.map((item, index) => (
                                <div key={index}>
                                    <img src={item.img} alt={item} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScreenshotPage;
