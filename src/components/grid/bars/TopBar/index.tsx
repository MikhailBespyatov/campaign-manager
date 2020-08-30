import { Span } from 'components/common/TextComponents/Span';
import { Column, Row } from 'components/common/wrappers/FlexWrapper';
import {
    activeColor,
    defaultColor,
    spanFontSize,
    spanFontWeight,
    spanLineHeight
} from 'components/grid/bars/TopBar/constants';
import { StyledBorder, StyledItem } from 'components/grid/bars/TopBar/style';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { routesArray } from '../../../../constants';

export const TopBar = () => {
    const location = useLocation();
    const history = useHistory();

    const onClick = (path: string) => history.push(path);

    return (
        <Row>
            {routesArray.map(({ path, name }) => (
                <StyledItem key={path} active={path === location.pathname} onClick={() => onClick(path)}>
                    <Column alignCenter>
                        <Span
                            color={path === location.pathname ? activeColor : defaultColor}
                            fontSize={spanFontSize}
                            fontWeight={spanFontWeight}
                            lineHeight={spanLineHeight}
                        >
                            {name}
                        </Span>
                        {path === location.pathname && <StyledBorder />}
                    </Column>
                </StyledItem>
            ))}
        </Row>
    );
};
