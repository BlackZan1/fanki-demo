import React from 'react';

import EmployeesTab from './EmployeesTab/EmployeesTab';

import './Employees.scss';

interface EmployeesProps {
    headTitle: string
    panes: any
    categories: any
    users: any
}

const Employees: React.FC<EmployeesProps> = ({ headTitle, ...props }) => {
    return (
        <div className='wrapper__employees'>
            <p className='wrapper__employees__head-title'>
                { headTitle }
            </p>

            <EmployeesTab
                defaultPane={0}
                { ...props }
            />
        </div>
    )
}

export default Employees;