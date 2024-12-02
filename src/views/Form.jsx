import { useSearchParams } from "react-router-dom";
import Diaper from "./forms/diaper";
import Eat from "./forms/eat";
import Edit from "./forms/edit";
import Sleep from "./forms/sleep";
import Home from "./Home";


function Form() {
    const [searchParams] = useSearchParams();
    const type = searchParams.get("type");
    const id = searchParams.get("id");

    if (!type) {
        return <div>Erro: Tipo de dado não especificado.</div>;
    }
    
    if (id) {
        return <Edit type={type} id={id}/>
    }

    switch (type) {
        case "sleep":
            return <Sleep/>
        case "diaper":
            return <Diaper/>
        case "eat":
            return <Eat/>
        default:
            return <Home/>
    }

    // return (
    //     // <BoxCustom>
    //     //     <TypographyCustom
    //     //         variant={"h5"}
    //     //         align={"center"}
    //     //         sx={{ marginBottom: 2 }}
    //     //     >
    //     //         {type === 'sleep' && "Registro de Sono"}
    //     //         {type === 'feeding' && "Registro de Alimentação"}
    //     //         {type === 'diaper' && "Registro de Troca de Fralda"}
    //     //     </TypographyCustom>

    //     //     <Box sx={{
    //     //         display: "flex",
    //     //         flexDirection: "column",
    //     //         gap: 2,
    //     //         maxWidth: "500px",
    //     //         margin: "0 auto"
    //     //     }}>
    //     //         <LocalizationProvider dateAdapter={AdapterDayjs}>
    //     //             {type === 'sleep' || type === 'feeding' ? (
    //     //                 <>
    //     //                     <DateTimePicker
    //     //                         label={type === 'sleep' ? "Data Início" : "Data Início da Alimentação"}
    //     //                         onChange={(newValue) => setStartDate(newValue)}
    //     //                         value={startDate || null}
    //     //                     />
    //     //                     <DateTimePicker
    //     //                         label={type === 'sleep' ? "Data Final" : "Data Final da Alimentação"}
    //     //                         onChange={(newValue) => setEndDate(newValue)}
    //     //                         value={endDate || null}
    //     //                     />
    //     //                 </>
    //     //             ) : null}

    //     //             {type === 'feeding' ? (
    //     //                 <TextFieldCustom
    //     //                     label={"O que comeu"}
    //     //                     value={food}
    //     //                     onChange={(e) => setFood(e.target.value)}
    //     //                 />
    //     //             ) : null}

    //     //             {type === 'sleep' || type === 'feeding' || type === 'diaper' ? (
    //     //                 <TextFieldCustom
    //     //                     label={"Observações"}
    //     //                     value={observation}
    //     //                     onChange={(e) => setObservation(e.target.value)}
    //     //                 />
    //     //             ) : null}

    //     //             {type === 'diaper' ? (
    //     //                 <>
    //     //                     <DateTimePicker
    //     //                         label={"Data de Troca"}
    //     //                         onChange={(newValue) => setStartDate(newValue)}
    //     //                         value={startDate || null}
    //     //                     />
    //     //                     <TextFieldCustom
    //     //                         label={"Observações"}
    //     //                         value={observation}
    //     //                         onChange={(e) => setObservation(e.target.value)}
    //     //                     />
    //     //                 </>
    //     //             ) : null}
    //     //         </LocalizationProvider>

    //     //         <ButtonCustom onClick={handleStorage}>Cadastrar</ButtonCustom>
    //     //     </Box>
    //     // </BoxCustom>
    //     <>

    //     </>
    // );
}

export default Form;
