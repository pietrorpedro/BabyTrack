import { Grid2 as Grid } from "@mui/material";

export default function GridCustom({isContainer, spacing, size, children}) {
    return isContainer ? (
        <Grid container spacing={spacing}>
            {children}
        </Grid>
    ) : (
        <Grid item size={size}>
            {children}
        </Grid>
    )
}