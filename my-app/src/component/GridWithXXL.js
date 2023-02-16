import { Grid } from "@mui/material";

export const GridWithXXl = ({ xxl, ...other }) => {
    const xxlClass = `MuiGrid-grid-xxl-${xxl}`;
    return <Grid className={xxlClass} {...other} />;
};
