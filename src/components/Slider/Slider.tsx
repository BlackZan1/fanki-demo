import React from 'react';

import './Slider.scss';

const Slider: React.FC<any> = ({ count, index, changePage }) => {
    const emptyArray = [];

    for(let i = 0; i < count; i++) {
        emptyArray.push({});
    }

    return (
        <div className='block__slider'>
            {
                emptyArray.map((_: any, i: number) => {
                    const isActive = index === i;

                    return (
                        <div 
                            onClick={() => changePage(i)} 
                            key={Math.random().toString(32)} 
                            className={`block__slider__item ${isActive ? 'active' : ''}`} 
                        />
                    )
                })
            }
        </div>
    )
}

export default Slider;