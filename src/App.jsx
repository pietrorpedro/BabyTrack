import './App.scss';
import AppRouter from './AppRouter';
import { LanguageProvider } from './contexts/LanguageContext';
import { StorageProvider } from './contexts/StorageContext';
import "./i18next";

function App() {
    return (
        <StorageProvider>
            <LanguageProvider>
                <AppRouter/>
            </LanguageProvider>
        </StorageProvider>
    )
}

export default App
