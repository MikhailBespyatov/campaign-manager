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

interface Props extends ButtonProps, ReactClick<HTMLButtonElement>, Pick<TextProperties, 'fontWeight' | 'fontSize'> {
    img?: JSX.Element;
    imageIsLast?: boolean;
}

export const ManualRoundedButton: FC<Props> = ({
    children,
    img,
    imageIsLast,
    reverse,
    mainColor,
    fontWeight,
    height,
    fontSize,
    ...rest
}) => (
    <Button {...rest} height={height} mainColor={mainColor} reverse={reverse}>
        {img ? (
            <Row alignCenter justifyCenter marginBottom="0">
                {!imageIsLast ? (
                    <>
                        <Column marginRight={padding}>{img}</Column>
                        <InnerSpan fontSize={fontSize} fontWeight={fontWeight} lineHeight={height} reverse={reverse}>
                            {children}
                        </InnerSpan>
                    </>
                ) : (
                    <>
                        <InnerSpan fontSize={fontSize} fontWeight={fontWeight} lineHeight={height} reverse={reverse}>
                            {children}
                        </InnerSpan>
                        <Column marginLeft={padding}>{img}</Column>
                    </>
                )}
            </Row>
        ) : (
            <InnerSpan
                fontSize={fontSize}
                fontWeight={fontWeight}
                lineHeight={height}
                mainColor={mainColor}
                reverse={reverse}
            >
                {children}
            </InnerSpan>
        )}
    </Button>
);
