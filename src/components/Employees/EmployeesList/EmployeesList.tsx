import React, { useState, useEffect }  from 'react';

import SideArrow from '../../SideArrow/SideArrow';
import NoEmployees from '../NoEmployees/NoEmployees';
import EmployeesListItem, { EmployeesListItemProps } from './EmployeesListItem/EmployeesListItem';

import { useEmployees } from '../../../context/EmployeesContext';

interface EmployeesListProps {
    users: EmployeesListItemProps[]
}

const EmployeesList: React.FC<EmployeesListProps> = ({ users }) => {
    const { categories, selectedCategory } = useEmployees();
    const [ data, setData ] = useState<EmployeesListItemProps[]>([]);

    useEffect(() => {
        const newData: EmployeesListItemProps[] = [];

        users.forEach((user: EmployeesListItemProps) => {
            let type = user.type.toLowerCase();
            const color = categories[type];

            user.color = color;

            if(selectedCategory === Object.keys(categories)[0] || selectedCategory === ''){
                newData.push(user);
            }
            else if(selectedCategory === type) {
                newData.push(user);
            }
        })

        setData(newData);

        return () => {}
    }, [users, categories, selectedCategory])

    return (
        <div className='wrapper__employees__list'>
            <SideArrow isLeft={true} disabled={true} />

            <div className='wrapper__employees__list__items'>
                {
                    data.length ?
                    data.map((user: EmployeesListItemProps, index: number) => {
                        return <EmployeesListItem key={index} { ...user } />
                    })
                    :
                    <NoEmployees />
                }
            </div>

            <SideArrow isLeft={false} disabled={true} />
        </div>
    )
}

export default EmployeesList;