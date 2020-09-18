import React, { useState } from 'react';

import Block, { NoItems } from '../Block/Block';

import './Calendar.scss';

const CalendarBlock: React.FC<any> = ({ month, day, styles}) => {
    const newMonth = month.toUpperCase().substring(0, 3); 

    return (
        <div className='calendar__block' style={styles}>
            <div className='calendar__block__top'>
                { newMonth }
            </div>

            <div className='calendar__block__bottom'>
                <p>{ day }</p>
            </div>
        </div>
    )
}

const BirtdayEvent: React.FC<any> = ({ month, day, dayName, employees }) => {
    return (
        <div className='calendar__item'>
            <div className='calendar__item__cover'>
               <CalendarBlock day={day} month={month} />
            </div>

            <span>{ dayName }</span>

            <p>
                День рождения у сотрудников:

                {
                    employees.map((item: string, index: number) => {
                        const isLast = index + 1 === employees.length;

                        return <span key={index}> { item }{ isLast ? null : ', ' }</span>
                    })
                }
            </p>
        </div>
    )
}

const Event: React.FC<any> = ({ month, day, period, description, about }) => {
    return (
        <div className='calendar__item'>
            <CalendarBlock day={day} month={month} styles={{ marginTop: '-15px' }} />

            <span style={{ marginTop: '15px' }}>{ period } | { about }</span>

            <p style={{ marginTop: '15px' }}>{ description }</p>
        </div>
    )
}

const Calendar: React.FC<any> = ({ data }) => {
    const [ page, setPage ] = useState<number>(0);

    const changePage = (index: number) => setPage(index);

    return (
        <Block 
            title={'Календарь'}
            styles={{ gridArea: 'cal' }}
            page={page}
            maxPages={data.length}
            changePage={changePage}
        >
            {
                data.length ?
                (
                    data[page].type === 'birthday' ?
                    <BirtdayEvent { ...data[page] } />
                    :
                    <Event { ...data[page] } />       
                )
                :
                <NoItems />
            }
        </Block>
    )
}

export default Calendar;