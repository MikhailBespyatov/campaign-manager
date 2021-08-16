import { Meta } from '@storybook/react/types-6-0';
import { ClearInputButton } from 'components/common/buttons/ClearInputButton';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { nameProject } from 'constants/global';
import { white } from 'constants/styles';
import { GlobalStyle } from 'constants/styles/global';
import base from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';

export default {
    title: getStoriesTitle(base),
    component: ClearInputButton,
    parameters: {
        backgrounds: {
            default: nameProject,
            values: [{ name: nameProject, value: white }]
        }
    },
    decorators: [
        Story => (
            <>
                <GlobalStyle />
                <Section>
                    <Story />
                </Section>
            </>
        )
    ]
} as Meta;

export const ClearInputBtn = () => <ClearInputButton />;
