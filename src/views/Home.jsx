import ChildCareIcon from '@mui/icons-material/ChildCare';
import HotelIcon from '@mui/icons-material/Hotel';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, Box, Grid2, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import CardItem from '../components/cardItem/cardItem';
import { useStorageContext } from '../contexts/StorageContext';
import BoxCustom from './../components/box/box';


function Home() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { getEatData, getDiaperData, getSleepData } = useStorageContext();
    const { getBabyData } = useStorageContext();


    useEffect(() => {
        
        const fetchData = async () => {
            const sleepData = await getSleepData();
            const diaperData = await getDiaperData();
            const eatData = await getEatData();

            setItems([
                { type: "sleep", data: sleepData },
                { type: "eat", data: eatData },
                { type: "diaper", data: diaperData },
            ]);
        };

        fetchData();
    }, [getEatData, getDiaperData, getSleepData, t]);

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
                    <Typography variant="body1">{getBabyData().length} cm</Typography>
                    <Typography variant="body2">{t('length_label')}</Typography>
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
                    <Typography variant="body1">{getBabyData().name}</Typography>
                    <Typography variant="body2">{t('days')}</Typography>
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
                    <Typography variant="body1">{getBabyData().weight} kg</Typography>
                    <Typography variant="body2">{t('weight_label')}</Typography>
                </Grid2>
            </Grid2>

            <Grid2 container justifyContent="space-evenly" alignItems="center" spacing={0.5} marginBottom={5}>
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
                    <Typography variant="body1">{t('go_to_sleep')}</Typography>
                    <Typography variant="body2">{t('add_sleep')}</Typography>

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
                    <Typography variant="body1">{t('go_to_eat')}</Typography>
                    <Typography variant="body2">{t('add_eat')}</Typography>

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
                        onClick={() => navigate("/form?type=eat")}
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
                    <Typography variant="body1">{t('go_to_diaper')}</Typography>
                    <Typography variant="body2">{t('add_diaper')}</Typography>

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
                {items.map((item, index) => (
                    item.data.length > 0 && (
                        <Box key={index} sx={{ marginBottom: 2 }}>
                            {item.data.map((data, dataIndex) => (
                                <CardItem
                                        title={t(`go_to_${item.type}`)}
                                        data={data}
                                        index={dataIndex}
                                        key={dataIndex}
                                        onEdit={() => navigate(`/form?type=${item.type}&id=${data.id}`)}
                                />
                            ))}
                        </Box>
                    )
                ))}
                {items.every(item => item.data.length === 0) && (
                    <Typography variant="h5" color='textDisabled' align='center' marginTop={20}>{t('nothing_here')}</Typography>
                )}
            </BoxCustom>
        </BoxCustom>
    );
}

export default Home;
