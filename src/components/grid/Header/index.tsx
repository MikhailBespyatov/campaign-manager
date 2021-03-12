import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { headerCopyButtonDiameter, headerLogoHeight } from 'components/grid/Header/constants';
import { StyledHeader, StyledSpan1, StyledSpan2, StyledSpan3 } from 'components/grid/Header/style';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { siteName } from 'constants/global';
import { noContentMessage } from 'constants/messages';
import { padding, white } from 'constants/styles';
import { useStore } from 'effector-react';
import React from 'react';
import { themeStores } from 'stores/theme';
import { userEvents, userStores } from 'stores/user';
import copyButtonIcon from 'assets/img/copy_button_icon.svg';
import { ImgButton } from 'components/common/buttons/ImgButton';
import { MarginWrapper } from '../wrappers/MarginWrapper';

export const Header = () => {
    const { user } = useStore(userStores.user);
    const { logo } = useStore(themeStores.theme);

    const username = user && user?.username;
    // const imageUrl = user && user?.profile?.imageUrl;

    //MOCK
    const organizationPublicId = '123123sdasd123';

    const onClick = () => userEvents.logout();

    return (
        <StyledHeader>
            <Row alignCenter noWrap marginBottom="0" width="500px">
                <CustomImg height={headerLogoHeight} src={logo} />
                <StyledSpan1 color={white}>{siteName}</StyledSpan1>
            </Row>
            <Row alignCenter marginBottom="0">
                <Column alignCenter marginRight={padding}>
                    <Row>
                        <StyledSpan2 color={white}>
                            {username ? `${username} (${organizationPublicId})` : noContentMessage}
                        </StyledSpan2>
                        <MarginWrapper marginBottom="8px" marginLeft="10px">
                            <ImgButton
                                backgroundColor="#272727"
                                height={headerCopyButtonDiameter}
                                width={headerCopyButtonDiameter}
                            >
                                <CustomImg height="13px" src={copyButtonIcon} width="13px" />
                            </ImgButton>
                        </MarginWrapper>
                    </Row>
                    <StyledSpan3 color={white} onClick={onClick}>
                        Logout
                    </StyledSpan3>
                </Column>
                {/*<CustomImg*/}
                {/*    height={headerAvatarDiameter}*/}
                {/*    src={imageUrl ? imageUrl : defaultImg}*/}
                {/*    width={headerAvatarDiameter}*/}
                {/*/>*/}
            </Row>
        </StyledHeader>
    );
};
