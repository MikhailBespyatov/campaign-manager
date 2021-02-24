import styled, { css } from 'styled-components';
import { blue, blue2, grey4, grey6, grey8, white } from 'constants/styles';
import { Section } from 'components/grid/wrappers/FlexWrapper';
import { ConfigurationItemHorizontalPadding } from 'pages/CampaignManager/Campaign/Create/Steps/Configuration/constants';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { CheckboxProps } from 'components/FormComponents/inputs/BooleanCheckbox/types';

export const ConfigurationItemWrapper = styled(Section)`
    padding: 0 ${ConfigurationItemHorizontalPadding} 25px;
`;

export const ConfigurationItemTitle = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    text-transform: uppercase;
`;

export const ConfigurationItemSubtitle = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: ${grey4};
`;

export const BiasTitle = styled.span`
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    opacity: 1;
`;

export const Hashtag = styled.div`
    padding: 9px 20px;
    background-color: ${grey6};
    border-radius: 22.5px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    cursor: pointer;
`;

export const CheckboxBlockWrapper = styled(ContentWrapper)<Partial<Pick<CheckboxProps, 'checked'>>>`
    height: 64px;
    border: 1px solid ${grey8};
    padding: 12px 18px;

    ${({ checked }) =>
        checked &&
        css`
            background-color: ${blue2};
            border: 1px solid ${blue2};

            ${Hashtag} {
                color: ${white};
                background-color: ${blue};
            }
        `}
`;
//
// export const BiasSelectWrapper = styled(ContentWrapper)`
//     border: 1px solid ${grey8};
// `;
