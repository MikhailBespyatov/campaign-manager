import blackAddButtonImg from 'assets/img/add_button_black_icon.svg';
import blueAddButtonImg from 'assets/img/add_button_blue_icon.svg';
import { addButtonIconDiameter } from 'components/common/buttons/NewDesign/AddButton/constants';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { SpanProps } from 'components/common/typography/Span/types';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import React, { FC } from 'react';
import {
    BackgroundColor,
    BorderProperties,
    BorderRadius,
    Disabled,
    FlexBooleanAlignment,
    NoopClick,
    Sizes
} from 'types';
import { Button, ButtonSpan } from './styles';

export interface AddButtonProps
    extends NoopClick,
        Disabled,
        Sizes,
        BackgroundColor,
        BorderRadius,
        Pick<BorderProperties, 'border'>,
        Pick<SpanProps, 'fontWeight' | 'fontSize' | 'lineHeight'>,
        Pick<FlexBooleanAlignment, 'justifyCenter'> {
    type?: 'blue' | 'black';
}

export const AddButton: FC<AddButtonProps> = ({
    children,
    justifyCenter,
    lineHeight = '15px',
    fontWeight = '400',
    fontSize = '12px',
    type = 'blue',
    ...props
}) => (
    <Button {...props}>
        <Section alignCenter height="100%" justifyCenter={justifyCenter}>
            <MarginWrapper marginRight="8px">
                <CustomImg
                    height={addButtonIconDiameter}
                    src={type === 'blue' ? blueAddButtonImg : blackAddButtonImg}
                    width={addButtonIconDiameter}
                />
            </MarginWrapper>
            <ButtonSpan fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight}>
                {children}
            </ButtonSpan>
        </Section>
    </Button>
);
