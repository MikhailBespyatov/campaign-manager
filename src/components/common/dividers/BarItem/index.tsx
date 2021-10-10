import { inactiveColor, subPageTitleMarginTop } from 'components/common/dividers/BarItem/constants';
import { StyledBarText, StyledItem } from 'components/common/dividers/BarItem/styles';
import { SubPageSpan } from 'components/common/typography/special';
import { subPageSpanHeight } from 'components/common/typography/special/constants';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { RelativeWrapper } from 'components/grid/wrappers/RelativeWrapper';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { themeStores } from 'stores/theme';
import { Path } from 'types';

interface Props extends Path {
    active?: boolean;
    namePage?: string;
    onClick: (path: string) => void;
    withoutBorderLine?: boolean;
}

export const BarItem: FC<Props> = ({ path, onClick, active, children, namePage }) => {
    const { primaryColor } = useStore(themeStores.theme);

    return (
        <StyledItem key={path} onClick={() => onClick(path)}>
            <RelativeWrapper>
                <Column alignCenter>
                    <StyledBarText
                        color={active && !namePage ? primaryColor : inactiveColor}
                        // opacity={1}
                    >
                        {children}
                    </StyledBarText>
                    {namePage && (
                        <AbsoluteWrapper bottom={subPageTitleMarginTop} left="0" width="100%">
                            <Row justifyCenter height={subPageSpanHeight} marginBottom="5px">
                                <SubPageSpan>{namePage}</SubPageSpan>
                            </Row>
                        </AbsoluteWrapper>
                    )}
                    {/* {active && !withoutBorderLine && <StyledBorder />} */}
                </Column>
            </RelativeWrapper>
        </StyledItem>
    );
};
