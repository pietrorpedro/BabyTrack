import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useStorageContext } from '../contexts/StorageContext';
import BoxCustom from './../components/box/box';
import ButtonCustom from './../components/button/button';
import Header from './../components/header/header';
import TypographyCustom from './../components/typography/typography';
import { useLanguageContext } from './../contexts/LanguageContext';

import { useEffect } from 'react';

function Settings() {
    const { t } = useTranslation();
    const { getBabyData, updateBabyName, updateBabyWeight, updateBabyLength } = useStorageContext();
    const { changeLanguage } = useLanguageContext();
    const navigation = useNavigate()


    useEffect(() => {
        console.log(getBabyData())
    }, [])

    function changeName() {
        const name = window.prompt(t("new_name"), getBabyData().name);
        if (name) {
            updateBabyName(name)
        }
    }

    function changeWeight() {
        const weigth = window.prompt(t("new_weigth"), getBabyData().weigth);
        if(weigth) {
            updateBabyWeight(weigth)
        }
    }

    function changeLength() {
        const length = window.prompt(t("new_length"), getBabyData().length);
        if (length) {
            updateBabyLength(length)
        }
    }

    return (
        <BoxCustom>
            <Header title={t('settings')}/>
            <TypographyCustom variant="h3" align="center" sx={{marginBottom: 3, marginTop: 10}}>
                {t('settings')}
            </TypographyCustom>

            <TypographyCustom variant="h4" align="center">
                {t('language')}
            </TypographyCustom>
            <BoxCustom sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400, margin: '10px auto' }}>
                <ButtonCustom sx={{ mt: 2 }} onClick={() => changeLanguage('pt')}>
                    {t('portuguese')}
                </ButtonCustom>
                <ButtonCustom sx={{ mt: 2 }} onClick={() => changeLanguage('en')}>
                    {t('english')}
                </ButtonCustom>
                <ButtonCustom sx={{ mt: 2 }} onClick={() => changeLanguage('es')}>
                    {t('spanish')}
                </ButtonCustom>
                <ButtonCustom sx={{ mt: 2 }} onClick={() => navigation("/signout")}>
                    Logout
                </ButtonCustom>
            </BoxCustom>

            <TypographyCustom variant="h4" align="center">
                {t('update_baby')}
            </TypographyCustom>
            <BoxCustom sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400, margin: '10px auto' }}>
                <ButtonCustom sx={{ mt: 2 }} onClick={changeName}>
                    {t('change_name')}
                </ButtonCustom>
                <ButtonCustom sx={{ mt: 2 }} onClick={changeWeight}>
                    {t('change_weight')}
                </ButtonCustom>
                <ButtonCustom sx={{ mt: 2 }} onClick={changeLength}>
                    {t('change_length')}
                </ButtonCustom>
            </BoxCustom>
        </BoxCustom>
    );
}

export default Settings;
