import React, { createContext, useContext, useState } from 'react';

const EmployeesContext = createContext<any>({
    categories: {},
    selectedCategory: '',
    createCategories: (categories: any) => {},
    selectCategory: (category: string) => {}
})

export const useEmployees = () => {
    return useContext(EmployeesContext);
}

export const EmployeesProvider: React.FC = ({ children }) => {
    const [ categories, setCategories ] = useState<any>({});
    const [ selectedCategory, setSelectedCategory ] = useState<any>('');

    const createCategories = (categories: any) => setCategories(categories);
    const selectCategory = (category: string) => setSelectedCategory(category);

    return (
        <EmployeesContext.Provider value={{ categories, createCategories, selectCategory, selectedCategory }}>
            { children }
        </EmployeesContext.Provider>
    )
}