import React, { FC } from 'react';
//import classes from './ContentWrapper.module.scss';

export const ContentWrapper: FC = ({ children }) => (
    <div className={`d-flex flex-column flex-fill p-4 mx-4 mb-5`}>{children}</div>
);
