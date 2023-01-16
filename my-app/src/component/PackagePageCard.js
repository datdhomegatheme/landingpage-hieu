import {
    Card,
    CardContent,
    CardHeader,
    Collapse,
    IconButton,
    styled,
    Typography,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { ExpandMore } from "@mui/icons-material";

const PackagePageCard = () => {
    return ();
}

export default PackagePageCard;

<div className="container__card">
                        <Card>
                            <CardHeader
                                avatar={<DescriptionIcon />}
                                title="Which license do i need?"
                                action={
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                }
                            ></CardHeader>
                            <Collapse
                                className="card__extended-content"
                                in={expanded}
                                timeout="auto"
                                unmountOnExit
                            >
                                <CardContent>
                                    <Typography paragraph>
                                        Uniquely leverage other's distinctive
                                        infomediaries rather than leveraged
                                        supply chains. Continually seize
                                        distributed collaboration and
                                        idea-sharing whereas user.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>