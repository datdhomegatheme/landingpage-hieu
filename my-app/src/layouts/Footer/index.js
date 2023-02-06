import { Grid } from "@mui/material";
import Images from "../../assets/Images";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

function Footer() {
    return (
        <>
            <div className="footer-top">
                <img src={Images.bgTopFooter} alt="top footer" />
            </div>

            <footer className="footer d-flex">
                <div className="footer__container d-flex">
                    <Grid
                        item
                        xs={12}
                        className={"footer__container__custom"}
                        container
                    >
                        <Grid item xs={12} sm={4}>
                            <img src={Images.logo} alt={"logo"} />
                            <p>
                                Holisticly empower premium architectures without
                                value-added ideas. Seamlessly evolve
                                cross-platform experiences.
                            </p>
                            <div className="container__social">
                                <a href="/#">
                                    <FacebookIcon />
                                </a>
                                <a href="/#">
                                    <TwitterIcon />
                                </a>
                                <a href="/#">
                                    <InstagramIcon />
                                </a>
                                <a href="/#">
                                    <PinterestIcon />
                                </a>
                            </div>
                        </Grid>
                        <Grid
                            className="grid__resources-company-location-wrapper"
                            container
                            item
                            xs={12}
                            sm={8}
                        >
                            <Grid item sm={4}>
                                <h2>Resources</h2>
                                <ul>
                                    <li className="text-gray">
                                        <a href="/#">Help</a>
                                    </li>
                                    <li>
                                        <a href="/#">Events</a>
                                    </li>
                                    <li>
                                        <a href="/#">Live Support</a>
                                    </li>
                                    <li>
                                        <a href="/#">Open Sources</a>
                                    </li>
                                    <li>
                                        <a href="/#">Documentation</a>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item sm={4}>
                                <h2>Company</h2>
                                <ul>
                                    <li>
                                        <a href="/#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="/#">Careers</a>
                                    </li>
                                    <li>
                                        <a href="/#">Customers</a>
                                    </li>
                                    <li>
                                        <a href="/#">Community</a>
                                    </li>
                                    <li>
                                        <a href="/#">Our Team</a>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid item sm={4}>
                                <h2>Location</h2>
                                <ul>
                                    <li>
                                        <LocationOnIcon />
                                        <a href="/#">
                                            121 King Melbourne
                                            <br />
                                            Australia 3000
                                        </a>
                                    </li>
                                    <li>
                                        <PhoneAndroidIcon />
                                        <a href="/#">+61 2 8376 6284</a>
                                    </li>
                                    <li>
                                        <EmailIcon />
                                        <a href="/#">mail@example.com</a>
                                    </li>
                                    <li>
                                        <LanguageIcon />
                                        <a href="/#">www.yourdomain.com</a>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className="footer-bottom d-flex ">
                    <div className="footer-bottom__container d-flex">
                        <Grid
                            className="footer-bottom__container__custom-grid"
                            item
                            container
                            xs={12}
                        >
                            <Grid item xs={6} sm={6} md={7} lg={7} xl={7}>
                                <p>
                                    © ThemeTags Design Agency, All rights
                                    reserved
                                </p>
                            </Grid>

                            <Grid item xs={6} sm={6} md={5} lg={5} xl={5}>
                                <ul>
                                    <li>
                                        <a href="/#">Terms</a>
                                    </li>
                                    <li>
                                        <a href="/#">Security</a>
                                    </li>
                                    <li>
                                        <a href="/#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
