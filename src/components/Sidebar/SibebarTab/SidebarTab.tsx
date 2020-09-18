import React, { useState, memo } from 'react';

import Icon, { IconType } from '../../Icon/Icon';

export interface SidebarTabTableData {
    title: string
    icon: IconType
    link?: string
}

interface SidebarTabProps extends SidebarTabTableData {
    selectTab: () => void
    selected: boolean
}

interface SidebarTabTableProps {
    title: string
    data: SidebarTabTableData[]
    isValid: boolean
    setTableIndex: (i: number) => void
    index: number
}

const SidebarTabItem: React.FC<SidebarTabProps> = memo(({ title, icon, selectTab, selected }) => {
    let itemClassNames: string = 'sidebar__tab-table__item';
    let iconClassNames: string = 'sidebar__tab-table__item__icon';
    let isLarge = false;

    if(selected) itemClassNames += ' selected';
    if(icon === 'logo') iconClassNames += ' logo';

    if(title.length > 14) isLarge = true;

    return (
        <div 
            className={ itemClassNames } 
            style={{ 
                width: isLarge ? '' : '170px', 
                minWidth: isLarge ? '210px' : '' 
            }} 
            onClick={() => selectTab()}
        >
            <div className={ iconClassNames }>
                <Icon iconType={ icon } />
            </div>

            <p style={{ marginRight: isLarge ? '15px' : '' }}>{ title }</p>
            
            {
                selected && (
                    <div className='sidebar__tab-table__item__btn' title='Question?'>
                        <Icon iconType={ 'question' } />
                    </div>
                )
            }
        </div>
    )
})

export const SidebarTabTable: React.FC<SidebarTabTableProps> = ({ title, data, index, isValid, setTableIndex }) => {
    const [ selectedTab, setSelectedTab ] = useState<number | null>(null);
    const [ isOpen, setIsOpen ] = useState<boolean>(true);
    
    return (
        <div className='sidebar__tab-table'>
            <div className='sidebar__tab-table__title' onClick={() => setIsOpen(!isOpen)}>
                { title } <div className={isOpen ? 'down' : ''}> <Icon iconType={'arrow'} /> </div>
            </div>

            <div 
                className='sidebar__tab-table__list' 
                onClick={() => setTableIndex(index)}
                style={{ display: isOpen ? 'block' : 'none' }}
            >
                {
                    data.map((item: SidebarTabTableData, index: number) => {
                        let selected: boolean = (selectedTab === index) && isValid;

                        return (
                            <SidebarTabItem 
                                selectTab={() => setSelectedTab(index)}
                                selected={selected}
                                title={item.title} 
                                icon={item.icon} 
                                key={index} 
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}