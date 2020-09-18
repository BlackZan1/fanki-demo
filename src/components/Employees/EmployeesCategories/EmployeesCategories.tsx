import React, { useEffect, memo, useState } from 'react';

import { useEmployees } from '../../../context/EmployeesContext';

interface EmployeesCategory {
    name: string
    count: number
    color: string
}

interface EmployeesCategoriesProps {
    data: EmployeesCategory[]
}

const EmployeesCategory: React.FC<EmployeesCategory> = ({ name, count, color }) => {
    const [ isEnter, setIsEnter ] = useState<boolean>(false);
    const [ isSelected, setIsSelected ] = useState<boolean>(false);
    const { selectCategory, selectedCategory } = useEmployees();
    
    const categoryName = name.toLowerCase();

    const onMouseEnterHandler = () => setIsEnter(true);
    const onMouseLeaveHandler = () => setIsEnter(false);

    useEffect(() => {
        if(selectedCategory === categoryName) setIsSelected(true);
        else setIsSelected(false);

        return () => {}
    }, [isSelected, selectedCategory, categoryName])

    return (
        <div 
            className='wrapper__employees__categories__item' 
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
            onClick={() => selectCategory(categoryName)}
        >
            <div 
                style={{ 
                    background: (isEnter || isSelected) ? color : '', 
                    opacity: (isEnter || isSelected) ? 0.2 : 1 
                }} 
                className='wrapper__employees__categories__item__bg' 
            />

            <div className='wrapper__employees__categories__item__bar' style={{ background: color }} />

            <p>{ name }</p>

            <span>{ count ? count + ' сотрудника' : 'Нет' }</span>
        </div>
    )
}

const EmployeesCategories: React.FC<EmployeesCategoriesProps> = memo(({ data }) => {
    const { categories, createCategories } = useEmployees();

    useEffect(() => {
        if(!Object.values(categories).length) {
            let categories: any = {};

            data.forEach((item) => {
                let name = item.name.toLowerCase();

                categories[name] = item.color;
            })

            createCategories(categories);
        }
    })

    return (
        <div className='wrapper__employees__categories'>
            {
                data.map((category: EmployeesCategory, index: number) => {
                    return (
                        <EmployeesCategory 
                            key={index}
                            name={category.name} 
                            count={category.count} 
                            color={category.color} 
                        />
                    )
                })
            }
        </div>
    )
})

export default EmployeesCategories;