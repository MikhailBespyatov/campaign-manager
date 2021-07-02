import pauseImg from 'assets/img/paused.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { red } from 'constants/styles';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { themeStores } from 'stores/theme';
import { Status } from 'types';
import { CampaignStatusWrapper, RemainingText, StatusText } from './styles';

interface Props extends Status {
    daysRemaining?: number;
}

export const CampaignStatus: FC<Props> = ({ status, daysRemaining }) => {
    const { primaryColor } = useStore(themeStores.theme);
    const color = status === 'paused' || status === 'expired' ? red : primaryColor;

    return (
        <CampaignStatusWrapper>
            <Row alignCenter marginBottom="2px">
                {status === 'paused' && (
                    <MarginWrapper marginRight="8px">
                        <CustomImg src={pauseImg} />
                    </MarginWrapper>
                )}
                <StatusText color={color}>{status}</StatusText>
            </Row>
            {status === 'running' && (
                <Row alignCenter marginBottom="2px">
                    <RemainingText>{daysRemaining}&nbsp;Days Remaining</RemainingText>
                </Row>
            )}
        </CampaignStatusWrapper>
    );
};
