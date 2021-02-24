import { useEffect } from 'react';

const body = document.body;

export const useNonScrolledBackground = (visible?: boolean) =>
    useEffect(() => {
        visible ? (body.style.overflow = 'hidden') : (body.style.overflow = 'auto');
    }, [visible]);
