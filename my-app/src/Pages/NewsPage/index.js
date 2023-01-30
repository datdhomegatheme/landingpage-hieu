import { Card, CardMedia, Grid, CardContent } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { dataNewPage } from "../../component/DataItems";

function NewsPage() {
    return (
        <section className="new-page">
            <div className="new-page__container">
                <h1>Our Latest News</h1>
                <h2 className="new-page__container__content text-gray">
                    Enthusiastically drive revolutionary opportunities before
                    emerging leadership. Distinctively <br /> transform tactical
                    methods of resource sucking core.
                </h2>
                <Grid container>
                    {dataNewPage.map((item, index) => (
                        <Grid
                            item
                            key={index}
                            xs={4}
                            className="new-page__container__card"
                        >
                            <Card>
                                <CardMedia
                                    className="card__img"
                                    title="Lifestyle"
                                    image={item.image}
                                />
                                <CardContent>
                                    <ul className="card__interactions text-gray">
                                        <li>{item.date}</li>
                                        <li>{item.comments}</li>
                                        <li>{item.share}</li>
                                    </ul>
                                    <h2>{item.title}</h2>
                                    <p className="text-gray">{item.content}</p>
                                    <a href="/#" className="card__read-more">
                                        <p className="read-more__text text-gray">
                                            Read more
                                        </p>
                                        <ArrowForwardIcon
                                            className={"read-more__icon"}
                                        />
                                    </a>
                                </CardContent>
                            </Card>
                            <span className="new-page__container__chip">
                                {item.type}
                            </span>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </section>
    );
}

export default NewsPage;
