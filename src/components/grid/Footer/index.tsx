import footerBottomImg from 'assets/img/footer_bottom.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { WomLogoImg } from 'components/common/imageComponents/WomLogoImg';
import { Span } from 'components/common/typography/Span';
import { footerLogoHeight } from 'components/grid/Footer/constants';
import { StyledFooter } from 'components/grid/Footer/style';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { white } from 'constants/styles';
import React from 'react';

export const Footer = () => (
    <StyledFooter>
        <Row marginBottom="28px">
            <WomLogoImg height={footerLogoHeight} />
            {/* <CustomImg height={footerLogoHeight} src={footerLogoImg} width={footerLogoWidth} /> */}
        </Row>
        <Row>
            <Span color={white}>PRIVACY POLICY PRESS</Span>
        </Row>
        <Row marginBottom="59px">
            <CustomImg height="75px" src={footerBottomImg} width="927px" />
        </Row>
    </StyledFooter>
);
