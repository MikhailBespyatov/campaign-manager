import bottomGrowImg from 'assets/img/bottom_grow.svg';
import topGrowImg from 'assets/img/top_grow.svg';
import { arrowImgHeight, arrowImgWidth } from 'components/common/features/PercentageGrowth/constants';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { TableSubSpan } from 'components/common/TextComponents/TableSubSpan';
import { Row } from 'components/common/wrappers/FlexWrapper';
import React, { FC } from 'react';
import { infoType } from 'types';
import { errorColor, successColor } from '../../../../constants';

interface Props {
    type?: infoType;
}

export const PercentageGrowth: FC<Props> = ({ type, children }) => (
    <Row alignBaseline noWrap marginBottom="0">
        <CustomImg
            height={arrowImgHeight}
            rotate={type === 'error' ? 0 : 180}
            src={type === 'error' ? bottomGrowImg : topGrowImg}
            width={arrowImgWidth}
        />
        <TableSubSpan color={type === 'error' ? errorColor : successColor}>{children}%</TableSubSpan>
    </Row>
);
