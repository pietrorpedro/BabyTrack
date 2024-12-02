import { useTranslation } from 'react-i18next';
import BoxCustom from './../components/box/box';
import ButtonCustom from './../components/button/button';
import TypographyCustom from './../components/typography/typography';
import { useLanguageContext } from './../contexts/LanguageContext';

function Settings() {
    const { t } = useTranslation();
    const { changeLanguage } = useLanguageContext();

    return (
        <BoxCustom>
            <TypographyCustom variant="h3" align="center">
                {t('settings')}
            </TypographyCustom>

            <BoxCustom sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400, margin: '20px auto' }}>
                <ButtonCustom sx={{ mt: 2 }} onClick={() => changeLanguage('pt')}>
                    {t('portuguese')}
                </ButtonCustom>
                <ButtonCustom sx={{ mt: 2 }} onClick={() => changeLanguage('en')}>
                    {t('english')}
                </ButtonCustom>
                <ButtonCustom sx={{ mt: 2 }} onClick={() => changeLanguage('es')}>
                    {t('spanish')}
                </ButtonCustom>
            </BoxCustom>
        </BoxCustom>
    );
}

export default Settings;
