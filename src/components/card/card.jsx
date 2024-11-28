import { Card } from "@mui/material";

export default function Card({variant, children}) {
    return <Card variant={variant}>{children}</Card>
}