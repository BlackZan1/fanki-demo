import { useState, useEffect, useCallback } from 'react';
import { getColorFromURL } from 'color-thief-node';

export const useColorThief = (imgUrl) => {
    const [ dominant, setDominant ] = useState('');

    const getDominant = useCallback(async () => {
        const color = await getColorFromURL(imgUrl);

        return `rgba(${color.join(', ') + ', 0.7'})`;
    }, [imgUrl])

    useEffect(() => {
        (
            async () => {
                const a = await getDominant();

                setDominant(a);
            }
        )
        ();
    }, [getDominant])

    return {
        dominant
    }
}
