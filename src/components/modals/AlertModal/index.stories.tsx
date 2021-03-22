import { Meta } from '@storybook/react/types-6-0';
import { AlertModal } from 'components/modals/AlertModal';
import { nameProject } from 'constants/global';
import { GlobalStyle } from 'constants/styles/global';
import { base } from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';
export default {
    title: getStoriesTitle(base),
    component: AlertModal,
    parameters: {
        backgrounds: {
            default: nameProject,
            values: [{ name: nameProject, value: 'lightGrey' }]
        }
    },
    decorators: [
        Story => (
            <>
                <GlobalStyle />
                <Story />
            </>
        )
    ]
} as Meta;

export const CustomAlertModal = () => <AlertModal />;
