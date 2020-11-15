import { WomLogoImg } from 'components/common/imageComponents/WomLogoImg';
import { InternalTextLink } from 'components/common/links/InternalTextLink';
import { footerLogoHeight } from 'components/grid/Footer/constants';
import { StyledFooter, StyledSpanBottom, StyledSpanTop } from 'components/grid/Footer/styles';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { privacyPolicyHref, termsOfServiceHref } from 'constants/links';
import { white } from 'constants/styles';
import React from 'react';

export const Footer = () => (
    <StyledFooter>
        <Row marginBottom="28px">
            <WomLogoImg height={footerLogoHeight} />
            {/* <CustomImg height={footerLogoHeight} src={footerLogoImg} width={footerLogoWidth} /> */}
        </Row>
        <Row>
            <StyledSpanTop color={white}>&copy; WOM Protocol Pte. Ltd. All Rights reserved</StyledSpanTop>
        </Row>
        <Row marginBottom="59px">
            <Column alignCenter>
                <StyledSpanBottom color={white}>
                    Legal Disclaimer{' '}
                    <InternalTextLink color={white} href={privacyPolicyHref} target="_blank">
                        Privacy Policy
                    </InternalTextLink>{' '}
                    <InternalTextLink color={white} href={termsOfServiceHref} target="_blank">
                        Terms and Conditions
                    </InternalTextLink>
                </StyledSpanBottom>
                <StyledSpanBottom color={white}>
                    The information contained on this website is not investment advice. Investing in token sales is a
                    high-risk endeavor and one for which we strongly advise you to consult with your registered
                    investment advisor.
                </StyledSpanBottom>
                <StyledSpanBottom color={white}>
                    we strongly advise you to consult with your registered investment advisor
                </StyledSpanBottom>
            </Column>
        </Row>
    </StyledFooter>
);
