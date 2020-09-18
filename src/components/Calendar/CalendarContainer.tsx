import React from 'react';
import { useSelector } from 'react-redux';

import Calendar from './Calendar';

const CalendarContainer: React.FC = () => {
    const { data } = useSelector((state: any) => state.calendar);
    
    return (
        <Calendar data={data} />
    )
}

export default CalendarContainer;