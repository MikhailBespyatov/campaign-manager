import React, { FC } from 'react';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { CampaignStatusWrapper, RemainingText, StatusText } from './styles';
import { useStore } from 'effector-react';
import { themeStores } from 'stores/theme';
import { red } from 'constants/styles';
import pauseImg from 'assets/img/paused.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Status } from 'types';

interface Props extends Status {
    daysRemaining?: number;
}

export const CampaignStatus: FC<Props> = ({ status, daysRemaining }) => {
    const { primaryColor } = useStore(themeStores.theme);
    const color = status === 'paused' || status === 'expired' ? red : primaryColor;

    return (
        <CampaignStatusWrapper>
            <Row alignCenter marginBottom="0">
                {status === 'paused' && (
                    <MarginWrapper marginRight="8px">
                        <CustomImg src={pauseImg} />
                    </MarginWrapper>
                )}
                <StatusText color={color}>{status}</StatusText>
            </Row>
            {status === 'running' && <RemainingText>{`${daysRemaining} Days Remaining`}</RemainingText>}
        </CampaignStatusWrapper>
    );
};
