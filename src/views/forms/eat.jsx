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

function Eat() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [food, setFood] = useState("");
    const [observation, setObservation] = useState("");
    const navigation = useNavigate();
    const { t } = useTranslation();

    const { saveEatData } = useStorageContext();

    const handleStorage = async () => {
        if (!startDate || !endDate || !food) {
            alert(t('please_fill_all_fields'));
            return;
        }

        const data = {
            startdate: startDate.toISOString(),
            enddate: endDate.toISOString(),
            food,
            observation
        };

        try {
            await saveEatData(data);
            alert("Salvo");

            setStartDate(null);
            setEndDate(null);
            setFood("");
            setObservation("");

            navigation("/");
        } catch(error) {
            alert("Erro ao salvar => " + error.message);
        }
    };

    return (
        <BoxCustom>
            <Header title={t('eat_title')}/>
            <TypographyCustom variant="h5" align="center" sx={{ marginBottom: 2, marginTop: 10 }}>
                {t('eat_title')}
            </TypographyCustom>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: "500px", margin: "0 auto" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label={t('start_time')}
                        onChange={(newValue) => setStartDate(newValue)}
                        value={startDate || null}
                    />
                    <DateTimePicker
                        label={t('end_time')}
                        onChange={(newValue) => setEndDate(newValue)}
                        value={endDate || null}
                    />
                </LocalizationProvider>
                <TextFieldCustom
                    label={t('food')}
                    value={food}
                    onChange={(e) => setFood(e.target.value)}
                />
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

export default Eat;
