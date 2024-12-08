import { createClient } from '@supabase/supabase-js';
import { createContext, useContext, useEffect, useState } from 'react';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("auth") || false);

    useEffect(() => {
        const session = supabase.auth.getSession();
        setUser(session.user);
        setLoading(false);

        const { data: authListener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user ?? null);
            }
        );

        return () => {
            if (authListener) {
                authListener.unsubscribe?.();
            }
        };
    }, []);

    useEffect(() => {
        localStorage.setItem("auth", isAuthenticated);
    }, [isAuthenticated])

    const signUp = async (email, password) => {
        try {
            const { user, error } = await supabase.auth.signUp({ email, password });
            if (error) throw error;
            return user;
        } catch (error) {
            console.error('Erro ao registrar:', error.message);
            throw error;
        }
    };
    
    const signIn = async (email, password) => {
        try {
            const { user, error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) throw error;
            return user;
        } catch (error) {
            console.error('Erro ao fazer login:', error.message);
            throw error;
        }
    };

    const signOut = async () => {
        try {
            setIsAuthenticated(false);
            await supabase.auth.signOut();
            setUser(null);
        } catch (error) {
            console.error('Erro ao sair:', error.message);
        }
    };

    const getIsAuthenticated = () => {
        const auth = localStorage.getItem("auth") || false;
        return auth === "true";
    }

    return (
        <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut, setIsAuthenticated, getIsAuthenticated, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
