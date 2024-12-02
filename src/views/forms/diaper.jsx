import { Box } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import BoxCustom from '../../components/box/box';
import ButtonCustom from '../../components/button/button';
import Header from "../../components/header/header";
import TextFieldCustom from '../../components/textField/textField';
import TypographyCustom from '../../components/typography/typography';
import { useStorageContext } from "../../contexts/StorageContext";

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

function Diaper() {
    const [startDate, setStartDate] = useState(null);
    const [observation, setObservation] = useState("");
    const navigation = useNavigate();
    const { t } = useTranslation();

    const { saveDiaperData } = useStorageContext();

    const handleStorage = async () => {
        const data = {
            startdate: startDate ? startDate.toISOString() : null,
            endate: null,
            observation
        }

        try {
            await saveDiaperData(data);
            alert("Salvo");

            setStartDate(null);
            setObservation("");

            navigation("/");
        } catch (error) {
            alert("Erro ao salvar => " + error.message);
        }
    };

    return (
        <BoxCustom>
            <Header title={t('diaper_title')}/>
            <TypographyCustom variant="h5" align="center" sx={{ marginBottom: 2, marginTop: 10 }}>
                {t('diaper_title')}
            </TypographyCustom>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: "500px", margin: "0 auto" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label={t('start_time')}
                        onChange={(newValue) => {
                            setStartDate(newValue ? newValue.tz('America/Sao_Paulo', true) : null);
                        }}
                        value={startDate || null}
                    />
                </LocalizationProvider>
                <TextFieldCustom
                    label={t('observation')}
                    value={observation}
                    onChange={(e) => setObservation(e.target.value)}
                />
                <ButtonCustom onClick={handleStorage}>{t('add_button')}</ButtonCustom>
            </Box>
        </BoxCustom>
    );
}

export default Diaper;
