import headerBottomImg from 'assets/img/header_bottom.svg';
import headerLogoImg from 'assets/img/header_logo.svg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { CardColumn, CardRow } from 'components/grid/Card';
import { headerAvatarDiameter, headerLogoHeight, headerLogoWidth } from 'components/grid/Header/constants';
import { StyledHeader, StyledSpan1, StyledSpan2, StyledSpan3 } from 'components/grid/Header/style';
import React from 'react';
import { padding, siteName, white } from '../../../constants';

export const Header = () => (
    <StyledHeader>
        <CardRow alignCenter marginBottom="0">
            <CustomImg height={headerLogoHeight} src={headerLogoImg} width={headerLogoWidth} />
            <StyledSpan1 color={white}>{siteName}</StyledSpan1>
        </CardRow>
        <CardRow alignCenter marginBottom="0">
            <CardColumn marginRight={padding}>
                <StyledSpan2 color={white}>John Doe</StyledSpan2>
                <StyledSpan3 color={white}>Logout</StyledSpan3>
            </CardColumn>
            <CustomImg height={headerAvatarDiameter} src={headerBottomImg} width={headerAvatarDiameter} />
        </CardRow>
    </StyledHeader>
);
