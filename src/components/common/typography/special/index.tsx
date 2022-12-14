import { Span } from 'components/common/typography/Span';
import { percentageSpanColor, subPageSpanHeight } from 'components/common/typography/special/constants';
import { SmallSpanProps } from 'components/common/typography/special/types';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { defaultFontSize, defaultFontWeight } from 'constants/defaults';
import { primaryColor, secondaryColor, white } from 'constants/styles';
import React, { FC } from 'react';
import { themeStores } from 'stores/theme';

export const Subtitle: FC = ({ children }) => (
    <Span fontSize="18px" fontWeight="700" lineHeight="28px">
        {children}
    </Span>
);

export const SmallSpan: FC<SmallSpanProps> = ({ children, opacity }) => (
    <Span fontSize="12px" lineHeight="20px" opacity={opacity ? opacity : 0.4}>
        {children}
    </Span>
);

export const PercentageSpan: FC = ({ children }) => (
    <Span color={percentageSpanColor} fontSize={defaultFontSize} lineHeight="22px">
        {children}
    </Span>
);

export const EngagementSpan: FC = ({ children }) => (
    <Span fontSize={defaultFontSize} lineHeight="22px">
        {children}
    </Span>
);

export const TableHeaderSpan: FC = ({ children }) => (
    <Column marginRight="15px">
        <Span color={primaryColor} fontSize="8px" lineHeight="10px">
            {children}
        </Span>
    </Column>
);

export const GraphicBlockSpan: FC = ({ children }) => (
    <Span color={secondaryColor} fontSize={defaultFontSize} lineHeight="22px">
        {children}
    </Span>
);

export const RatingSpan: FC = ({ children }) => (
    <Span color={white} fontSize="12px" fontWeight="500" lineHeight="15px">
        {children}
    </Span>
);

export const SubPageSpan: FC = ({ children }) => (
    <Span
        color={themeStores.theme.getState().primaryColor}
        fontSize="13px"
        fontWeight={defaultFontWeight}
        lineHeight={subPageSpanHeight}
    >
        {children}
    </Span>
);

export const QexWidgetDisclaimerSpan: FC = ({ children }) => (
    <Span color={white} lineHeight="20px">
        {children}
    </Span>
);

export * from './styles';

// export const ProductSpan: FC = ({ children }) => (
//     <Span noWrap color={white} fontSize={defaultFontSize} lineHeight="29px">
//         {children}
//     </Span>
// );
