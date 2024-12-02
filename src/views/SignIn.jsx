import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
            >
                {t('sign_in')}
            </TypographyCustom>
            <BoxCustom sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 400,
                margin: "20px auto"
            }}>
                <TextFieldCustom
                    label={t('email_label')}
                    type={"email"}
                    sx={{ mt: 2 }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                    helperText={errors.email ? t("invalid_email") : ""}
                />
                <TextFieldCustom
                    label={t('password_label')}
                    type={"password"}
                    sx={{ mt: 2 }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={errors.password}
                    helperText={errors.password ? t("invalid_password") : ""}
                />
                <ButtonCustom
                    sx={{ mt: 2 }}
                    onClick={handleSignUp}
                >
                    {t('sign_in_button')}
                </ButtonCustom>
            </BoxCustom>
        </BoxCustom>
    )
}

export default SignIn;
