import { Button } from "@mui/material"

export default function ButtonCustom({
    children,
    variant = "contained",
    sx,
    color = "primary",
    size = "medium",
    fullWidth = false,
    onClick
}) {
    return (
        <Button
            sx={sx}
            variant={variant}
            color={color}
            size={size}
            fullWidth={fullWidth}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}
