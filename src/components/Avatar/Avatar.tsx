import React from 'react';

import { useColorThief } from '../../hooks/colorThief';

import './Avatar.scss';

interface AvatarProps {
    imgUrl: string
    size: number
}

const Avatar: React.FC<AvatarProps> = ({ imgUrl, size }) => {
    const { dominant } = useColorThief(imgUrl);
    
    return (
        <div className='avatar' style={{ background: dominant, width: size, height: size }}>
            <img src={imgUrl} alt='Loading...' className='avatar__img' />
        </div>
    )
}

export default Avatar;