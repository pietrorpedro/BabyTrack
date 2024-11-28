import { IconButton } from "@mui/material";

export default function IconButtonCustom({onClick, icon, color = "default", size}) {
    return <IconButton onClick={onClick} color={color} size={size}>{icon}</IconButton>
}