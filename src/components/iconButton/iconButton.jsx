import { IconButton } from "@mui/material";

export default function IconButtonCustom({onClick, children, color = "default", size}) {
    return <IconButton onClick={onClick} color={color} size={size}>{children}</IconButton>
}