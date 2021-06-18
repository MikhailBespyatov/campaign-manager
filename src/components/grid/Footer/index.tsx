import { WomLogoImg } from 'components/common/imageComponents/WomLogoImg';
import { footerLogoHeight } from 'components/grid/Footer/constants';
import { StyledFooter, StyledSpanBottom, StyledSpanTop, StyledTextLink } from 'components/grid/Footer/styles';
import { Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { privacyPolicyHref, termsOfServiceHref } from 'constants/links';
import { useStore } from 'effector-react';
import React from 'react';
import { themeStores } from 'stores/theme';

export const Footer = () => {
    const { footerTextColor } = useStore(themeStores.theme);

    return (
        <StyledFooter>
            <Section alignCenter justifyCenter marginBottom="18px">
                <WomLogoImg height={footerLogoHeight} />
                {/* <CustomImg height={footerLogoHeight} src={footerLogoImg} width={footerLogoWidth} /> */}
            </Section>
            <Section alignCenter justifyCenter>
                <StyledSpanTop color={footerTextColor}>&copy; WOM Protocol Pte. Ltd. All Rights reserved</StyledSpanTop>
            </Section>

            <Section alignCenter justifyCenter margin="25px 0px">
                {/* Legal Disclaimer{' '} */}
                <Row marginRight="40px">
                    <StyledTextLink href={privacyPolicyHref} target="_blank">
                        Privacy Policy
                    </StyledTextLink>
                </Row>
                <Row>
                    <StyledTextLink href={termsOfServiceHref} target="_blank">
                        Terms and Conditions
                    </StyledTextLink>
                </Row>
            </Section>
            <StyledSpanBottom color={footerTextColor}>
                The information contained on this website is not investment advice. Investing in token sales is a
                high-risk endeavor and one for which we strongly advise you to consult with your registered investment
                advisor.
            </StyledSpanBottom>
        </StyledFooter>
    );
};
