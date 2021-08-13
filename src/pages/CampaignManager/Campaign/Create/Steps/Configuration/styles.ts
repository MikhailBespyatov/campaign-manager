import { CheckboxProps } from 'components/FormComponents/inputs/BooleanCheckbox/types';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { blue, blue2, grey4, grey6, grey8, white } from 'constants/styles';
import styled, { css } from 'styled-components';
import { MaxSizes, Sizes } from 'types';

export const ConfigurationItemWrapper = styled(Row)`
    padding: 0px 20px;
    width: 100%;
    max-width: 1200px;
    margin: 16px 0px;
    flex-wrap: wrap;

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ConfigurationItemTitle = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    text-transform: uppercase;
`;

export const ConfigurationItemSubtitle = styled.span`
    width: 350px;
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

interface CheckboxBlockWrapperProps extends Pick<MaxSizes, 'maxWidth'>, Partial<Pick<CheckboxProps, 'checked'>> {}

export const CheckboxBlockWrapper = styled(ContentWrapper)<CheckboxBlockWrapperProps>`
    width: 350px;
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

export const RowWrapper = styled(Row)`
    margin-bottom: 16px;
    min-width: 350px;
    width: 50%;

    @media (max-width: 850px) {
        width: 100%;
        justify-content: center;
    }
`;

export const ColumnWrapper = styled(Column)<Pick<Sizes, 'height'>>`
    width: 50%;

    @media (max-width: 850px) {
        width: 100%;
        align-content: center;
    }
`;

export const AgeBlockWrapper = styled(Column)<Pick<Sizes, 'height'>>`
    height: 218px;

    @media (max-width: 1540px) {
        width: 100%;
        height: fit-content;
        align-content: flex-start;
    }
    @media (max-width: 850px) {
        width: 100%;
        height: fit-content;
        align-content: center;
    }
`;

//
// export const BiasSelectWrapper = styled(ContentWrapper)`
//     border: 1px solid ${grey8};
// `;
