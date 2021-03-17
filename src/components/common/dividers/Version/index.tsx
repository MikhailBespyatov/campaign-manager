import React from 'react';
import { VersionSpan } from './styles';
import { appVersion, environment } from 'constants/global';

export const Version = () => (
    <VersionSpan>
        {appVersion} WOM: {environment}
    </VersionSpan>
);
