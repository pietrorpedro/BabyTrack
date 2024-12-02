import { AppBar, IconButton, Typography } from "@mui/material";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

export default function Header({title, update = false, onDelete}) {

    const navigation = useNavigate();
    function handleGoBack() {
        navigation("/")
    }

    return (
        <AppBar sx={{
            flexGrow: 1,
            padding: 1,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <IconButton onClick={handleGoBack}><ArrowBackIcon/></IconButton>
            <Typography>{title}</Typography>
            <IconButton onClick={onDelete}>
                {update ? <DeleteIcon/> : ""}
            </IconButton>
        </AppBar>
    )
}