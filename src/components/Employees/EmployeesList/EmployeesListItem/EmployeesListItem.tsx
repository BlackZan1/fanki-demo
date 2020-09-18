import React from 'react';

import Avatar from '../../../Avatar/Avatar';

export interface EmployeesListItemProps {
    userImg: string
    fullname: string
    role: string
    period: string
    type: any
    color: string
}

const EmployeesListItem: React.FC<EmployeesListItemProps> = ({ userImg, color, fullname, role, period, type }) => {
    return (
        <div className='wrapper__employees__list__item'>
            <div className='wrapper__employees__list__item__info'>
                <Avatar imgUrl={userImg} size={24} />

                <div>
                    <p>{ fullname }</p>

                    <span>{ role }</span>
                </div>
            </div>
            
            <div className='wrapper__employees__list__item__period' >
                <div style={{ background: color }} />
                
                <span style={{ color: color }}>{ period }</span>
            </div>
        </div>
    )
}

export default EmployeesListItem;