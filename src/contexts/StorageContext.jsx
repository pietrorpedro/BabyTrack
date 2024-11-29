import { createContext, useContext, useEffect, useState } from "react";

const StorageContext = createContext();

export const useStorageContext = () => {
    return useContext(StorageContext);
}

export const StorageProvider = ({ children }) => {
    const [storageData, setStorageData] = useState({
        sleep: [],
        feeding: [],
        diaper: [],
    });

    const saveToLocalStorage = (type, data) => {
        if (typeof window !== "undefined") {
            localStorage.setItem(type, JSON.stringify(data));
        }
    };

    const loadFromLocalStorage = (type) => {
        if (typeof window !== "undefined") {
            const data = localStorage.getItem(type);
            return data ? JSON.parse(data) : [];
        }
        return [];
    }

    useEffect(() => {
        const types = ["sleep", "feeding", "diaper"];
        const initialData = {};

        types.forEach((type) => {
            initialData[type] = loadFromLocalStorage(type);
        });

        setStorageData(initialData);
    }, []);

    const updateData = (type, data) => {
        setStorageData((prevData) => {
            const updatedData = {
                ...prevData,
                [type]: [...prevData[type], data]
            };
            saveToLocalStorage(type, updatedData[type]);
            return updatedData;
        });
    };

    return (
        <StorageContext.Provider value={{ storageData, updateData }}>
            {children}
        </StorageContext.Provider>
    );
}
