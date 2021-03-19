import React, { FC } from 'react';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { ProgressBar } from 'components/common/features/ProgressBar';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { createCampaignSteps } from 'pages/CampaignManager/Campaign/Create/constants';
import { createCampaignEvents, createCampaignStores } from 'stores/createCampaignSteps';
import { useStore } from 'effector-react';
import { useField, useForm } from 'effector-forms';
import { forms } from 'stores/forms';

interface Props {}

export const CreateCampaignLayout: FC<Props> = ({ children }) => {
    const stepIndex = useStore(createCampaignStores.stepIndex);

    const { isValidField } = createCampaignSteps[stepIndex];
    //!!! because I can't resolve problem with get fields by key of string !!!
    // @ts-ignore
    const { isValid, isDirty } = useField(forms.createCampaignForm.fields[isValidField]);
    const { submit } = useForm(forms.createCampaignForm);

    const onChangeStep = (isForward: boolean) =>
        isForward ? createCampaignEvents.nextStep() : createCampaignEvents.previousStep();

    return (
        <>
            <MarginWrapper marginBottom="8px">
                <ContentWrapper>
                    <ProgressBar
                        activeIndex={stepIndex}
                        isValid={isDirty && isValid}
                        steps={createCampaignSteps.map(({ title }) => ({
                            title
                        }))}
                        onChange={onChangeStep}
                        onPublish={() => submit()}
                    />
                </ContentWrapper>
            </MarginWrapper>
            {children}
        </>
    );
};
