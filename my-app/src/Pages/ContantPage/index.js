import { Grid } from "@mui/material";

function ContactPage() {
    return (
        <section className="contact-page">
            <div className="container">
                <Grid container>
                    <Grid sm={5} className={"container__contact-info"}>
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
                    <Grid className={"container__reach-us"} sm={7}>
                        <h1 className="reach-us__title">Reach us quickly</h1>
                        <form className="contact-form">
                            <input
                                className="contact-input-medium"
                                placeholder="Enter name"
                            ></input>
                            <input
                                className="contact-input-medium"
                                placeholder="Enter email"
                            ></input>
                            <input
                                className="contact-input-medium"
                                placeholder="Enter phone"
                            ></input>
                            <input
                                className="contact-input-medium"
                                placeholder="Enter company"
                            ></input>
                            <textarea
                                className="contact-input-large"
                                placeholder="Message"
                            ></textarea>
                            <br />
                            <button className="contact-btn btn">
                                Send Message
                            </button>
                        </form>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
}

export default ContactPage;
