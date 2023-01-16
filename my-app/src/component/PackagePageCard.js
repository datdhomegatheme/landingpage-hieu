import {
    Card,
    CardContent,
    CardHeader,
    Collapse,
    IconButton,
    styled,
    Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

const PackagePageCard = ({ icon, title, content }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className="container__card" onClick={handleExpandClick}>
            <Card className="card__extend">
                <CardHeader
                    className="card__header-content"
                    avatar={icon}
                    title={title}
                    action={
                        expanded === false ? (
                            <AddIcon
                                className="card__icon"
                                expand={expanded}
                            ></AddIcon>
                        ) : (
                            <RemoveIcon
                                className="card__icon"
                                expand={expanded}
                            ></RemoveIcon>
                        )
                    }
                ></CardHeader>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent className="card__content">
                        <Typography paragraph>{content}</Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
};

export default PackagePageCard;
