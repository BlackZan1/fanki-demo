import React from 'react';
import { useSelector } from 'react-redux';

import Requests from './Requests';

const RequestsContainer: React.FC = () => {
    const { data } = useSelector((state: any) => state.requests);
    
    return (
        <Requests data={data} />
    )
}

export default RequestsContainer;