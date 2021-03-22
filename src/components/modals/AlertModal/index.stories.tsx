import { Meta, Story } from '@storybook/react/types-6-0';
import { AlertModal, AlertModalProps } from 'components/modals/AlertModal';
import { nameProject } from 'constants/global';
import { errorDataMessage } from 'constants/messages';
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

const Template: Story<AlertModalProps> = args => <AlertModal {...args} />;

export const SuccessAlertModal = Template.bind({});
SuccessAlertModal.args = {
    message: 'Thank you for signing up.',
    infoMessage: 'Please check your email inbox for further instructions.'
};

export const ErrorAlertModal = Template.bind({});
ErrorAlertModal.args = {
    state: 'error',
    message: errorDataMessage,
    infoMessage: ' '
};
