import { WomLogoImg } from 'components/common/imageComponents/WomLogoImg';
import { InternalTextLink } from 'components/common/links/InternalTextLink';
import { footerLogoHeight } from 'components/grid/Footer/constants';
import { StyledFooter, StyledSpanBottom, StyledSpanTop } from 'components/grid/Footer/styles';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { privacyPolicyHref, termsOfServiceHref } from 'constants/links';
import React from 'react';
import { useStore } from 'effector-react';
import { themeStores } from 'stores/theme';

export const Footer = () => {
    const { footerTextColor } = useStore(themeStores.theme);

    return (
        <StyledFooter>
            <Row marginBottom="28px">
                <WomLogoImg height={footerLogoHeight} />
                {/* <CustomImg height={footerLogoHeight} src={footerLogoImg} width={footerLogoWidth} /> */}
            </Row>
            <Row>
                <StyledSpanTop color={footerTextColor}>&copy; WOM Protocol Pte. Ltd. All Rights reserved</StyledSpanTop>
            </Row>
            <Row marginBottom="59px">
                <Column alignCenter>
                    <StyledSpanBottom color={footerTextColor}>
                        Legal Disclaimer{' '}
                        <InternalTextLink color={footerTextColor} href={privacyPolicyHref} target="_blank">
                            Privacy Policy
                        </InternalTextLink>{' '}
                        <InternalTextLink color={footerTextColor} href={termsOfServiceHref} target="_blank">
                            Terms and Conditions
                        </InternalTextLink>
                    </StyledSpanBottom>
                    <StyledSpanBottom color={footerTextColor}>
                        The information contained on this website is not investment advice. Investing in token sales is
                        a high-risk endeavor and one for which we strongly advise you to consult with your registered
                        investment advisor.
                    </StyledSpanBottom>
                </Column>
            </Row>
        </StyledFooter>
    );
};
