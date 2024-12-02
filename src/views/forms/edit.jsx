import { Box } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BoxCustom from "../../components/box/box";
import ButtonCustom from '../../components/button/button';
import Header from "../../components/header/header";
import TextFieldCustom from '../../components/textField/textField';
import TypographyCustom from "../../components/typography/typography";
import { useStorageContext } from "../../contexts/StorageContext";

function Edit() {
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");
    const id = searchParams.get("id");
    const navigation = useNavigate();

    const {
        getSleepData,
        getDiaperData,
        getEatData,
        updateEatData,
        updateSleepData,
        updateDiaperData,
        deleteEatData,
        deleteDiaperData,
        deleteSleepData
    } = useStorageContext();

    const [formData, setFormData] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [food, setFood] = useState("");
    const [observation, setObservation] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            let data;

            switch (type) {
                case "sleep":
                    data = await getSleepData();
                    break;
                case "eat":
                    data = await getEatData();
                    break;
                case "diaper":
                    data = await getDiaperData();
                    break;

                default:
                    navigation("/");
                    break;
            }

            const itemToEdit = data.find(item => item.id === Number(id));
            if (itemToEdit) {
                setFormData(itemToEdit);
                setStartDate(itemToEdit.startdate ? dayjs(itemToEdit.startdate) : null);
                setEndDate(itemToEdit.enddate ? dayjs(itemToEdit.enddate) : null);
                setFood(itemToEdit.food || "");
                setObservation(itemToEdit.observation || "");
            } else {
                alert('Item não encontrado!');
                navigation('/');
            }
        };

        fetchData();
    }, [type, id, navigation]);

    if (!formData) return <div>Carregando...</div>;

    const handleStorage = async () => {
        const confirmEdit = window.confirm("Você tem certeza que deseja atualizar este item?");
        if (!confirmEdit) return;

        let data;

        if (type === "eat") {
            data = { startdate: startDate.toISOString(), enddate: endDate.toISOString(), food, observation };
            await updateEatData(id, data);
        } else if (type === "sleep") {
            data = { startdate: startDate.toISOString(), enddate: endDate.toISOString(), observation };
            await updateSleepData(id, data);
        } else if (type === "diaper") {
            data = { startdate: startDate.toISOString(), observation };
            await updateDiaperData(id, data);
        }

        alert("Atualizado com sucesso");
        navigation("/");
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Você tem certeza que deseja deletar este item?");
        if (!confirmDelete) return;

        if (type === "eat") {
            await deleteEatData(id);
        } else if (type === "sleep") {
            await deleteSleepData(id);
        } else if (type === "diaper") {
            await deleteDiaperData(id);
        }

        alert("Item deletado com sucesso");
        navigation("/");
    };

    return (
        <BoxCustom>
            <Header title={"Edit"} update onDelete={handleDelete}/>
            <TypographyCustom variant="h5" align="center" sx={{ marginBottom: 2, marginTop: 10 }}>
                Editar {type}
            </TypographyCustom>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: "500px", margin: "0 auto" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="Start Time"
                        value={startDate}
                        onChange={(newValue) => setStartDate(newValue)}
                    />
                    <DateTimePicker
                        label="End Time"
                        value={endDate}
                        onChange={(newValue) => setEndDate(newValue)}
                    />
                </LocalizationProvider>

                {type === "eat" && (
                    <TextFieldCustom
                        label="Food"
                        value={food}
                        onChange={(e) => setFood(e.target.value)}
                    />
                )}
                <TextFieldCustom
                    label="Observation"
                    value={observation}
                    onChange={(e) => setObservation(e.target.value)}
                />

                <ButtonCustom onClick={handleStorage}>Salvar</ButtonCustom>
            </Box>
        </BoxCustom>
    );
}

export default Edit;
