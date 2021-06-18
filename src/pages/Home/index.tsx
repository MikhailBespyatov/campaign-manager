import history from 'BrowserHistory';
import { ManualRoundedButton } from 'components/common/buttons/ManualRoundedButton';
import { WomLogoImg } from 'components/common/imageComponents/WomLogoImg';
import { Span } from 'components/common/typography/Span';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { defaultFontWeight } from 'constants/defaults';
import { siteName } from 'constants/global';
import { routes, signInPath } from 'constants/routes';
import { white } from 'constants/styles';
import { learnMoreHref } from 'pages/Home/constants';
import { ExternalLink, Wrapper } from 'pages/Home/styles';
import React from 'react';

export const Home = () => {
    const goToRegistration = () => history.push(routes.signUp.index);
    const goToLogin = () => history.push(signInPath);

    return (
        <Wrapper>
            <Row marginBottom="50px">
                <WomLogoImg height="93px" />
            </Row>
            <Row marginBottom="25px">
                <Span color={white} fontSize="36px" fontWeight={defaultFontWeight} lineHeight="44px">
                    {siteName}
                </Span>
            </Row>
            <Row marginBottom="134px" maxWidth="761px">
                <Span alignCenter color={white} fontSize="20px" fontWeight="500" lineHeight="32px">
                    Welcome to your complete toolkit for finding, tracking and rewarding word-of-mouth recommendations
                    from real brand fans. Let’s get started.
                    {/* This is the heart of WOM system, allowing you to use your brand champions to spread the
                    word-of-mouth recommendations */}
                </Span>
            </Row>

            <Row marginBottom="30px">
                {/* <Column marginRight={primaryPadding}> */}
                <ManualRoundedButton minWidth="282px" onClick={goToLogin}>
                    LOG IN
                </ManualRoundedButton>
            </Row>
            <Row marginBottom="45px">
                {/* <Column marginRight={primaryPadding}> */}
                <ManualRoundedButton minWidth="282px" onClick={goToRegistration}>
                    SIGN UP
                </ManualRoundedButton>
            </Row>
            <ExternalLink href={learnMoreHref} target="_blank">
                <Span color={white} fontSize="16px" fontWeight="400" lineHeight="14px">
                    Learn More
                </Span>
            </ExternalLink>
        </Wrapper>
    );
};
