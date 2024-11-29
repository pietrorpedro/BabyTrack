import { Avatar, Grid2, IconButton, Typography } from '@mui/material';
import BoxCustom from './../components/box/box';

import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SettingsIcon from '@mui/icons-material/Settings';

import ChildCareIcon from '@mui/icons-material/ChildCare';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TypographyCustom from './../components/typography/typography';

function Home() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    return (
        <BoxCustom sx={{}}>
            <Grid2 container justifyContent="space-evenly" alignItems="flex-end" spacing={1} marginBottom={5}>
                <Grid2 xs={12} sm={4} md={3} lg={3} textAlign="center" padding={1} borderRadius={3} minWidth={100}>
                    <IconButton
                        color="primary"
                        size="medium"
                        sx={{ marginBottom: 1, border: 1 }}
                        onClick={() => navigate("/dashboard")}
                    >
                        <LeaderboardIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Typography variant="body1">52 cm</Typography>
                    <Typography variant="body2">Comprimento</Typography>
                </Grid2>

                <Grid2 xs={12} sm={4} md={3} lg={3} textAlign="center" padding={1} borderRadius={3} minWidth={100}>
                    <IconButton
                        color="primary"
                        size="medium"
                        sx={{ marginBottom: 1 }}
                    >
                        <Avatar
                            src='https://cdn-icons-png.flaticon.com/512/7890/7890168.png'
                            sx={{
                                width: 90,
                                height: 90
                            }}
                        />
                    </IconButton>
                    <Typography variant="body1">Fulano</Typography>
                    <Typography variant="body2">X dia(s)</Typography>
                </Grid2>

                <Grid2 xs={12} sm={4} textAlign="center" padding={1} borderRadius={3} minWidth={100}>
                    <IconButton
                        color="primary"
                        size="medium"
                        sx={{ marginBottom: 1, border: 1 }}
                        onClick={() => navigate("/settings")}
                    >
                        <SettingsIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Typography variant="body1">3,80 kg</Typography>
                    <Typography variant="body2">Peso</Typography>
                </Grid2>
            </Grid2>

            <Grid2 container justifyContent="space-evenly" alignItems="center" spacing={1} marginBottom={5}>
                <Grid2
                    minWidth={100}
                    xs={12}
                    sm={4}
                    textAlign="center"
                    boxShadow={1}
                    padding={1}
                    borderRadius={3}
                    sx={{
                        position: "relative",
                        paddingBottom: 5
                    }}
                >
                    <IconButton
                        color="primary"
                        size="medium"
                        sx={{ marginBottom: 1 }}
                    >
                        <HotelIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Typography variant="body1">Sono</Typography>
                    <Typography variant="body2">Adicione algo</Typography>

                    <IconButton
                        color="secondary"
                        size="small"
                        sx={{
                            position: "absolute",
                            bottom: -20,
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "white",
                            boxShadow: 2,
                            width: 45,
                            height: 45,
                        }}
                        onClick={() => navigate("/form?type=sleep")}
                    >
                        <Typography variant="h6">+</Typography>
                    </IconButton>
                </Grid2>


                <Grid2
                    minWidth={100}
                    xs={12}
                    sm={4}
                    textAlign="center"
                    boxShadow={1}
                    padding={1}
                    borderRadius={3}
                    sx={{
                        position: "relative",
                        paddingBottom: 5
                    }}
                >
                    <IconButton
                        color="primary"
                        size="medium"
                        sx={{ marginBottom: 1 }}
                    >
                        <LocalDiningIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Typography variant="body1">Alimentação</Typography>
                    <Typography variant="body2">Adicione algo</Typography>

                    <IconButton
                        color="secondary"
                        size="small"
                        sx={{
                            position: "absolute",
                            bottom: -20,
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "white",
                            boxShadow: 2,
                            width: 45,
                            height: 45,
                        }}
                        onClick={() => navigate("/form?type=feeding")}
                    >
                        <Typography variant="h6">+</Typography>
                    </IconButton>
                </Grid2>

                <Grid2
                    minWidth={100}
                    xs={12}
                    sm={4}
                    textAlign="center"
                    boxShadow={1}
                    padding={1}
                    borderRadius={3}
                    sx={{
                        position: "relative",
                        paddingBottom: 5
                    }}
                >
                    <IconButton
                        color="primary"
                        size="medium"
                        sx={{ marginBottom: 1 }}
                    >
                        <ChildCareIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                    <Typography variant="body1">Fralda</Typography>
                    <Typography variant="body2">Adicione algo</Typography>

                    <IconButton
                        color="secondary"
                        size="small"
                        sx={{
                            position: "absolute",
                            bottom: -20,
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "white",
                            boxShadow: 2,
                            width: 45,
                            height: 45,
                        }}
                        onClick={() => navigate("/form?type=diaper")}
                    >
                        <Typography variant="h6">+</Typography>
                    </IconButton>
                </Grid2>
            </Grid2>

            <BoxCustom>
                {items.length > 0 ? (
                    <TypographyCustom>Tudo aqui</TypographyCustom>
                ) : (
                    <Typography variant="h5" color='textDisabled' align='center' marginTop={20}>Nada aqui...</Typography>
                )}
            </BoxCustom>
        </BoxCustom>
    )
}

export default Home;
