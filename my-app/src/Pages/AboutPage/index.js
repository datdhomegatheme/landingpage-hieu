import Images from "../../assets/Images";
import { aboutItems } from "../../component/DataItems";
import { Grid } from "@mui/material";

function AboutPage() {
    return (
        <div className="about d-flex">
            <Grid xs={12} container className="about__container  d-flex">
                <Grid xs={12} md={7} item className="container__left">
                    <h1>Use Your Android or ios Device to Manage Everything</h1>
                    {aboutItems.map((item, indexAbout) => (
                        <div key={indexAbout}>
                            <div className="left__content">
                                <div className="about-icon">
                                    <img alt="about icon" src={item.icon} />
                                </div>
                                <p className="content__content">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </Grid>
                <Grid item xs={12} md={5} className="container__right d-flex">
                    <img alt="icon mobile" src={Images.iconMobile} />
                </Grid>
            </Grid>
        </div>
    );
}

export default AboutPage;
