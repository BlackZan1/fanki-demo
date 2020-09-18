import React from 'react';
import { useSelector } from 'react-redux';

import Events from './Events';

const EventsContainer: React.FC = () => {
    const { data } = useSelector((state: any) => state.events);

    return (
        <Events data={data} />
    )
}

export default EventsContainer;