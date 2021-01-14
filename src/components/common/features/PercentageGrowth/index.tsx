import bottomGrowImg from 'assets/img/bottom_grow.svg';
import forcedArrowImg from 'assets/img/forced_arrow_img.svg';
import topGrowImg from 'assets/img/top_grow.svg';
import { arrowImgHeight, arrowImgWidth } from 'components/common/features/PercentageGrowth/constants';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { TableSubSpan } from 'components/common/typography/TableSubSpan';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { errorColor, successColor } from 'constants/styles';
import React, { FC } from 'react';
import { ForcedColor, InfoType } from 'types';

interface Props extends ForcedColor {
    type?: InfoType;
    isPlusStyle?: boolean;
}

export const PercentageGrowth: FC<Props> = ({ type, forcedColor, isPlusStyle, children }) => (
    <Row alignCenter noWrap marginBottom="0">
        {!isPlusStyle && (
            <CustomImg
                height={arrowImgHeight}
                rotate={type === 'error' ? 0 : 180}
                src={forcedColor ? forcedArrowImg : type === 'error' ? bottomGrowImg : topGrowImg}
                width={arrowImgWidth}
            />
        )}
        <TableSubSpan color={forcedColor ? forcedColor : type === 'error' ? errorColor : successColor}>
            {isPlusStyle && type === 'error' ? '- ' : '+ '}
            {children}%
        </TableSubSpan>
    </Row>
);
