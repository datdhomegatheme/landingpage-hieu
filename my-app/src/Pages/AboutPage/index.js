import Images from "../../assets/Images";
import { aboutItems } from "../../component/DataItems";
import { Grid } from "@mui/material";

function AboutPage() {
    return (
        <div className="about">
            <Grid container className="about__container  d-flex">
                <div className="container__left">
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
                </div>
                <div className="container__right">
                    <img alt="icon mobile" src={Images.iconMobile} />
                </div>
            </Grid>
        </div>
    );
}

export default AboutPage;
