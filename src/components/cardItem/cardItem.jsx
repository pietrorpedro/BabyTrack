import EditIcon from '@mui/icons-material/Edit';
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

export default function CardItem({data, index, onEdit, title}) {

    const { t } = useTranslation();

    return (
        <Card
            key={index}
            sx={{
                marginBottom: 1,
                position: "relative"
            }}
        >
            <CardContent>
                <Typography align='center' variant='h5'>{title}</Typography>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    gap: 2,
                    textAlign: "center",
                }}>
                    <Typography>{t('start')}: {dayjs(data.startdate).format("HH:mm")}</Typography>
                    {data.enddate && <Typography>{t('end')}: {dayjs(data.enddate).format("HH:mm")}</Typography>}
                    <Typography>{t('date')}: {dayjs(data.startdate).format("DD/MM/YYYY")}</Typography>
                </Box>
                <Box
                    sx={{
                        marginTop: 2
                    }}
                >
                    {data.food && <Typography variant="body1">{t('food')}: {data.food}</Typography>}
                    {data.observation && <Typography variant="body1">{t('observation')}: {data.observation}</Typography>}
                    {data.type && <Typography variant="body1">{t('type')}: {data.type}</Typography>}
                </Box>
            </CardContent>

            <IconButton
                color='primary'
                onClick={onEdit}
                sx={{
                    position: 'absolute',
                    bottom: 5,
                    right: 5,

                    backgroundColor: "white",
                    border: 1,
                    width: 30,
                    height: 30
                }}>
                <EditIcon />
            </IconButton>
        </Card>
    )
}