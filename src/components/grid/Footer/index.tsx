import footerBottomImg from 'assets/img/footer_bottom.svg';
import footerLogoImg from 'assets/img/footer_logo.svg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { Span } from 'components/common/TextComponents/Span';
import { Row } from 'components/common/wrappers/FlexWrapper';
import { footerLogoHeight, footerLogoWidth } from 'components/grid/Footer/constants';
import { StyledFooter } from 'components/grid/Footer/style';
import { white } from 'constants/styles';
import React from 'react';

export const Footer = () => (
    <StyledFooter>
        <Row marginBottom="28px">
            <CustomImg height={footerLogoHeight} src={footerLogoImg} width={footerLogoWidth} />
        </Row>
        <Row>
            <Span color={white}>PRIVACY POLICY PRESS</Span>
        </Row>
        <Row marginBottom="59px">
            <CustomImg height="75px" src={footerBottomImg} width="927px" />
        </Row>
    </StyledFooter>
);
