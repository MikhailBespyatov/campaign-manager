import { Wrapper } from 'components/grid/bars/TopBarWithButton/styles';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { routesArray } from 'constants/routes';
import { useStore } from 'effector-react';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { themeStores } from 'stores/theme';
import { userStores } from 'stores/user';
import { BarItem } from 'components/common/dividers/BarItem';

interface Props {
    buttons?: JSX.Element;
}

export const TopBarWithButton = ({ buttons }: Props) => {
    const location = useLocation();
    const history = useHistory();
    const { access } = useStore(userStores.auth);
    const globalPrefixUrl = useStore(themeStores.globalPrefixUrl);

    const onClick = (path: string) => history.push(globalPrefixUrl + path);

    //const onUsersClick = () => history.push(routes.userAdmin.index);

    return (
        <Wrapper>
            {routesArray.map(({ path, name, subPages, proxy }) => {
                const active = -1 !== location.pathname.indexOf(path);
                const subPage = subPages?.filter(i => -1 !== location.pathname.indexOf(i.path));

                return proxy && !proxy.includes(access) ? null : (
                    <BarItem key={name} active={active} namePage={subPage?.[0]?.name} path={path} onClick={onClick}>
                        {name}
                    </BarItem>
                    // <StyledItem key={path} onClick={() => onClick(path)}>
                    //     <Column alignCenter>
                    //         <Span
                    //             color={active ? primaryColor : inactiveColor}
                    //             fontSize={spanFontSize}
                    //             fontWeight={spanFontWeight}
                    //             lineHeight={spanLineHeight}
                    //             opacity={1}
                    //         >
                    //             {name}
                    //         </Span>
                    //         {active && <StyledBorder />}
                    //         <Row height={subPageSpanHeight} marginTop="5px">
                    //             <SubPageSpan>{subPage?.length ? subPage[0].name : ''}</SubPageSpan>
                    //         </Row>
                    //     </Column>
                    // </StyledItem>
                );
            })}
            {/* {access === 1 && (
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
            )} */}
            <MarginWrapper marginLeft="auto">{buttons}</MarginWrapper>
        </Wrapper>
    );
};
