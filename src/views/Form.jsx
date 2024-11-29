import { Box } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useStorageContext } from "../contexts/StorageContext";
import BoxCustom from './../components/box/box';
import ButtonCustom from './../components/button/button';
import TextFieldCustom from './../components/textField/textField';
import TypographyCustom from './../components/typography/typography';


function Form() {
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");

    const [startDate, setStartDate] = useState(null); // Inicialize com null
    const [endDate, setEndDate] = useState(null); // Inicialize com null
    const [food, setFood] = useState("");
    const [observation, setObservation] = useState("");

    const { storageData, updateData } = useStorageContext();

    const handleStorage = () => {
        console.log("Data Início:", startDate);
        console.log("Data Final:", endDate);
        console.log("O que comeu:", food);
        console.log("Observações:", observation);

        const data = { startDate, endDate, food, observation };
        updateData(type, data);
    }

    if (!type) {
        return <div>Erro: Tipo de dado não especificado.</div>;
    }

    return (
        <BoxCustom>
            <TypographyCustom
                variant={"h5"}
                align={"center"}
                sx={{ marginBottom: 2 }}
            >
                {type === 'sleep' && "Registro de Sono"}
                {type === 'feeding' && "Registro de Alimentação"}
                {type === 'diaper' && "Registro de Troca de Fralda"}
            </TypographyCustom>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: "500px",
                margin: "0 auto"
            }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    {type === 'sleep' || type === 'feeding' ? (
                        <>
                            <DateTimePicker
                                label={type === 'sleep' ? "Data Início" : "Data Início da Alimentação"}
                                onChange={(newValue) => setStartDate(newValue)}
                                value={startDate || null}
                            />
                            <DateTimePicker
                                label={type === 'sleep' ? "Data Final" : "Data Final da Alimentação"}
                                onChange={(newValue) => setEndDate(newValue)}
                                value={endDate || null}
                            />
                        </>
                    ) : null}

                    {type === 'feeding' ? (
                        <TextFieldCustom
                            label={"O que comeu"}
                            value={food}
                            onChange={(e) => setFood(e.target.value)}
                        />
                    ) : null}

                    {type === 'sleep' || type === 'feeding' || type === 'diaper' ? (
                        <TextFieldCustom
                            label={"Observações"}
                            value={observation}
                            onChange={(e) => setObservation(e.target.value)}
                        />
                    ) : null}

                    {type === 'diaper' ? (
                        <>
                            <DateTimePicker
                                label={"Data de Troca"}
                                onChange={(newValue) => setStartDate(newValue)}
                                value={startDate || null}
                            />
                            <TextFieldCustom
                                label={"Observações"}
                                value={observation}
                                onChange={(e) => setObservation(e.target.value)}
                            />
                        </>
                    ) : null}
                </LocalizationProvider>

                <ButtonCustom onClick={handleStorage}>Cadastrar</ButtonCustom>
            </Box>
        </BoxCustom>
    );
}

export default Form;
