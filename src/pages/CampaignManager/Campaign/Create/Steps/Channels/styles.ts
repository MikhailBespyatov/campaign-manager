import { CheckboxProps } from 'components/common/inputs/NewDesign/Checkbox';
import { Span } from 'components/common/typography/Span';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { blue2, grey8 } from 'constants/styles';
import { publicChannelsPaddingLeft } from 'pages/CampaignManager/Campaign/Create/Steps/Channels/constants';
import styled from 'styled-components';

export const PublicChannelRadio = styled(Column)`
    width: 100%;
    height: 164px;
    overflow-y: scroll;
    padding-right: ${publicChannelsPaddingLeft};

    ${Section}:last-child {
        margin-bottom: 0;
    }
`;

export const TitlePublicChannel = styled(Span)`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
`;

export const ChannelTableHeader = styled(Section)`
    ${Row} {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        flex: 1;
    }
    height: 48px;
    border: 1px solid ${grey8};
    border-radius: 4px;
`;

export const ChannelTableBody = styled(Column)`
    width: 100%;
`;

export const RowWrapper = styled(Section)<Pick<CheckboxProps, 'checked'>>`
    height: 81px;
    border-bottom: 1px solid #dedede;
    ${({ checked }) => checked && `background: ${blue2};`};
    ${Row} {
        flex: 1;
    }
`;

export const ChannelNameSpan = styled(Span)`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
`;
