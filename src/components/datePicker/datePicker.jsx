import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function DatePickerCustom({label}) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label={label}/>
        </LocalizationProvider>
    )
}