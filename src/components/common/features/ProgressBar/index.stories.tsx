import { Meta } from '@storybook/react/types-6-0';
import { nameProject } from 'constants/global';
import { GlobalStyle, grey7 } from 'constants/styles';
import base from 'paths.macro';
import React from 'react';
import { getStoriesTitle } from 'utils/usefulFunctions';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { ProgressBar, ProgressBarProps } from 'components/common/features/ProgressBar/index';
import { ProgressBarItemInterface } from 'types';
import { createCampaignEvents, createCampaignStores } from 'stores/createCampaignSteps';
import { useStore } from 'effector-react';

export default {
    title: getStoriesTitle(base),
    component: ProgressBar,
    parameters: {
        backgrounds: {
            default: nameProject,
            values: [{ name: nameProject, value: grey7 }]
        }
    },
    decorators: [
        Story => (
            <>
                <GlobalStyle />
                <Section width="100%">
                    <Story />
                </Section>
            </>
        )
    ]
} as Meta;

const steps: Array<Pick<ProgressBarItemInterface, 'title'>> = [
    {
        title: 'Campaign Name'
    },
    {
        title: 'Channels'
    },
    {
        title: 'Videos'
    },
    {
        title: 'Configuration'
    }
];

const args: ProgressBarProps = {
    steps: steps,
    onChange: (isForward: boolean) =>
        isForward ? createCampaignEvents.nextStep() : createCampaignEvents.previousStep()
};
export const DefaultProgressBar = () => {
    const activeIndex = useStore(createCampaignStores.stepIndex);
    return <ProgressBar {...args} activeIndex={activeIndex} />;
};
