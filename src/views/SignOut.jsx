import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function SignOut() {
    const { signOut, setIsAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        async function handleSignOut() {
            try {
                setIsAuthenticated(false);
                await signOut();
                navigate('/signin');
            } catch (error) {
                console.error('Erro ao fazer logout:', error.message);
                alert('Erro ao sair. Tente novamente.');
            }
        }

        handleSignOut();
    }, [signOut, navigate]);

    return null;
}

export default SignOut;
