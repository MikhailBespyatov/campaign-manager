import React, { FC } from 'react';
import { Button, ButtonSpan } from './styles';
import blueAddButtonImg from 'assets/img/add_button_blue_icon.svg';
import blackAddButtonImg from 'assets/img/add_button_black_icon.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { addButtonIconDiameter } from 'components/common/buttons/NewDesign/AddButton/constants';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { Disabled, FlexBooleanAlignment, NoopClick, Sizes } from 'types';
import { SpanProps } from 'components/common/typography/Span/types';

export interface AddButtonProps
    extends NoopClick,
        Disabled,
        Sizes,
        Pick<SpanProps, 'fontWeight' | 'fontSize' | 'lineHeight'>,
        Pick<FlexBooleanAlignment, 'justifyCenter'> {
    type?: 'blue' | 'black';
}

export const AddButton: FC<AddButtonProps> = ({
    children,
    justifyCenter,
    lineHeight = '17px',
    fontWeight = '400',
    fontSize = '14px',
    type = 'blue',
    ...props
}) => (
    <Button {...props}>
        <Section alignCenter height="100%" justifyCenter={justifyCenter}>
            <MarginWrapper marginRight="12px">
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
