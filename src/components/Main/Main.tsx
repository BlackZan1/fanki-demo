import React from 'react';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Wrapper from '../Wrapper/Wrapper';

const Main: React.FC = () => {
    return (
        <main className='main-app'>
            <Header />

            <div className='main-app__content'>
                <Sidebar />

                <Wrapper />
            </div>
        </main>
    )
}

export default Main;