import Images from "../../assets/Images";
import { dataScreenshots } from "../../DataItems";

function ScreenshotPage() {
    const carousel = document.querySelector(
        ".screenshots-page__container__slider"
    );
    const dragging = (e) => {
        console.log(e.pageX);
        console.log(123131);
    };

    carousel.addEventListener("mousemove", dragging);
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
                    <div className="slider__Items">
                        {dataScreenshots.map((item, index) => (
                            <img
                                key={index}
                                src={item.img}
                                id={item.id}
                                alt="screenshots"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScreenshotPage;
