import { Span } from 'components/common/typography/Span';
import {
    activeColor,
    itemOpacity,
    spanFontSize,
    spanFontWeight,
    spanLineHeight
} from 'components/grid/bars/TopBarWithButton/constants';
import { StyledBorder, StyledItem, Wrapper } from 'components/grid/bars/TopBarWithButton/style';
import { Column } from 'components/grid/wrappers/FlexWrapper';
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
            {routesArray.map(({ path, name }) => {
                const active = path === location.pathname;

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
                            {active && <StyledBorder />}
                        </Column>
                    </StyledItem>
                );
            })}
            {access === 1 && (
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
            )}
            <MarginWrapper marginLeft="auto">{buttons}</MarginWrapper>
        </Wrapper>
    );
};
