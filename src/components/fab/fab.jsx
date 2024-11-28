import { Fab } from "@mui/material";

export default function FabCustom({size, color, children}) {
    return <Fab size={size} color={color}>{children}</Fab>
}