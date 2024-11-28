import { Alert } from "@mui/material";

export default function AlertCustom({icon, severity, children}) {
    return <Alert icon={icon} severity={severity}>{children}</Alert>
}