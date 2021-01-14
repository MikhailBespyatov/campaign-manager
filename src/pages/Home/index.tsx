import history from 'BrowserHistory';
import { WomLogoImg } from 'components/common/imageComponents/WomLogoImg';
import { Span } from 'components/common/typography/Span';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { siteName } from 'constants/global';
import { routes } from 'constants/routes';
import { white } from 'constants/styles';
import { learnMoreHref } from 'pages/Home/constants';
import { ExternalLink, Wrapper } from 'pages/Home/styles';
import React from 'react';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';

export const Home = () => {
    const goToRegistration = () => history.push(routes.signUp.index);

    return (
        <Wrapper>
            <Row marginBottom="52px">
                <WomLogoImg height="125px" />
            </Row>
            <Row marginBottom="47px">
                <Span color={white} fontSize="62px" fontWeight="700" lineHeight="62px">
                    {siteName}
                </Span>
            </Row>
            <Row marginBottom="52px" maxWidth="900px">
                <Span color={white} fontSize="26px" fontWeight="500" lineHeight="42px">
                    This is the heart of WOM system, allowing you to use your brand champions to spread the
                    word-of-mouth recommendations
                </Span>
            </Row>

            <Row>
                {/* <Column marginRight={primaryPadding}> */}
                <ManualRoundedButton onClick={goToRegistration}>SIGN UP</ManualRoundedButton>
            </Row>
            <ExternalLink href={learnMoreHref} target="_blank">
                <Span color={white} fontSize="14px" lineHeight="14px">
                    learn more
                </Span>
            </ExternalLink>
        </Wrapper>
    );
};
