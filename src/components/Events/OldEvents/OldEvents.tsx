import React from 'react';

import SmileSVG from '../../../img/smile.svg';
import Icon from '../../Icon/Icon';

const OldEventsItem: React.FC<any> = (
    { thumb, date, title, description, comments, emojies }
) => {
    const onClickHandler = (ev: React.MouseEvent<HTMLDivElement>) => {
        const isSelected = ev.currentTarget.classList.contains('selected');

        if(!isSelected) {
            ev.currentTarget.classList.add('selected');
        }
        else ev.currentTarget.classList.remove('selected');
    }

    return (
        <div className='events__list__item'>
            <div className='events__list__item__thumb'>
               <img src={thumb} alt='Loading...' />
            </div>

            <div className='events__list__item__info'>
                <span>{ date }</span>

                <p>{ title }</p>

                <span style={{ margin: '5px 0 10px' }}>{ description }</span>
            </div>

            <div className='events__list__item__bottom'>
                <div className='events__list__item__bottom__emojies'> 
                    {
                        emojies.map((item: any, index: number) => {
                            return <div key={index} onClick={onClickHandler} className='events__list__item__bottom__btn'>
                                <img src={item.emoji} alt='Loading...' />

                                <span>{ item.count }</span>
                            </div>
                        })
                    }

                    <div className='events__list__item__bottom__btn'>
                        <img src={SmileSVG} alt='Loading...' />
                    </div>
                </div>

                <div className='events__list__item__bottom__btn'>
                    <Icon iconType='chats' /> <span>{ comments } комментариев</span>
                </div>
            </div>
        </div>
    )
}

const OldEvents: React.FC<any> = ({ title, data }) => {
    return (
        <div className='events__list'>
            <div className='events__list__title'>
                <p>{ title }</p>
            </div>

            {
                data.map((item: any, index: number) => {
                    return <OldEventsItem key={index} { ...item } />
                })
            }
        </div>
    )
}

export default OldEvents;