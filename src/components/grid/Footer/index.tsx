import footerBottomImg from 'assets/img/footer_bottom.svg';
import footerLogoImg from 'assets/img/footer_logo.svg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { Span } from 'components/common/TextComponents/Span';
import { CardRow } from 'components/grid/Card/styles';
import { footerLogoHeight, footerLogoWidth } from 'components/grid/Footer/constants';
import { StyledFooter } from 'components/grid/Footer/style';
import { white } from 'constants/styles';
import React from 'react';

export const Footer = () => (
    <StyledFooter>
        <CardRow marginBottom="28px">
            <CustomImg height={footerLogoHeight} src={footerLogoImg} width={footerLogoWidth} />
        </CardRow>
        <CardRow>
            <Span color={white}>PRIVACY POLICY PRESS</Span>
        </CardRow>
        <CardRow marginBottom="59px">
            <CustomImg height="75px" src={footerBottomImg} width="927px" />
        </CardRow>
    </StyledFooter>
);
