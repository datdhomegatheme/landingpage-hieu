import { Grid, Card, CardHeader, Avatar, CardContent } from "@mui/material";
import Images from "../../assets/Images";

function FeedbackPage() {
    return (
        <>
            <section className="feedback-page d-flex">
                <div className="feedback-page__container">
                    <Grid container>
                        <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                            <h1>What Clients Say About Us</h1>
                            <h2>
                                Rapidiously morph transparent internal or
                                "organic" sources whereas resource sucking
                                e-business. Conveniently innovate compelling
                                internal.
                            </h2>
                            <ul className="icon-clients">
                                <li>
                                    <img
                                        src={Images.airBnb}
                                        alt="airbnb logo"
                                    />
                                </li>
                                <li>
                                    <img
                                        src={Images.spotify}
                                        alt="spotify logo"
                                    />
                                </li>
                                <li>
                                    <img
                                        src={Images.payPal}
                                        alt="payPal logo"
                                    />
                                </li>
                            </ul>
                        </Grid>
                        <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Card>
                                <CardHeader
                                    avatar={<Avatar className="card-avatar" />}
                                    title={"John Charles"}
                                    subheader={"Google"}
                                />
                                <CardContent>
                                    {" "}
                                    <p>
                                        {" "}
                                        <img
                                            src={Images.quote}
                                            alt="quote"
                                        ></img>
                                        <span>
                                            Enthusiastically innovate B2C data
                                            without clicks-and-mortar
                                            convergence. Monotonectally deliver
                                            compelling testing procedures
                                            vis-a-vis B2B testing procedures.
                                            Competently evisculate integrated
                                            resources whereas global processes.
                                            Enthusiastically.
                                        </span>
                                    </p>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </section>
        </>
    );
}

export default FeedbackPage;
