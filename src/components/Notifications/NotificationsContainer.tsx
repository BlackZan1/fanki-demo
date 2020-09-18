import React from 'react';
import { useSelector } from 'react-redux';

import Notifications from './Notifications';

const NotificationsContainer: React.FC = () => {
    const { data } = useSelector((state: any) => state.notifications);
    
    return (
        <Notifications data={data} />
    )
}

export default NotificationsContainer;