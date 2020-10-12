import { Span } from 'components/common/typography/Span';
import { SubPageSpan } from 'components/common/typography/special';
import { subPageSpanHeight } from 'components/common/typography/special/constants';
import {
    activeColor,
    itemOpacity,
    spanFontSize,
    spanFontWeight,
    spanLineHeight
} from 'components/grid/bars/TopBarWithButton/constants';
import { StyledBorder, StyledItem, Wrapper } from 'components/grid/bars/TopBarWithButton/styles';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { routes, routesArray } from 'constants/routes';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { userStores } from 'stores/user';

interface Props {
    buttons?: JSX.Element;
}

export const TopBarWithButton = ({ buttons }: Props) => {
    const location = useLocation();
    const history = useHistory();
    const { access } = useStore(userStores.auth);

    const onClick = (path: string) => history.push(path);

    const onUsersClick = () => history.push(routes.userAdmin.index);

    return (
        <Wrapper>
            {routesArray.map(({ path, name, subPages }) => {
                const active = path === location.pathname;
                const borderActive = -1 !== location.pathname.indexOf(path);
                const subPage = subPages.filter(i => -1 !== location.pathname.indexOf(i.path));

                return (
                    <StyledItem key={path} active={active} onClick={() => onClick(path)}>
                        <Column alignCenter>
                            <Span
                                color={activeColor}
                                fontSize={spanFontSize}
                                fontWeight={spanFontWeight}
                                lineHeight={spanLineHeight}
                                opacity={!active ? Number(itemOpacity) : 1}
                            >
                                {name}
                            </Span>
                            {borderActive && <StyledBorder />}
                            <Row height={subPageSpanHeight} marginTop="5px">
                                <SubPageSpan>{subPage?.length ? subPage[0].name : ''}</SubPageSpan>
                            </Row>
                        </Column>
                    </StyledItem>
                );
            })}
            {access === 1 && (
                <>
                    <StyledItem onClick={onUsersClick}>
                        <Column alignCenter>
                            <Span
                                color={blue}
                                fontSize={spanFontSize}
                                fontWeight={spanFontWeight}
                                lineHeight={spanLineHeight}
                            >
                                Users
                            </Span>
                        </Column>
                    </StyledItem>
                    <Row height={subPageSpanHeight} marginTop="5px">
                        <SubPageSpan>{''}</SubPageSpan>
                    </Row>
                </>
            )}
            <MarginWrapper marginLeft="auto">{buttons}</MarginWrapper>
        </Wrapper>
    );
};
