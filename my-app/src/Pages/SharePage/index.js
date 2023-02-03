import Images from "../../assets/Images";
import { aboutItems } from "../../component/DataItems";
import { Grid } from "@mui/material";

function SharePage() {
    return (
        <div className="share-page d-flex">
            <Grid container xs={12} className="share-page__container d-flex">
                <Grid item className="container__left">
                    <img alt="icon mobile" src={Images.iconMobile2} />
                </Grid>
                <Grid item sx={12} md={7} className="container__right">
                    <h1>Share your Photos with Friends Easily</h1>
                    <p>
                        Objectively deliver professional value with diverse
                        web-readiness. Collaboratively transition wireless
                        customer service without goal-oriented catalysts for
                        change. Collaboratively.
                        <br /> Uniquely simplify sustainable applications
                        whereas adaptive schemas. Competently brand performance
                        based content and
                    </p>
                    <div className="right__icon">
                        {aboutItems.map((item, index) => (
                            <div key={index}>
                                <div className="about-icon">
                                    <img alt="about icon" src={item.icon} />
                                </div>
                            </div>
                        ))}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default SharePage;
