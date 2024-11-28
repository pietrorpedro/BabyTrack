import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function DateTimePickerCustom({label}) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker label={label}/>
        </LocalizationProvider>
    )
}