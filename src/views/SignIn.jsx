import { useState } from 'react';
import BoxCustom from './../components/box/box';
import ButtonCustom from './../components/button/button';
import TextFieldCustom from './../components/textField/textField';
import TypographyCustom from './../components/typography/typography';

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    })

    function handleSignUp() {
        if (validate()) {
            alert("sucesso")
        }
    }

    function validate() {
        const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        const passwordRegex = /.{8,}/;

        let valid = true;
        let errorsObj = {
            username: false,
            email: false,
            password: false,
            confirmPassword: false
        };

        if (!emailRegex.test(email.trim())) {
            errorsObj.email = true;
            valid = false;
        }
        if (!passwordRegex.test(password.trim())) {
            errorsObj.password = true;
            valid = false;
        }

        setErrors(errorsObj);
        return valid;
    }

    return (
        <BoxCustom>
            <TypographyCustom
                variant={"h3"}
                align={"center"}
            >Entrar</TypographyCustom>
            <BoxCustom sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 400,
                margin: "20px auto"

            }}>
                <TextFieldCustom
                    label={"E-mail do responsável"}
                    type={"email"}
                    sx={{ mt: 2 }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                    helperText={errors.email ? "E-mail inválido" : ""}
                />
                <TextFieldCustom
                    label={"Senha"}
                    type={"password"}
                    sx={{ mt: 2 }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={errors.password}
                    helperText={errors.password ? "Senha inválida" : ""}
                />
                <ButtonCustom
                    sx={{ mt: 2 }}
                    onClick={handleSignUp}
                >
                    Entrar
                </ButtonCustom>
            </BoxCustom>
        </BoxCustom>
    )
}

export default SignIn
