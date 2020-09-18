import React from 'react';

import { ReactComponent as ArrowSVG } from '../../img/gray-arrow.svg';

import './SideArrow.scss';

interface SideArrowProps {
    isLeft?: boolean
    onClickHandler?: () => void 
    disabled: boolean
}

const SideArrow: React.FC<SideArrowProps> = ({ isLeft, onClickHandler, disabled }) => {
    let classNames = 'side-arrow';

    if(isLeft) classNames += ' left';
    if(disabled) classNames += ' disabled';

    return (
        <div 
            onClick={disabled ? () => {} : onClickHandler} 
            className={ classNames }
        >
            <ArrowSVG />
        </div>
    )
}

export default SideArrow;