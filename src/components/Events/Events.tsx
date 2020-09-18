import React, { useState, useEffect } from 'react';

import Block, { NoItems } from '../Block/Block';
import NewEvents from './NewEvents/NewEvents';
import OldEvents from './OldEvents/OldEvents';

import './Events.scss';

const Events: React.FC<any> = ({ data }) => {
    const [ newEvents, setNewEvents ] = useState<any>([]);
    const [ oldEvents, setOldEvents ] = useState<any>([]);

    useEffect(() => {
        setNewEvents(data.new);
        setOldEvents(data.old);
    }, [ newEvents, oldEvents, data ])

    return (
        <Block 
            title={'Водопад событий'} 
            styles={{ gridArea: 'eve' }}
            maxPages={data.length}
            withoutBottomLink={true}
            bodyStyles={{ minHeight: '660px' }}
        >
            {
                newEvents.length ?
                <NewEvents data={newEvents} title={'Новое'} />
                :
                <NoItems />
            }

            {
                oldEvents.length ?
                <OldEvents data={oldEvents} title={'Вчера'} />
                :
                null
            }
        </Block>
    )
}

export default Events;