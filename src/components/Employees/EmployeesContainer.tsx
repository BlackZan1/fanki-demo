import React from 'react';
import { useSelector } from 'react-redux';

import { EmployeesProvider } from '../../context/EmployeesContext';
import Employees from './Employees';

interface EmployeesContainerProps {
    headTitle: string
}

const EmployeesContainer: React.FC<EmployeesContainerProps> = ({ headTitle }) => {
    const { panes, users, categories } = useSelector((state: any) => state.employees);
    
    return (
        <EmployeesProvider>
            <Employees headTitle={headTitle} panes={panes} users={users} categories={categories} />
        </EmployeesProvider>
    )
}

export default EmployeesContainer;
