import React, { useState } from 'react';

import Block, { NoItems } from '../Block/Block';

import './Base.scss';

const Base: React.FC<any> = ({ data }) => {
    const [ page, setPage ] = useState<number>(0);

    const changePage = (index: number) => setPage(index);

    return (
        <Block 
            title={'База знаний'}
            styles={{ gridArea: 'bas' }}
            page={page}
            maxPages={data.length}
            changePage={changePage}
        >
            {
                data.length ?
                null
                :
                <NoItems />
            }
        </Block>
    )
}

export default Base;