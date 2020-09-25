import headerBottomImg from 'assets/img/header_bottom.svg';
import headerLogoImg from 'assets/img/header_logo.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { headerAvatarDiameter, headerLogoHeight, headerLogoWidth } from 'components/grid/Header/constants';
import { StyledHeader, StyledSpan1, StyledSpan2, StyledSpan3 } from 'components/grid/Header/style';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { siteName } from 'constants/global';
import { padding, white } from 'constants/styles';
import React from 'react';
import { userEvents } from 'stores/user';

export const Header = () => {
    const onClick = () => userEvents.logout();

    return (
        <StyledHeader>
            <Row alignCenter marginBottom="0">
                <CustomImg height={headerLogoHeight} src={headerLogoImg} width={headerLogoWidth} />
                <StyledSpan1 color={white}>{siteName}</StyledSpan1>
            </Row>
            <Row alignCenter marginBottom="0">
                <Column marginRight={padding}>
                    <StyledSpan2 color={white}>John Doe</StyledSpan2>
                    <StyledSpan3 color={white} onClick={onClick}>
                        Logout
                    </StyledSpan3>
                </Column>
                <CustomImg height={headerAvatarDiameter} src={headerBottomImg} width={headerAvatarDiameter} />
            </Row>
        </StyledHeader>
    );
};
