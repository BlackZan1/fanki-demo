import React from 'react';

import EmployeesContainer from '../Employees/EmployeesContainer';
import RequestsContainer from '../Requests/RequestsContainer';
import CalendarContainer from '../Calendar/CalendarContainer';
import NotificationsContainer from '../Notifications/NotificationsContainer';
import BaseContainer from '../Base/BaseContainer';
import EventsContainer from '../Events/EventsContainer';

import './Wrapper.scss';

const Wrapper: React.FC = () => {
    return (
        <div className='wrapper'>
            <EmployeesContainer headTitle={'Отсутствующие сотрудники'} />

            <div className='wrapper__blocks'>
                <RequestsContainer />

                <CalendarContainer />

                <BaseContainer />

                <EventsContainer />

                <NotificationsContainer /> 
            </div>
        </div>
    )
}

export default Wrapper;