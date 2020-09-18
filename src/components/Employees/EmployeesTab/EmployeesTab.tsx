import React, { useState, useEffect } from 'react';

import EmployeesCategories from '../EmployeesCategories/EmployeesCategories';
import EmployeesList from '../EmployeesList/EmployeesList';

interface EmployeesTabPaneProps {
    dayName: string
    day?: number | string
    month?: string
    selectPane: () => void
    isSelected: boolean
}

const EmployeesTabPane: React.FC<EmployeesTabPaneProps> = ({ dayName, selectPane, isSelected, day, month }) => {
    let classNames = 'wrapper__employees__tab-pane';
    let paneText = dayName;

    if(day && month) paneText += `, ${day} ${month.substring(0, 3)}`;

    if(isSelected) classNames += ' selected';
    
    return (
        <div className={ classNames } onClick={() => selectPane()}>
            <span>
                { paneText }
            </span>
        </div>
    )
}

const EmployeesTab: React.FC<any> = ({ panes, defaultPane, categories, users }) => {
    const [ selectedPane, setSelectedPane ] = useState<number | null>(null);

    useEffect(() => {
        if(defaultPane || defaultPane === 0) {
            setSelectedPane(defaultPane)
        }
    }, [setSelectedPane, defaultPane])

    const selectPane = (index: number) => setSelectedPane(index);

    return (
        <div className='wrapper__employees__tab-table'>
            <div className='wrapper__employees__tab-panes'>
                {
                    panes.map((pane: any, index: number) => {
                        let isSelected: boolean = selectedPane === index;

                        return (
                            <EmployeesTabPane 
                                key={index}
                                dayName={pane.dayName} 
                                day={pane.day} 
                                month={pane.month}
                                selectPane={() => selectPane(index)}
                                isSelected={isSelected}
                            />
                        )
                    })
                }
            </div>

            <EmployeesCategories
                data={categories}
            />

            <EmployeesList users={users} />
        </div>
    )
}

export default EmployeesTab;