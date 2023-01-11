import Images from "../../assets/Images";
import Grid from "@mui/material/Grid";
function DownloadPage() {
    return (
        <div className="download-page d-flex">
            <div className="download-page__container">
                <Grid container spacing={10}>
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
                                <button className="btn google-play">
                                    Google Play
                                </button>
                                <button className="btn app-store">
                                    App Store
                                </button>
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
