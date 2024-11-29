import './App.scss'
import AppRouter from './AppRouter'
import { StorageProvider } from './contexts/StorageContext'

function App() {
    return (
        <StorageProvider>
            <AppRouter/>
        </StorageProvider>
    )
}

export default App
