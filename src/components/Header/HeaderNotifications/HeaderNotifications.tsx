import React from 'react';

// import media
import { ReactComponent as Bell } from '../../../img/bell.svg';

const HeaderNotifications: React.FC = () => {
    return (
        <div className='header__notif'>
            <button className='header__notif__block'>
                <Bell /> <p>Сообщений нет</p>
            </button>
        </div>
    )
}

export default HeaderNotifications;