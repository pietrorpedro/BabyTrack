import { Grid2 as Grid } from "@mui/material";

export default function GridCustom({isContainer, spacing, size, children, sx}) {
    return isContainer ? (
        <Grid container spacing={spacing} sx={sx}>
            {children}
        </Grid>
    ) : (
        <Grid item size={size} sx={sx}>
            {children}
        </Grid>
    )
}