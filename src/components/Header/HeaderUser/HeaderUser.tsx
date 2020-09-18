import React from 'react';

import Avatar from '../../Avatar/Avatar';

import LionIMG from '../../../img/lion-avatar.png';
import { ReactComponent as ArrowSVG } from '../../../img/arrow.svg';

const HeaderUser = () => {
    const user = {
        fullname: 'Назар Саалиев',
        userRole: 'Frontend Разработчик'
    }

    return (
        <div className='header__user'>
            <div className='header__user__info'>
                <p>{ user.fullname }</p>

                <span>{ user.userRole }</span>
            </div>

            <div className='header__user__img'>
                <Avatar imgUrl={ LionIMG } size={36} />
            </div>

            <div className='header__user__arrow'>
                <ArrowSVG />
            </div>
        </div>
    )
}

export default HeaderUser;