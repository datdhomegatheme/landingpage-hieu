import Images from "../../assets/Images";
import Grid from "@mui/material/Grid";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
function DownloadPage() {
    return (
        <div className="download-page d-flex">
            <div className="download-page__container">
                <Grid className="container__custom" container spacing={10}>
                    <Grid
                        className="d-flex"
                        xs={12}
                        sm={7}
                        md={7}
                        lg={7}
                        xl={7}
                    >
                        <div className="download-page__content">
                            <h1>
                                Start Managing your Apps Business, more Faster
                            </h1>
                            <h2>
                                Objectively deliver professional value with
                                diverse web-readiness. Collaboratively
                                transition wireless customer service without
                                goal-oriented catalysts for change.
                                Collaboratively.
                            </h2>
                            <div className="content__btn">
                                <a href="/#" className="btn google-play">
                                    <AndroidIcon className="icon-android" />
                                    <span>Google Play</span>
                                </a>
                                <a href="/#" className="btn app-store">
                                    <AppleIcon className="icon-apple" />
                                    <span>App Store</span>
                                </a>
                            </div>
                        </div>
                    </Grid>
                    <Grid
                        className="d-flex"
                        item
                        xs={12}
                        sm={5}
                        md={5}
                        lg={5}
                        xl={5}
                    >
                        <div>
                            <img
                                alt="app hand top"
                                className="img-app-hand-top"
                                src={Images.appHandTop}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default DownloadPage;
