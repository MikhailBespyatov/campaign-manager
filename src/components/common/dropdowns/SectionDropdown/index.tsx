import arrowRight from 'assets/img/right_arrow.svg';
import womLogo from 'assets/img/wom-token-logo.png';
import {
    dropdownWrapperWidth,
    rightArrowIconHeight,
    rightArrowIconWidth
} from 'components/common/dropdowns/SectionDropdown/constants';
import {
    DropdownSectionButton,
    DropdownSectionProps,
    DropdownSectionWrapper
} from 'components/common/dropdowns/SectionDropdown/style';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { blue, red2 } from 'constants/styles';
import { useToggle } from 'hooks/toggle';
import React, { FC } from 'react';

export const DropdownColumn: FC = ({ children }) => <Column width={dropdownWrapperWidth}>{children}</Column>;

export interface Props extends DropdownSectionProps {
    title: string;
    defaultValue?: boolean;
    wom?: number;
    profit?: boolean | 0;
}

export const DropdownSection: FC<Props> = ({ children, title, defaultValue = false, wom, profit, ...rest }) => {
    const [isOpened, toggleIsOpened] = useToggle(defaultValue);

    return (
        <DropdownSectionWrapper isOpened={isOpened} {...rest}>
            <DropdownSectionButton onClick={toggleIsOpened}>
                <Span fontSize="16px" fontWeight="700">
                    {title}
                </Span>
                <Row alignCenter>
                    {profit !== undefined && (
                        <MarginWrapper marginRight="40px">
                            <Span color={profit ? blue : red2} fontSize="18px" lineHeight="22px">
                                {profit ? 'Profit' : 'Loss'}
                            </Span>
                        </MarginWrapper>
                    )}
                    {wom ? (
                        <MarginWrapper marginRight="14px">
                            <Row>
                                <MarginWrapper marginRight="4px">
                                    <Span fontSize="18px" lineHeight="22px">
                                        {wom}
                                    </Span>
                                </MarginWrapper>
                                <CustomImg alt="logo" height="auto" src={womLogo} width="20" />
                            </Row>
                        </MarginWrapper>
                    ) : null}
                    <CustomImg
                        alt="Arrow"
                        height={rightArrowIconHeight}
                        rotate={isOpened ? 90 : 0}
                        src={arrowRight}
                        width={rightArrowIconWidth}
                    />
                </Row>
            </DropdownSectionButton>
            {isOpened && children}
        </DropdownSectionWrapper>
    );
};
