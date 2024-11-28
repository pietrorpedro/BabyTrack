import { Box } from "@mui/material";

export default function BoxCustom({component, sx, children}) {
    return <Box component={component} sx={sx}>{children}</Box>
}