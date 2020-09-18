import React, { useState, useEffect } from 'react';

import { SidebarTabTable, SidebarTabTableData } from './SibebarTab/SidebarTab';

import './Sidebar.scss';

const Sidebar: React.FC = () => {
    const [ tableIndex, setTableIndex ] = useState<number | null>(null);
    const [ isFixed, setIsFixed ] = useState<boolean>(false);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const y = window.scrollY;

            if(y >= 56) {
                setIsFixed(true);
            }
            else setIsFixed(false);
        })
    })

    const companyData: SidebarTabTableData[] = [ 
        {icon: 'logo', title: 'Главная', link: '/'},
        {icon: 'requests', title: 'Запросы', link: '/requests'},
        {icon: 'calendar', title: 'Календарь', link: '/calendar'},
        {icon: 'base', title: 'База знаний', link: '/base'},
        {icon: 'news', title: 'Новости', link: '/news'},
        {icon: 'tasks', title: 'Задачи', link: '/tasks'},
        {icon: 'chats', title: 'Чаты', link: '/chats'}
    ]

    const adminData: SidebarTabTableData[] = [ 
        {icon: 'statistics', title: 'Статистика компании', link: '/statistics'},
        {icon: 'structure', title: 'Структура компании', link: '/structure'},
        {icon: 'employees', title: 'Сотрудники', link: '/employees'},
        {icon: 'base', title: 'База знаний', link: '/base'},
        {icon: 'news', title: 'Новости', link: '/news'},
        {icon: 'options', title: 'Настройки', link: '/options'},
        {icon: 'support', title: 'Поддержка', link: '/support'}
    ]

    return (
        <div className='sidebar'>
            <div 
                className='sidebar__fixed' 
                style={{ top: isFixed ? '-5px' : '0px', position: isFixed ? 'fixed' : 'initial' }}
            >
                <SidebarTabTable 
                    title={'Компания'} 
                    data={companyData} 
                    isValid={tableIndex === 0}
                    setTableIndex={setTableIndex}
                    index={0}
                />

                <SidebarTabTable 
                    title={'Администратор'} 
                    data={adminData} 
                    isValid={tableIndex === 1}
                    setTableIndex={setTableIndex}
                    index={1}
                />
            </div>
        </div>
    )
}

export default Sidebar;