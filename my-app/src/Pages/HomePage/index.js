import Images from "../../assets/Images";
import Img from "../../assets/Images/homePage/hero-bg-shape-1.svg";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { Grid } from "@mui/material";

function HomePage() {
    return (
        <>
            <div className="home d-flex">
                <Grid container item xs={12} className="homePage__container">
                    <Grid
                        item
                        sm={12}
                        md={6}
                        className="homePage__container__left d-flex"
                    >
                        <h1 className="left__title">
                            Brainstorming for Desired Usability
                        </h1>
                        <h2 className="left__content">
                            Our design projects are fresh and simple and will
                            benefit your business greatly. Learn more about our
                            work!
                        </h2>
                        <form className="d-flex">
                            <input
                                type={"text"}
                                className={"left__input-subscribe"}
                                name="email"
                                id="email"
                                placeholder="info@yourdomain.com"
                            ></input>
                            <button className="left__btn-subscribe btn">
                                Subscribe
                            </button>
                        </form>
                        <div className="left__play-video d-flex">
                            <a
                                className="play-btn d-flex"
                                href="https://www.youtube.com/watch?v=9No-FiEInLA"
                            >
                                <PlayArrowOutlinedIcon className="icon" />
                            </a>
                            <p className="play-video__title">
                                Watch Video Overview
                            </p>
                        </div>
                    </Grid>
                    <Grid
                        sm={12}
                        md={6}
                        item
                        className="container__right d-flex"
                    >
                        <img
                            alt="app"
                            src={Images.AppImg}
                            className="right__app-img "
                        />
                    </Grid>
                </Grid>
                <div className="bottom">
                    <img alt="bottom img" src={Img} className="bottom__img" />
                </div>
            </div>
        </>
    );
}

export default HomePage;
