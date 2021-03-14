import arrowDown from 'assets/icons/arrow_down_grey.svg';
import { CopyButton } from 'components/common/buttons/CopyButton';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import {
    arrowDownHeight,
    arrowDownWidth,
    copyMerchantIdMessage,
    headerLogoHeight
} from 'components/grid/Header/constants';
import { MerchantIdWrapper, StyledHeader, StyledSpan1, StyledSpan2 } from 'components/grid/Header/style';
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { siteName } from 'constants/global';
import { noContentMessage } from 'constants/messages';
import { grey10, padding, white } from 'constants/styles';
import { useStore } from 'effector-react';
import React from 'react';
import { themeStores } from 'stores/theme';
//import { userEvents, userStores } from 'stores/user';
import { userStores } from 'stores/user';
import { MarginWrapper } from '../wrappers/MarginWrapper';

export const Header = () => {
    const { user } = useStore(userStores.user);
    const { logo } = useStore(themeStores.theme);

    const username = user && user?.username;
    // const imageUrl = user && user?.profile?.imageUrl;

    //MOCK
    const organizationPublicId = 'ADIDAS_603e01e0ad55d331b3b4642f';

    // const onClick = () => userEvents.logout();

    return (
        <StyledHeader>
            <Row alignCenter noWrap marginBottom="0" width="500px">
                <CustomImg height={headerLogoHeight} src={logo} />
                <StyledSpan1 color={white}>{siteName}</StyledSpan1>
            </Row>
            <Row alignCenter marginBottom="0">
                <Column alignEnd marginRight={padding}>
                    <Row alignCenter marginBottom="6px">
                        <StyledSpan2 color={white}>{username ? username : noContentMessage}</StyledSpan2>
                        <ClickableWrapper height="22px">
                            <CustomImg
                                alt="Arrow down"
                                height={arrowDownHeight}
                                src={arrowDown}
                                width={arrowDownWidth}
                            />
                        </ClickableWrapper>
                    </Row>
                    <Row alignCenter>
                        <Span color={grey10}>Merchant ID:</Span>
                        <MerchantIdWrapper>
                            <Span color={white} fontSize="12px">
                                {organizationPublicId}
                            </Span>

                            <MarginWrapper marginLeft="10px">
                                <CopyButton subject={organizationPublicId} success={copyMerchantIdMessage} />
                            </MarginWrapper>
                        </MerchantIdWrapper>
                    </Row>
                    {/* <StyledSpan3 color={white} onClick={onClick}>
                        Logout
                    </StyledSpan3> */}
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
