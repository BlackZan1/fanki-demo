import Avatar from "../../Avatar/Avatar";

import React from 'react';

const NewEventItem: React.FC<any> = ({ imgUrl, name, text, date, type }) => {
    let classNames = 'events__new__item';

    if(type === 'company') classNames += ' marked';

    return (
        <div className={ classNames }>
            <div className='events__new__item__img'>
                <Avatar imgUrl={imgUrl} size={36} />
            </div>

            <div className='events__new__item__info'>
                <div>
                    <p>{ name }</p>

                    <span>{ date }</span>
                </div>

                <p>{ text }</p>
            </div>
        </div>
    )
}

const NewEvents: React.FC<any> = ({ data, title }) => {
    return (
        <div className='events__new'>
            <div className='events__new__title'>
                <p>{ title }</p>
            </div>

            {
                data.map((item: any, index: number) => {
                    return (
                        <NewEventItem key={index} { ...item } />
                    )                    
                })
            } 
        </div>
    )
}

export default NewEvents;