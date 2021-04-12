import { useCallback, useState } from 'react';
import { Noop } from 'types';

export const useToggle = (initialState = false): [boolean, Noop] => {
    const [state, setState] = useState(initialState);

    return [state, useCallback(() => setState(state => !state), [])];
};
