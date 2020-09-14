import bottomGrowImg from 'assets/img/bottom_grow.svg';
import forcedArrowImg from 'assets/img/forced_arrow_img.svg';
import topGrowImg from 'assets/img/top_grow.svg';
import { arrowImgHeight, arrowImgWidth } from 'components/common/features/PercentageGrowth/constants';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { TableSubSpan } from 'components/common/TextComponents/TableSubSpan';
import { Row } from 'components/common/wrappers/FlexWrapper';
import { errorColor, successColor } from 'constants/styles';
import React, { FC } from 'react';
import { ForcedColor, infoType } from 'types';

interface Props extends ForcedColor {
    type?: infoType;
}

export const PercentageGrowth: FC<Props> = ({ type, forcedColor = '', children }) => (
    <Row alignBaseline noWrap marginBottom="0">
        <CustomImg
            height={arrowImgHeight}
            rotate={type === 'error' ? 0 : 180}
            src={forcedColor ? forcedArrowImg : type === 'error' ? bottomGrowImg : topGrowImg}
            width={arrowImgWidth}
        />
        <TableSubSpan color={forcedColor ? forcedColor : type === 'error' ? errorColor : successColor}>
            {children}%
        </TableSubSpan>
    </Row>
);
