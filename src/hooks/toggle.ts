import { useCallback, useState } from 'react';
import { Noop } from 'types';

export const useToggle = (initialState = false): [boolean, Noop] => {
    const [state, setState] = useState(initialState);

    return [state, useCallback(() => setState(state => !state), [])];
};

type ArrowState = 'notActive' | 'bottom' | 'top';

export const useSortToggle = (initialState: ArrowState = 'notActive'): [ArrowState, Noop] => {
    const [state, setState] = useState<ArrowState>(initialState);

    return [
        state,
        useCallback(() => {
            //setState(state => (state !== 'bottom' ? 'bottom' : 'top'));
            setState(state => (state === 'notActive' ? 'bottom' : state === 'bottom' ? 'top' : 'notActive'));
        }, [])
    ];
};
