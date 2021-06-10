import { Button, InnerSpan } from 'components/common/buttons/ManualRoundedButton/styles';
import { ButtonProps } from 'components/common/buttons/ManualRoundedButton/types';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { padding } from 'constants/styles';
import React, { FC } from 'react';
import { TextProperties } from 'types';
import { ReactClick } from 'types/react';

// const InnerSpan: FC<Reverse> = ({ children, reverse }) => (
//     <Span alignCenter color={'#040a2b'} fontSize={spanFontSize} fontWeight={spanFontWeight} lineHeight={spanLineHeight}>
//         {children}
//     </Span>
// );

interface Props extends ButtonProps, ReactClick<HTMLButtonElement>, Pick<TextProperties, 'fontWeight'> {
    Img?: JSX.Element;
}

export const ManualRoundedButton: FC<Props> = ({ children, Img, reverse, mainColor, fontWeight, height, ...rest }) => (
    <Button {...rest} height={height} mainColor={mainColor} reverse={reverse}>
        {Img ? (
            <Row alignCenter justifyCenter marginBottom="0">
                <Column marginRight={padding}>{Img}</Column>
                <InnerSpan fontWeight={fontWeight} lineHeight={height} reverse={reverse}>
                    {children}
                </InnerSpan>
            </Row>
        ) : (
            <InnerSpan fontWeight={fontWeight} lineHeight={height} mainColor={mainColor} reverse={reverse}>
                {children}
            </InnerSpan>
        )}
    </Button>
);
