import { Button, InnerSpan } from 'components/common/buttons/RoundedButton/styles';
import { ButtonProps } from 'components/common/buttons/RoundedButton/types';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { padding } from 'constants/styles';
import React, { FC } from 'react';

// const InnerSpan: FC<Reverse> = ({ children, reverse }) => (
//     <Span alignCenter color={'#040a2b'} fontSize={spanFontSize} fontWeight={spanFontWeight} lineHeight={spanLineHeight}>
//         {children}
//     </Span>
// );

interface Props extends ButtonProps {
    onClick?: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    Img?: JSX.Element;
}

export const RoundedButton: FC<Props> = ({ children, Img, reverse, ...rest }) => (
    <Button {...rest} reverse={reverse}>
        {Img ? (
            <Row alignCenter justifyCenter marginBottom="0">
                <Column marginRight={padding}>{Img}</Column>
                <InnerSpan reverse={reverse}>{children}</InnerSpan>
            </Row>
        ) : (
            <InnerSpan reverse={reverse}>{children}</InnerSpan>
        )}
    </Button>
);
