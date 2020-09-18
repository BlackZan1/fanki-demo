import React from 'react';
import { useSelector } from 'react-redux';

import Base from './Base';

const BaseContainer: React.FC = () => {
    const { data } = useSelector((state: any) => state.base);
    
    return (
        <Base data={data} />
    )
}

export default BaseContainer;

