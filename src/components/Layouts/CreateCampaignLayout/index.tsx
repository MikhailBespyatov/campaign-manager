import { ProgressBar } from 'components/common/features/ProgressBar';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { primaryMargin } from 'constants/styles';
import { useField, useForm } from 'effector-forms';
import { useStore } from 'effector-react';
import { createCampaignSteps } from 'pages/CampaignManager/Campaign/Create/constants';
import React, { FC } from 'react';
import { createCampaignEvents, createCampaignStores } from 'stores/createCampaignSteps';
import { forms } from 'stores/forms';

interface Props {}

export const CreateCampaignLayout: FC<Props> = ({ children }) => {
    const stepIndex = useStore(createCampaignStores.stepIndex);
    const { submit, reset, eachValid: isValidForm } = useForm(forms.createCampaignForm);
    const { isValidField } = createCampaignSteps[stepIndex];
    //!!! because I can't resolve problem with get fields by key of string !!!
    // @ts-ignore
    const { isValid, isDirty } = useField(forms.createCampaignForm.fields[isValidField]);
    const isValidStep = isValid && isDirty;

    const onChangeStep = (isForward: boolean) =>
        isForward ? createCampaignEvents.nextStep() : createCampaignEvents.previousStep();

    const onCancel = () => {
        reset();
        createCampaignEvents.setStep(0);
    };

    return (
        <>
            <MarginWrapper marginBottom={primaryMargin}>
                <ContentWrapper>
                    <ProgressBar
                        activeIndex={stepIndex}
                        isValidForm={isValidForm}
                        isValidStep={isValidStep}
                        steps={createCampaignSteps.map(({ title }) => ({
                            title
                        }))}
                        onCancel={onCancel}
                        onChange={onChangeStep}
                        onPublish={() => submit()}
                    />
                </ContentWrapper>
            </MarginWrapper>
            {children}
        </>
    );
};
