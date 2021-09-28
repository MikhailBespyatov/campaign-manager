import arrowDown from 'assets/icons/arrow_down_grey.svg';
import shopifyLogo from 'assets/img/shopify_logo.svg';
import { CopyButton } from 'components/common/buttons/CopyButton';
import { Version } from 'components/common/dividers/Version';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import { Loader } from 'components/dynamic/Loader';
import {
    arrowDownHeight,
    arrowDownWidth,
    copyMerchantIdMessage,
    headerLogoHeight,
    popoverText
} from 'components/grid/Header/constants';
import { MerchantIdWrapper, StyledHeader, StyledSpan1, StyledSpan2 } from 'components/grid/Header/style';
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { InfoPopover } from 'components/modals/InfoPopover';
import { LogOutPopover } from 'components/modals/LogOutPopover';
import { siteName } from 'constants/global';
import { noContentMessage } from 'constants/messages';
import { routes } from 'constants/routes';
import { grey10, padding, white } from 'constants/styles';
import { useStore } from 'effector-react';
import React from 'react';
import { useHistory } from 'react-router';
import { organizationsEffects, organizationsStores } from 'stores/organizations';
import { themeStores } from 'stores/theme';
//import { userEvents, userStores } from 'stores/user';
import { userStores } from 'stores/user';
import { MarginWrapper } from '../wrappers/MarginWrapper';

export const Header = () => {
    const { user } = useStore(userStores.user);
    const { logo } = useStore(themeStores.theme);
    const { publicId: organizationPublicId } = useStore(organizationsStores.item);
    const loading = useStore(organizationsEffects.getItemById.pending);
    const { origin } = useStore(organizationsStores.item);
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);
    const username = user && user?.username;
    const history = useHistory();
    // const imageUrl = user && user?.profile?.imageUrl;
    const onHeaderLogo = () => {
        history.push(globalPrefixUrl + routes.campaignManager.discover.index);
    };
    //MOCK
    // const organizationPublicId = 'ADIDAS_603e01e0ad55d331b3b4642f';

    return (
        <StyledHeader>
            <Version />
            <Row alignCenter noWrap marginBottom="0" width="500px">
                <ClickableWrapper height="auto" width="auto" onClick={onHeaderLogo}>
                    <CustomImg height={headerLogoHeight} src={logo} />
                </ClickableWrapper>
                <StyledSpan1 color={white} onClick={onHeaderLogo}>
                    {siteName}
                </StyledSpan1>
            </Row>
            <Row alignCenter marginBottom="0">
                <Column alignEnd marginRight={padding}>
                    <LogOutPopover>
                        <Row alignCenter marginBottom="6px">
                            {origin === 'shopify' ? (
                                <MarginWrapper margin="6px 10px">
                                    <CustomImg alt="Shopify account" height="20px" src={shopifyLogo} width="62px" />
                                </MarginWrapper>
                            ) : null}
                            <StyledSpan2 color={white}>{username ? username : noContentMessage}</StyledSpan2>
                            <MarginWrapper margin="6px 10px">
                                <CustomImg
                                    alt="Arrow down"
                                    height={arrowDownHeight}
                                    src={arrowDown}
                                    width={arrowDownWidth}
                                />
                            </MarginWrapper>
                        </Row>
                    </LogOutPopover>
                    <Row alignCenter>
                        <Span color={grey10}>Merchant ID:</Span>
                        <MerchantIdWrapper>
                            {loading ? (
                                <Loader />
                            ) : (
                                <InfoPopover popoverText={popoverText}>
                                    <Row alignCenter noWrap>
                                        <Span color={white} fontSize="12px">
                                            {organizationPublicId}
                                        </Span>

                                        <MarginWrapper marginLeft="10px">
                                            <CopyButton
                                                subject={organizationPublicId}
                                                success={copyMerchantIdMessage}
                                            />
                                        </MarginWrapper>
                                    </Row>
                                </InfoPopover>
                            )}
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
