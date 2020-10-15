import { Span } from 'components/common/typography/Span';
import {
    activeColor,
    defaultColor,
    spanFontSize,
    spanFontWeight,
    spanLineHeight
} from 'components/grid/bars/TopBarWithButtonOldVersion/constants';
import { ButtonsWrapper, StyledBorder, StyledItem } from 'components/grid/bars/TopBarWithButtonOldVersion/style';
import { Column, Section } from 'components/grid/wrappers/FlexWrapper';
import { routesArray } from 'constants/routes';
import React from 'react';
import { useHistory, useLocation } from 'react-router';

interface Props {
    buttons?: JSX.Element;
}

export const TopBarWithButtonOldVersion = ({ buttons }: Props) => {
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
