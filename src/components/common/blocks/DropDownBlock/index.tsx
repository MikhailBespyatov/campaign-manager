import React, { FC } from 'react';
import { StrictTitle } from 'types';
import { Column, Section } from 'components/grid/wrappers/FlexWrapper';
import { Span } from 'components/common/typography/Span';
import {
    DropDownBlockMarginBottom,
    imgHeight,
    imgMarginLeft,
    imgMarginRight,
    spanFontColor,
    spanFontSize,
    spanFontWeight,
    spanLineHeight
} from 'components/common/blocks/DropDownBlock/constants';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import expand from 'assets/img/expandImg.svg';
import close from 'assets/img/closeImg.svg';
import { LineBorder } from 'components/common/dividers/LineBorder';
import { Button } from './styles';
import { useToggle } from 'hooks/toggle';

interface Props extends StrictTitle {}

export const DropDownBlock: FC<Props> = ({ children, title }) => {
    const [isOpen, setIsOpen] = useToggle();

    const handleClick = () => setIsOpen();

    return (
        <Column>
            <Section alignCenter marginBottom={DropDownBlockMarginBottom}>
                <Button onClick={handleClick}>
                    <MarginWrapper>
                        <Span
                            color={spanFontColor}
                            fontSize={spanFontSize}
                            fontWeight={spanFontWeight}
                            lineHeight={spanLineHeight}
                        >
                            {title}
                        </Span>
                    </MarginWrapper>
                    <MarginWrapper marginLeft={imgMarginLeft} marginRight={imgMarginRight}>
                        <CustomImg height={imgHeight} src={isOpen ? close : expand} width={imgHeight} />
                    </MarginWrapper>
                </Button>
                {!isOpen && <LineBorder />}
            </Section>
            {isOpen && children}
            {isOpen && (
                <Section marginBottom={DropDownBlockMarginBottom}>
                    <LineBorder />
                </Section>
            )}
        </Column>
    );
};
