import React, { useState } from 'react';

import Block, { NoItems } from '../Block/Block';

import './Requests.scss';

const UnrecievedItem: React.FC<any> = ({ solution, employees }) => {
    return (
        <div className='req__item unrec'>
            <p>
                У вас 
                <span className='req__item__solution'>{ solution }</span>

                <br />

                от сотрудников:

                {
                    employees.map((item: string, index: number) => {
                        const isLast = index + 1 === employees.length;

                        return <span key={index}> { item }{ isLast ? null : ',' } </span>
                    })
                }
            </p>
        </div>
    )
}

const RecievedItem: React.FC<any> = ({ solution, period }) => {
    return (
        <div className='req__item rec'>
            <p>
                Ваш запрос
            </p>

            <span className='req__item__period'>
                { period }
            </span>

            <span className='req__item__solution'>{ solution }</span>
        </div>
    )
}

const Requests: React.FC<any> = ({ data }) => {
    const [ page, setPage ] = useState<number>(0);

    const changePage = (index: number) => setPage(index);

    return (
        <Block 
            title={'Запросы'} 
            styles={{ gridArea: 'req' }}
            page={page}
            maxPages={data.length}
            changePage={changePage}
        >
            {
                data.length ?
                (
                    data[page].type === 'received' ?
                    <RecievedItem 
                        solution={data[page].solution} 
                        period={data[page].period} 
                    />
                    :
                    <UnrecievedItem 
                        solution={data[page].solution} 
                        employees={data[page].employees} 
                    />            
                )
                :
                <NoItems />
            }
        </Block>
    )
}

export default Requests;