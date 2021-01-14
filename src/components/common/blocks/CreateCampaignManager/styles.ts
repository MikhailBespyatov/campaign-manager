import styled from 'styled-components';
import {
    headerBackground,
    SelectCampaignHorizontalMargin,
    selectVideoBackgroundColor
} from 'components/common/blocks/CreateCampaignManager/constants';
import { Background } from 'types';

export const HeaderCreateCampaignManager = styled.div`
    background-color: ${headerBackground};
    height: 110px;
    border-radius: 8px;
`;

export const HeaderCreateWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

export const SelectCampaignWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 620px;
`;

export const SelectCampaignBlock = styled.div`
    flex: 1 0 50%;
`;

export const SelectVideoDescription = styled.div`
    height: 100%;
    position: relative;
    margin-right: ${SelectCampaignHorizontalMargin};
    background-color: ${selectVideoBackgroundColor};
`;

export const SelectedVideo = styled.div<Background>`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    ${({ background }) => (background ? `background: ${background};` : ``)};
`;

export const CreateCampaignBlock = styled.div`
    border: 1px solid #cfcfcf;
    height: 100%;
    margin-left: ${SelectCampaignHorizontalMargin};
    display: flex;
    flex-direction: column;
`;

export const CreateCampaignBlockHeader = styled.div`
    display: flex;
    flex-direction: row;
`;
