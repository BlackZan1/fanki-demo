import React from 'react';

// components
import HeaderNotifications from './HeaderNotifications/HeaderNotifications';
import HeaderUser from './HeaderUser/HeaderUser';

// media
import LogoPNG from '../../img/fanki_logo.png';

import '../../hooks/colorThief';

// styles
import './Header.scss';

const Header: React.FC = () => {
    return (
        <header className='header header-shadow'>
            <div className='header__logo' style={{ background: `url(${LogoPNG})` }} />

            <div className='header__right' style={{ display: 'flex', height: 'inherit' }}>
                <HeaderNotifications />

                <HeaderUser />
            </div>
        </header>
    )
}

export default Header;