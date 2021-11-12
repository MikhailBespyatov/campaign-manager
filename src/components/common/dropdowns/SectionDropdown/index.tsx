import arrowRight from 'assets/img/right_arrow.svg';
import womLogo from 'assets/img/wom-token-logo.png';
import {
    dropdownWrapperWidth,
    rightArrowIconHeight,
    rightArrowIconWidth,
    titleFontSizeDropdownSection,
    titleLineHeightDropdownSection
} from 'components/common/dropdowns/SectionDropdown/constants';
import {
    DropdownSectionButton,
    DropdownSectionProps,
    DropdownSectionWrapper,
    StyledRow,
    StyledRowNoShrink
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
    date: string;
    endDate?: string;
    defaultValue?: boolean;
    wom?: number;
    profit?: boolean | 0;
}

export const DropdownSection: FC<Props> = ({ children, date, endDate, defaultValue = false, wom, profit, ...rest }) => {
    const [isOpened, toggleIsOpened] = useToggle(defaultValue);

    return (
        <DropdownSectionWrapper isOpened={isOpened} {...rest}>
            <DropdownSectionButton onClick={toggleIsOpened}>
                <StyledRowNoShrink>
                    <Span fontSize={titleFontSizeDropdownSection} fontWeight="600">
                        {date}
                    </Span>
                    {!!endDate && (
                        <>
                            <Span fontSize={titleFontSizeDropdownSection} fontWeight="600">
                                &nbsp;-&nbsp;
                            </Span>

                            <Span fontSize={titleFontSizeDropdownSection} fontWeight="600">
                                {endDate}
                            </Span>
                        </>
                    )}
                </StyledRowNoShrink>
                <Row alignCenter justifyCenter margin="0 20px" width="50px">
                    {profit !== undefined && (
                        <Span
                            color={profit ? blue : red2}
                            fontSize={titleFontSizeDropdownSection}
                            fontWeight="400"
                            lineHeight={titleLineHeightDropdownSection}
                        >
                            {profit ? 'Profit' : 'Loss'}
                        </Span>
                    )}
                </Row>
                <StyledRow>
                    {wom ? (
                        <Row noWrap>
                            <Span fontSize={titleFontSizeDropdownSection} lineHeight={titleLineHeightDropdownSection}>
                                {wom}
                            </Span>

                            <MarginWrapper marginLeft="14px" marginRight="42px">
                                <CustomImg alt="logo" height="auto" src={womLogo} width="20px" />
                            </MarginWrapper>
                        </Row>
                    ) : null}
                    <CustomImg
                        alt="Arrow"
                        height={rightArrowIconHeight}
                        rotate={isOpened ? 90 : 0}
                        src={arrowRight}
                        width={rightArrowIconWidth}
                    />
                </StyledRow>
            </DropdownSectionButton>
            {isOpened && children}
        </DropdownSectionWrapper>
    );
};
