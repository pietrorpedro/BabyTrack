import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
    });

    const { t } = useTranslation();

    function handleSignUp() {
        if (validate()) {
            alert(t("sucesso"));
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
            >
                {t('sign_up')}
            </TypographyCustom>
            <BoxCustom sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 400,
                margin: "20px auto"
            }}>
                <TextFieldCustom
                    label={t('baby_name')}
                    type={"text"}
                    sx={{ mt: 2 }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={errors.username}
                    helperText={errors.username ? t("invalid_baby_name") : ""}
                />
                <TextFieldCustom
                    label={t('responsible_email')}
                    type={"email"}
                    sx={{ mt: 2 }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                    helperText={errors.email ? t("invalid_email") : ""}
                />
                <TextFieldCustom
                    label={t('password')}
                    type={"password"}
                    sx={{ mt: 2 }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={errors.password}
                    helperText={errors.password ? t("invalid_password") : ""}
                />
                <TextFieldCustom
                    label={t('confirm_password')}
                    type={"password"}
                    sx={{ mt: 2 }}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={errors.confirmPassword}
                    helperText={errors.confirmPassword ? t("password_mismatch") : ""}
                />
                <ButtonCustom
                    sx={{ mt: 2 }}
                    onClick={handleSignUp}
                >
                    {t('create_account_button')}
                </ButtonCustom>
            </BoxCustom>
        </BoxCustom>
    )
}

export default SignUp;
