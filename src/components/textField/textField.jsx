import { TextField } from "@mui/material";

export default function TextFieldCustom({ label, value, onChange, placeholder, type, variant, fullWidth, error, helperText, sx }) {
    return <TextField
        sx={sx}
        label={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        fullWidth={fullWidth}
        variant={variant}
        error={error}
        helperText={helperText}
    />
}