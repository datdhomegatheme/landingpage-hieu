import { Grid } from "@mui/material";

function ContactPage() {
    return (
        <section className="contact-page d-flex">
            <div className="contact-page__container">
                <Grid container sx={12}>
                    <Grid item sm={5} className={"container__contact-info"}>
                        <h1 className="contact-title">Contact With Us</h1>
                        <p className="text-gray">
                            It's very easy to get in touch with us. Just use the
                            contact form or pay us a visit for a coffee at the
                            office. Dynamically innovate competitive technology
                            after an expanded array of leadership.
                        </p>
                        <h2 className="text-gray">Head Office</h2>
                        <p className="text-gray">
                            121 King St, Melbourne VIC 3000, Australia
                        </p>

                        <p className="text-gray">Phone: +61 2 8376 6284</p>
                        <p className="text-gray">
                            Email: <a href="#/">hello@yourdomain.com</a>
                        </p>
                    </Grid>
                    <Grid item className={"container__reach-us"} xs={12} sm={7}>
                        <h1 className="reach-us__title">Reach us quickly</h1>
                        <Grid container xs={12} className="contact-form">
                            <Grid item xs={12} lg={6}>
                                <input
                                    className="contact-input-medium"
                                    placeholder="Enter name"
                                ></input>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <input
                                    className="contact-input-medium"
                                    placeholder="Enter email"
                                ></input>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <input
                                    className="contact-input-medium"
                                    placeholder="Enter phone"
                                ></input>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <input
                                    className="contact-input-medium"
                                    placeholder="Enter company"
                                ></input>
                            </Grid>
                            <Grid item xs={12}>
                                {" "}
                                <textarea
                                    className="contact-input-large"
                                    placeholder="Message"
                                ></textarea>
                            </Grid>

                            <br />
                            <button className="contact-btn btn">
                                Send Message
                            </button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
}

export default ContactPage;
