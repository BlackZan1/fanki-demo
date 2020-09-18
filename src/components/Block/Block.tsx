import React from 'react';

import SideArrow from '../SideArrow/SideArrow';
import Slider from '../Slider/Slider';

import './Block.scss';

interface BlockProps {
    title: string
    styles?: React.CSSProperties
    bodyStyles?: React.CSSProperties
    page?: number
    maxPages?: number
    changePage?: (i: number) => void
    withoutBottomLink?: boolean
}

export const NoItems = () => (
    <div className='block__no-items'>
        <div />

        <p>Новых публикаций нет</p>
    </div>
)

const Block: React.FC<BlockProps> = (
    { title, children, styles, page, bodyStyles, maxPages, changePage, withoutBottomLink }
    ) => {
    return (
        <div className='wrapper__block' style={{ ...styles }}>
            <div className='wrapper__block__top'>
                <p>{ title }</p>

                {
                    !!maxPages ? 
                    <span>{ maxPages }</span> 
                    : 
                    null
                } 
            </div>

            <div className='wrapper__block__body'>
                {
                    (page !== undefined && maxPages && changePage) ?
                    <SideArrow isLeft={true} disabled={page === 0} onClickHandler={() => changePage(page - 1)} />
                    :
                    null
                }

                <div style={{ width: '100%', margin: '0 auto 10px', ...bodyStyles }}>
                    {
                        children
                    }

                    {
                        (page !== undefined && maxPages && changePage) ?
                        <Slider count={maxPages} index={page} changePage={changePage} />
                        :
                        null
                    }
                </div>

                {
                    (page !== undefined && maxPages && changePage) ? 
                    <SideArrow disabled={page + 1 === maxPages} onClickHandler={() => changePage(page + 1)} />
                    :
                    null
                }
            </div>

            <div className='wrapper__block__bottom'>
                {
                    !withoutBottomLink && (
                        <a href='/'>
                            { title } →
                        </a>
                    )
                }
            </div>
        </div>
    )
}

export default Block;