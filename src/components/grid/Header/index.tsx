import defaultImg from 'assets/img/wom_logo.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { headerAvatarDiameter, headerLogoHeight } from 'components/grid/Header/constants';
import { StyledHeader, StyledSpan1, StyledSpan2, StyledSpan3 } from 'components/grid/Header/style';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { siteName } from 'constants/global';
import { noContentMessage } from 'constants/messages';
import { padding, white } from 'constants/styles';
import { useStore } from 'effector-react';
import React from 'react';
import { themeStores } from 'stores/theme';
import { userEvents, userStores } from 'stores/user';

export const Header = () => {
    const { user } = useStore(userStores.user);
    const { logo } = useStore(themeStores.theme);

    const username = user && user?.username;
    const imageUrl = user && user?.profile?.imageUrl;

    const onClick = () => userEvents.logout();

    return (
        <StyledHeader>
            <Row alignCenter marginBottom="0">
                <CustomImg height={headerLogoHeight} src={logo} />
                <StyledSpan1 color={white}>{siteName}</StyledSpan1>
            </Row>
            <Row alignCenter marginBottom="0">
                <Column marginRight={padding}>
                    <StyledSpan2 color={white}>{username ? username : noContentMessage}</StyledSpan2>
                    <StyledSpan3 color={white} onClick={onClick}>
                        Logout
                    </StyledSpan3>
                </Column>
                <CustomImg
                    height={headerAvatarDiameter}
                    src={imageUrl ? imageUrl : defaultImg}
                    width={headerAvatarDiameter}
                />
            </Row>
        </StyledHeader>
    );
};
