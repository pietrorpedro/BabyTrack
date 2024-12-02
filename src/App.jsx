import './App.scss';
import AppRouter from './AppRouter';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { StorageProvider } from './contexts/StorageContext';
import "./i18next";

function App() {
    return (
        <StorageProvider>
            <LanguageProvider>
                    <AuthProvider>
                        <AppRouter/>
                    </AuthProvider>
            </LanguageProvider>
        </StorageProvider>
    )
}

export default App
