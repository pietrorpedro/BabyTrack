import { useState } from 'react';
import BoxCustom from './../components/box/box';
import ButtonCustom from './../components/button/button';
import TextFieldCustom from './../components/textField/textField';
import TypographyCustom from './../components/typography/typography';

function SignUp() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({
        username: false,
        email: false,
        password: false,
        confirmPassword: false
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

        if (username.trim().length < 3) {
            errorsObj.username = true;
            valid = false;
        }
        if (!emailRegex.test(email.trim())) {
            errorsObj.email = true;
            valid = false;
        }
        if (!passwordRegex.test(password.trim())) {
            errorsObj.password = true;
            valid = false;
        }
        if (confirmPassword !== password) {
            errorsObj.confirmPassword = true;
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
            >Criar Conta</TypographyCustom>
            <BoxCustom sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 400,
                margin: "20px auto"

            }}>
                <TextFieldCustom
                    label={"Nome do Bebê"}
                    type={"text"}
                    sx={{ mt: 2 }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={errors.username}
                    helperText={errors.username ? "Nome do bebê inválido" : ""}
                />
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
                <TextFieldCustom
                    label={"Confirmar Senha"}
                    type={"password"}
                    sx={{ mt: 2 }}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={errors.confirmPassword}
                    helperText={errors.confirmPassword ? "As senhas não são iguais" : ""}
                />
                <ButtonCustom
                    sx={{ mt: 2 }}
                    onClick={handleSignUp}
                >
                    Criar Conta
                </ButtonCustom>
            </BoxCustom>
        </BoxCustom>
    )
}

export default SignUp
