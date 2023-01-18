import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";

function ButtonPlay() {
    return (
        <div className="left__play-video d-flex">
            <a
                className="play-btn d-flex"
                href="https://www.youtube.com/watch?v=9No-FiEInLA"
                data-toggle="modal"
                data-src="https://www.youtube.com/embed/NFWSFbqL0A0"
                data-target="#myModal"
            >
                <PlayArrowOutlinedIcon className="icon" />
            </a>
            <p className="play-video__title">Watch Video Overview</p>
        </div>
    );
}

export default ButtonPlay;
