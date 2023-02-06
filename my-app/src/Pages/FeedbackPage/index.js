import {
    Grid,
    Card,
    CardHeader,
    Avatar,
    CardContent,
    Modal,
    Box,
} from "@mui/material";
import Images from "../../assets/Images";

import { dataClients, dataIconClient } from "../../component/DataItems";

import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import React from "react";
import ReactPlayer from "react-player";
import Carousel from "react-elastic-carousel";

function FeedbackPage() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <section className="feedback-page d-flex">
                <div className="feedback-page__container">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <h1>What Clients Say About Us</h1>
                            <h2 className="text-gray">
                                Rapidiously morph transparent internal or
                                "organic" sources whereas resource sucking
                                e-business. Conveniently innovate compelling
                                internal.
                            </h2>
                            <ul className="icon-clients">
                                {dataIconClient.map((item, index) => (
                                    <li key={index}>
                                        <img src={item.src} alt={item.alt} />
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            className="feedback-page__container__left"
                        >
                            <Carousel
                                className="feedback-page__container__left__carousel"
                                pagination={false}
                            >
                                {dataClients.map((item, index) => (
                                    <Card key={index}>
                                        <CardHeader
                                            className="card-header text-medium"
                                            avatar={
                                                <Avatar
                                                    alt={item.name}
                                                    src={item.avatar}
                                                    className="card-avatar"
                                                />
                                            }
                                            title={
                                                <h1 className="text-medium">
                                                    {item.name}
                                                </h1>
                                            }
                                            subheader={<h2>{item.company}</h2>}
                                        />
                                        <CardContent className="card-content">
                                            {" "}
                                            <p>
                                                {" "}
                                                <img
                                                    src={Images.quote}
                                                    alt="quote"
                                                ></img>
                                                <span className="text-gray">
                                                    {item.feedback}
                                                </span>
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Carousel>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <section className="overview">
                <div className="overview__container">
                    <div className="left__play-video d-flex">
                        <button
                            className="play-btn d-flex"
                            onClick={handleOpen}
                        >
                            <PlayArrowOutlinedIcon className="icon" />
                        </button>
                        <p className="play-video__title text-medium">
                            Watch video overview
                        </p>
                    </div>
                </div>

                {/* modal */}
                <Modal open={open} onClose={handleClose}>
                    <Box className="overview__modal">
                        <ReactPlayer
                            playing={true}
                            controls={true}
                            url={"https://www.youtube.com/watch?v=9No-FiEInLA"}
                        />
                    </Box>
                </Modal>
            </section>
        </>
    );
}

export default FeedbackPage;
