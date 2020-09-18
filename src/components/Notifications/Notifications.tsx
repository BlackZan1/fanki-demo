import React from 'react';

import Block, { NoItems } from '../Block/Block';
import Avatar from '../Avatar/Avatar';

import './Notifications.scss';

const NotificationItem: React.FC<any> = ({ eventName, fullname, date, text, userImg }) => {
    return (
        <div className='notif__item'>
            <div className='notif__item__img'>
                <Avatar size={24} imgUrl={userImg} />
            </div>

            <div className='notif__item__info'>
                <div>
                    <p>{ fullname } </p>

                    <span>{ date }</span>
                </div>

                <span>{ eventName }</span>

                <p>{ text }</p>
            </div>
        </div>
    )
}

const Notifications: React.FC<any> = ({ data }) => {
    return (
        <Block 
            title={'Уведомления'} 
            styles={{ gridArea: 'not' }}
            maxPages={data.length}
            bodyStyles={{ minHeight: '660px' }}
        >
            {
                data.length ?
                data.map((item: any, index: number) => {
                    return (
                        <NotificationItem key={index} {...item} />
                    )
                })
                :
                <NoItems />
            }
        </Block>
    )
}

export default Notifications;