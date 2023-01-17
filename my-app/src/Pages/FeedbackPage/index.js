import {
    Grid,
    Card,
    CardHeader,
    Avatar,
    CardContent,
    Typography,
    Modal,
    Box,
} from "@mui/material";
import Images from "../../assets/Images";

import { dataClients } from "../../DataItems";

import SwipeableViews from "react-swipeable-views";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import React from "react";
import ReactPlayer from "react-player";

function FeedbackPage() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <section className="feedback-page d-flex">
                <div className="feedback-page__container">
                    <Grid container>
                        <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                            <h1>What Clients Say About Us</h1>
                            <h2 className="text-gray">
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
                        <Grid
                            xs={12}
                            sm={6}
                            md={6}
                            lg={6}
                            xl={6}
                            className="feedback-page__container__left"
                        >
                            <SwipeableViews
                                animateTransitions={2}
                                enableMouseEvents
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
                            </SwipeableViews>
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
