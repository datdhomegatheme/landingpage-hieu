import Images from "../../Assets/Images";
// import "../../Assets/Styles/HomePage/_index.scss";
import Img from "../../Assets/Images/HomePage/hero-bg-shape-1.svg";

function HomePage() {
    return (
        <>
            <div className="home">
                <div className="home__container d-flex">
                    <div className="container__left">
                        <h1 className="left__title">
                            Brainstorming for Desired Usability
                        </h1>
                        <p className="left__content text-content ">
                            Our design projects are fresh and simple and will
                            benefit your business greatly. Learn more about our
                            work!
                        </p>
                        <form className="d-flex">
                            <input
                                type={"text"}
                                className={"left__input-subcribe"}
                                name="email"
                                id="email"
                                placeholder="info@yourdomain.com"
                            ></input>
                            <button className="left__btn-subcribe btn">
                                Subcribe
                            </button>
                        </form>
                        <div>
                            <button />
                            <div>Watch Video Overview</div>
                        </div>
                    </div>
                    <div className="container__right">
                        {/* <img
                            alt="app"
                            src={Images.AppImg}
                            className="right__app-img"
                        /> */}
                    </div>
                </div>
                <div className="bottom">
                    <img alt="bottom img" src={Img} className="bottom__img" />
                </div>
            </div>
        </>
    );
}

export default HomePage;
