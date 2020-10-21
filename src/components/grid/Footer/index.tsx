import { WomLogoImg } from 'components/common/imageComponents/WomLogoImg';
import { footerLogoHeight } from 'components/grid/Footer/constants';
import { StyledFooter, StyledSpanBottom, StyledSpanTop } from 'components/grid/Footer/styles';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { white } from 'constants/styles';
import React from 'react';

export const Footer = () => (
    <StyledFooter>
        <Row marginBottom="28px">
            <WomLogoImg height={footerLogoHeight} />
            {/* <CustomImg height={footerLogoHeight} src={footerLogoImg} width={footerLogoWidth} /> */}
        </Row>
        <Row>
            <StyledSpanTop color={white}>PRIVACY POLICY PRESS</StyledSpanTop>
        </Row>
        <Row marginBottom="59px">
            <Column alignCenter>
                <StyledSpanBottom color={white}>&copy; WOM Token Ltd. All rights reserved</StyledSpanBottom>
                <StyledSpanBottom color={white}>
                    RISK DISCLAIMER: The information contained on this website is not investment advice. Investing in
                    token sales is a high-risk endeavor and one for which
                </StyledSpanBottom>
                <StyledSpanBottom color={white}>
                    we strongly advise you to consult with your registered investment advisor
                </StyledSpanBottom>
            </Column>
        </Row>
    </StyledFooter>
);
