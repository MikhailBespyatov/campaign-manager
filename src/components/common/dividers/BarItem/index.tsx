import React, { FC } from 'react';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { Span } from 'components/common/typography/Span';
import {
    inactiveColor,
    spanFontSize,
    spanFontWeight,
    spanLineHeight
} from 'components/common/dividers/BarItem/constants';
import { StyledBorder, StyledItem } from 'components/common/dividers/BarItem/styles';
import { subPageSpanHeight } from 'components/common/typography/special/constants';
import { SubPageSpan } from 'components/common/typography/special';
import { useStore } from 'effector-react';
import { themeStores } from 'stores/theme';
import { Path } from 'types';

interface Props extends Path {
    active?: boolean;
    namePage?: string;
    onClick: (path: string) => void;
    withoutBorderLine?: boolean;
}

export const BarItem: FC<Props> = ({ path, onClick, active, children, namePage, withoutBorderLine }) => {
    const { primaryColor } = useStore(themeStores.theme);

    return (
        <StyledItem key={path} onClick={() => onClick(path)}>
            <Column alignCenter>
                <Span
                    color={active ? (!namePage ? primaryColor : inactiveColor) : inactiveColor}
                    fontSize={spanFontSize}
                    fontWeight={spanFontWeight}
                    lineHeight={spanLineHeight}
                    opacity={1}
                >
                    {children}
                </Span>
                {namePage && (
                    <Row height={subPageSpanHeight} marginBottom="5px" marginTop="8px">
                        <SubPageSpan>{namePage}</SubPageSpan>
                    </Row>
                )}
                {active && !withoutBorderLine && <StyledBorder />}
            </Column>
        </StyledItem>
    );
};
