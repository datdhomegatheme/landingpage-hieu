import React from "react";
import Carousel from "react-elastic-carousel";
import { Grid } from "@mui/material";

import { dataTrustCompany } from "../../component/DataItems";

const TrustPage = () => {
    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            // we hit the last item, go to first item
            carouselRef.current.goTo(0);
        }
    };
    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            // we hit the first item, go to last item
            carouselRef.current.goTo(dataTrustCompany.length);
        }
    };

    return (
        <section className={"trust-page d-flex"}>
            <div className={"trust-page__container"}>
                <h1>Trusted by Companies</h1>
                <h2 className={"trust-page__container__content text-gray"}>
                    Rapidiously morph transparent internal or "organic" sources
                    whereas resource sucking e-
                    <br />
                    business. Conveniently innovate compelling internal.
                </h2>
                <div className={"trust-page__container__carousel"}>
                    <Carousel
                        enableAutoPlay={true}
                        showArrows={false}
                        itemsToShow={6}
                        className="carousel"
                        ref={carouselRef}
                        onPrevStart={onPrevStart}
                        onNextStart={onNextStart}
                        disableArrowsOnEnd={false}
                    >
                        {dataTrustCompany.map((item, index) => (
                            <div key={index}>
                                <img
                                    className="carousel__img"
                                    src={item.img}
                                    alt={item.alt}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="trust-page__container__subscribe d-flex">
                    <input
                        type={"text"}
                        className="subscribe__input"
                        placeholder="info@yourdomain.com"
                    />
                    <button className="btn subscribe__btn">Subscribe</button>
                </div>
            </div>
        </section>
    );
};
export default TrustPage;
