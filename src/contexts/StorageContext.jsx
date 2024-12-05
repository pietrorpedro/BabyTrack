import { createClient } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const StorageContext = createContext();
export const useStorageContext = () => {
    return useContext(StorageContext);
}

export const StorageProvider = ({ children }) => {

    // supabaseeee
    const updateData = async (table, id, data) => {
        try {
            const { error } = await supabase
                .from(table)
                .update(data)
                .eq('id', id);
            if (error) throw error;
            console.log(`Dados atualizados ${table} => `, data);
        } catch (error) {
            console.log(`Erro ao atualizar ${table} => `, error.message);
        }
    };

    // save
    const insertData = async (table, data) => {
        try {
            const { error } = await supabase.from(table).insert(data);
            if (error) throw error;
            console.log(`Dados inseridos ${table} => `, data);
        } catch (error) {
            console.log(`Erro ao inserir ${table} => `, error.message);
        }
    };

    const saveSleepData = async (data) => {
        await insertData("sleep", data);
    };

    const saveDiaperData = async (data) => {
        await insertData("diaper", data);
    };

    const saveEatData = async (data) => {
        await insertData("eat", data);
    };

    // get
    const getSleepData = async () => {
        try {
            const { data, error } = await supabase.from("sleep").select("*");
            if (error) throw error;
            return data;
        } catch (error) {
            console.error("Erro ao recuperar dados de sleep:", error.message);
        }
    };

    const getDiaperData = async () => {
        try {
            const { data, error } = await supabase.from("diaper").select("*");
            if (error) throw error;
            return data;
        } catch (error) {
            console.error("Erro ao recuperar dados de diaper:", error.message);
        }
    };

    const getEatData = async () => {
        try {
            const { data, error } = await supabase.from("eat").select("*");
            if (error) throw error;
            return data;
        } catch (error) {
            console.error("Erro ao recuperar dados de eat:", error.message);
        }
    };

    const updateSleepData = async (id, data) => {
        await updateData("sleep", id, data);
    };
    
    const updateDiaperData = async (id, data) => {
        await updateData("diaper", id, data);
    };
    
    const updateEatData = async (id, data) => {
        await updateData("eat", id, data);
    };

    const deleteData = async (table, id) => {
        try {
            const { error } = await supabase
                .from(table)
                .delete()
                .eq('id', id);
            if (error) throw error;
            console.log(`Dados deletados ${table} => `, id);
        } catch (error) {
            console.log(`Erro ao deletar ${table} => `, error.message);
        }
    };
    
    const deleteSleepData = async (id) => {
        await deleteData("sleep", id);
    };
    
    const deleteDiaperData = async (id) => {
        await deleteData("diaper", id);
    };
    
    const deleteEatData = async (id) => {
        await deleteData("eat", id);
    };

    // mudar bebe local

    // dados iniciais pra mudar nas configs
    const [babyData, setBabyData] = useState({
        name: "Fulano",
        weight: "3.80",
        length: "52",
    })

    const updateBabyName = (name) => {
        setBabyData((prev) => ({...prev, name}));
    }

    const updateBabyWeight = (weight) => {
        setBabyData((prev) => ({...prev, weight}));
    }

    const updateBabyLength = (length) => {
        setBabyData((prev) => ({...prev, length}));
    }

    const getBabyData = () => {
        return babyData;
    }

    return (
        <StorageContext.Provider value={{
            saveSleepData,
            saveDiaperData,
            saveEatData,
            updateSleepData,
            updateDiaperData,
            updateEatData,
            getSleepData,
            getDiaperData,
            getEatData,
            deleteSleepData,
            deleteDiaperData,
            deleteEatData,
            getBabyData,
            updateBabyLength,
            updateBabyName,
            updateBabyWeight,
        }}>
            {children}
        </StorageContext.Provider>
    )
}
