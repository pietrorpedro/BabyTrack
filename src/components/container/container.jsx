import { Container } from "@mui/material";

export default function ContainerCustom({maxWidth, children}) {
    return <Container maxWidth={maxWidth}>{children}</Container>
}