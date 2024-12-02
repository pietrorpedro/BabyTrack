import { CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStorageContext } from '../contexts/StorageContext';
import BoxCustom from './../components/box/box';

const Dashboard = () => {
    const { getSleepData, getDiaperData, getEatData } = useStorageContext();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        sleep: 0,
        diaper: 0,
        eat: 0,
    });

    const {t} = useTranslation();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const sleepData = await getSleepData();
                const diaperData = await getDiaperData();
                const eatData = await getEatData();

                setData({
                    sleep: sleepData ? sleepData.length : 0,
                    diaper: diaperData ? diaperData.length : 0,
                    eat: eatData ? eatData.length : 0,
                });
            } catch (error) {
                console.error("Erro ao carregar dados do dashboard:", error.message);
                setData({
                    sleep: 0,
                    diaper: 0,
                    eat: 0,
                });
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [getSleepData, getDiaperData, getEatData]);

    if (loading) {
        return (
            <BoxCustom
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <CircularProgress />
            </BoxCustom>
        );
    }

    return (
        <BoxCustom sx={{ padding: '20px', maxWidth: 600, margin: '0 auto' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Dashboard
            </Typography>
            <BoxCustom
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h6">
                    {`${t('slept')}: ${data.sleep} ${t("times")}`}
                </Typography>
                <Typography variant="h6">
                {`${t('changed_diaper')}: ${data.diaper} ${t("times")}`}
                </Typography>
                <Typography variant="h6">
                {`${t('ate')}: ${data.eat} ${t("times")}`}
                </Typography>
            </BoxCustom>
        </BoxCustom>
    );
};

export default Dashboard;
