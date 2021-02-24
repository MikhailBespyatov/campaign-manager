import React from 'react';
import { ItemSpan, ProgressBarItem, ProgressBarList, Wrapper } from 'components/common/features/ProgressBar/styles';
import {
    progressBarHeight,
    progressBarHorizontalPadding,
    progressBarVerticalPadding
} from 'components/common/features/ProgressBar/constants';
import { Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { SimpleButton } from 'components/common/buttons/SimpleButton';
import { formGrey6, primaryColor, white } from 'constants/styles';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { IsValid, Noop, ProgressBarItemInterface } from 'types';

export interface ProgressBarProps extends IsValid {
    steps: Array<Pick<ProgressBarItemInterface, 'title'>>;
    activeIndex?: number;
    onCancel?: Noop;
    onChange: (isForward: boolean) => void;
    onPublish?: Noop;
}

export const ProgressBar = ({ steps, activeIndex = 0, onCancel, onChange, onPublish, isValid }: ProgressBarProps) => {
    const nextStep = () => isValid && onChange(true);
    const backStep = () => onChange(false);

    //TODO: Create flexible SimpleButton
    return (
        <Wrapper padding={`${progressBarVerticalPadding} ${progressBarHorizontalPadding}`}>
            <Section height={progressBarHeight} marginBottom="17px">
                <ProgressBarList>
                    {steps.map(({ title }, index) => (
                        <ProgressBarItem key={title} active={index === activeIndex} done={index < activeIndex}>
                            <ItemSpan>{title}</ItemSpan>
                        </ProgressBarItem>
                    ))}
                </ProgressBarList>
            </Section>
            <Section justifyBetween>
                <Row>
                    <SimpleButton
                        backgroundColor={white}
                        color={activeIndex ? primaryColor : formGrey6}
                        onClick={backStep}
                    >
                        BACK
                    </SimpleButton>
                </Row>
                <Row>
                    <MarginWrapper marginRight="30px">
                        {activeIndex !== steps.length - 1 ? (
                            <ManualRoundedButton disabled={!isValid} height="29px" minWidth="97px" onClick={nextStep}>
                                NEXT
                            </ManualRoundedButton>
                        ) : (
                            <ManualRoundedButton height="29px" minWidth="97px" onClick={onPublish}>
                                PUBLISH
                            </ManualRoundedButton>
                        )}
                    </MarginWrapper>
                    <SimpleButton backgroundColor={white} color="#FF0606" onClick={onCancel}>
                        CANCEL
                    </SimpleButton>
                </Row>
            </Section>
        </Wrapper>
    );
};
