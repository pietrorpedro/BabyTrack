import { Typography } from "@mui/material";

export default function TypographyCustom({ children, variant, color, align, gutterBottom = false, sx }) {
    return <Typography
        variant={variant}
        color={color}
        align={align}
        gutterBottom={gutterBottom}
        sx={sx}
    >
        {children}
    </Typography>
}