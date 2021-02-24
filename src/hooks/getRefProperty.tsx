import { RefObject, useEffect, useState } from 'react';

//any - because Element may by any (div, input etc)
export const useRefWidthAndHeight = (ref: RefObject<any>, visible?: boolean) => {
    const [childrenProperty, setChildrenProperty] = useState([0, 0]);

    useEffect(() => {
        if (!ref.current) return;

        setChildrenProperty([ref.current.clientWidth, ref.current.clientHeight]);
        //visible should activate useEffect
    }, [ref, visible]);

    return childrenProperty;
};
