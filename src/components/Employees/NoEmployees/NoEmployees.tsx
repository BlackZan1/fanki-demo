import React from 'react';

import { ReactComponent as OkSVG } from '../../../img/ok.svg';

const NoEmployees = () => {
    return (
        <div className='wrapper__employees__list-empty'>
            <OkSVG />

            <p>Сотрудников нет</p>
        </div>
    )
}

export default NoEmployees;