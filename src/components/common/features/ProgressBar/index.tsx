import arrow from 'assets/icons/arrow_transparent_right.svg';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import {
    arrowDiameter,
    buttonBorderRadius,
    progressBarHeight,
    progressBarHorizontalPadding,
    progressBarVerticalPadding
} from 'components/common/features/ProgressBar/constants';
import { ItemSpan, ProgressBarItem, ProgressBarList, Wrapper } from 'components/common/features/ProgressBar/styles';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import React from 'react';
import { modalEvents } from 'stores/modal';
import { Noop, ProgressBarItemInterface } from 'types';

export interface ProgressBarProps {
    steps: Array<Pick<ProgressBarItemInterface, 'title'>>;
    activeIndex?: number;
    onCancel?: Noop;
    onChange: (isForward: boolean) => void;
    onPublish?: Noop;
    isValidStep?: boolean;
    isValidForm?: boolean;
}

export const ProgressBar = ({
    steps,
    activeIndex = 0,
    onCancel,
    onChange,
    onPublish,
    isValidStep,
    isValidForm
}: ProgressBarProps) => {
    const nextStep = () => isValidStep && onChange(true);
    const backStep = () => onChange(false);

    const onPublishButtonClick = () =>
        modalEvents.openAsyncModal({
            title: 'Ready To Launch Your Campaign?',
            content: 'Be sure to double-check your campaign details as these cannot be edited once you publish.',
            closeText: 'Go Back',
            okText: 'Publish',
            onOk: () => {
                onPublish?.();
                modalEvents.closeAsyncModal();
            }
        });

    //TODO: Create flexible SimpleButton
    return (
        <Wrapper padding={`${progressBarVerticalPadding} ${progressBarHorizontalPadding}`}>
            <Section height={progressBarHeight} marginBottom="15px">
                <ProgressBarList>
                    {steps.map(({ title }, index) => (
                        <ProgressBarItem key={title} active={index === activeIndex} done={index < activeIndex}>
                            <ItemSpan>{title}</ItemSpan>
                        </ProgressBarItem>
                    ))}
                </ProgressBarList>
            </Section>
            <Section justifyEnd>
                {activeIndex !== 0 && (
                    <MarginWrapper marginRight="15px">
                        <ManualRoundedButton
                            borderRadius={buttonBorderRadius}
                            fontSize="16px"
                            fontWeight="400"
                            height="32px"
                            img={
                                <CustomImg
                                    alt="Arrow down"
                                    height={arrowDiameter}
                                    rotate={180}
                                    src={arrow}
                                    width={arrowDiameter}
                                />
                            }
                            minWidth="90px"
                            onClick={backStep}
                        >
                            BACK
                        </ManualRoundedButton>
                    </MarginWrapper>
                )}
                <MarginWrapper marginRight="40px">
                    {activeIndex !== steps.length - 1 ? (
                        <ManualRoundedButton
                            imageIsLast
                            borderRadius={buttonBorderRadius}
                            disabled={!isValidStep}
                            fontSize="16px"
                            fontWeight="400"
                            height="32px"
                            img={
                                <CustomImg alt="Arrow down" height={arrowDiameter} src={arrow} width={arrowDiameter} />
                            }
                            minWidth="90px"
                            onClick={nextStep}
                        >
                            NEXT
                        </ManualRoundedButton>
                    ) : (
                        <ManualRoundedButton
                            borderRadius={buttonBorderRadius}
                            disabled={!isValidForm}
                            fontSize="16px"
                            fontWeight="400"
                            height="32px"
                            minWidth="90px"
                            onClick={onPublishButtonClick}
                        >
                            Publish
                        </ManualRoundedButton>
                    )}
                </MarginWrapper>

                <ManualRoundedButton
                    background="transparent"
                    borderRadius={buttonBorderRadius}
                    fontSize="12px"
                    fontWeight="400"
                    height="32px"
                    mainColor="#FF0606"
                    minWidth="90px"
                    onClick={onCancel}
                >
                    CANCEL
                </ManualRoundedButton>
            </Section>
        </Wrapper>
    );
};
