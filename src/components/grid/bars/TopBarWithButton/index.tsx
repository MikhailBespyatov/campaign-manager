import { Span } from 'components/common/TextComponents/Span';
import { Column, Section } from 'components/common/wrappers/FlexWrapper';
import {
    activeColor,
    defaultColor,
    spanFontSize,
    spanFontWeight,
    spanLineHeight
} from 'components/grid/bars/TopBarWithButton/constants';
import { ButtonsWrapper, StyledBorder, StyledItem } from 'components/grid/bars/TopBarWithButton/style';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { routesArray } from '../../../../constants';

interface Props {
    buttons?: JSX.Element;
}

export const TopBarWithButton = ({ buttons }: Props) => {
    const location = useLocation();
    const history = useHistory();

    const onClick = (path: string) => history.push(path);

    return (
        <Section>
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
            <ButtonsWrapper>{buttons}</ButtonsWrapper>
        </Section>
    );
};
