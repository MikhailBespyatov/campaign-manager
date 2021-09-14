import { CheckboxProps } from 'components/FormComponents/inputs/BooleanCheckbox/types';
import { FixedWrapper } from 'components/grid/wrappers/FixedWrapper';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';
import { black, blue, blue10, blue2, grey4, grey8, white } from 'constants/styles';
import styled, { css } from 'styled-components';
import { IsClosed, MaxSizes, Sizes } from 'types';

export const ShowAllButton = styled.button`
    border: none;
    background-color: transparent;
    color: ${blue10};
    cursor: pointer;
`;

interface ClearButton {
    height?: string;
}

export const ClearButton = styled.button<ClearButton>`
    position: relative;
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:before,
    &:after {
        position: absolute;
        left: 9px;
        top: 3px;
        content: '';
        width: 2px;
        height: ${({ height }) => height || '14px'};
        background-color: ${black};
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`;

export const ConfigurationItemWrapper = styled(Row)`
    padding: 0;
    padding-left: 90px;
    width: 100%;
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
    background-color: ${blue};
    border-radius: 22.5px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    cursor: pointer;
    color: ${white};
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

export const CountryBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 8px;
    min-width: 70px;
    height: 26px;
    border: 1px solid #c6c7d1;
    box-sizing: border-box;
    border-radius: 32px;
`;

export const SelectBlock = styled(Row)`
    position: relative;
    padding: 0 24px;
    width: 361px;
    height: 64px;
    background-color: ${blue2};
`;

export const HashtagSelectBlock = styled(SelectBlock)`
    padding: 0 18px;
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

export const CountryBlockWrapper = styled(Row)`
    width: 100%;

    @media (max-width: 950px) {
        width: 100%;
        align-content: center;
    }
`;

export const AllCountryModalWrapper = styled(FixedWrapper)`
    left: 50%;
    top: 50%;
    transform: translateX(-245px) translateY(-203px);
    width: 491px;
    height: 407px;
    background: ${white};
    border-radius: 40px;
    z-index: 10;
`;

export const AllCreatorsModalWrapper = styled(FixedWrapper)`
    left: 50%;
    top: 50%;
    transform: translateX(-317px) translateY(-304px);
    width: 633px;
    height: 608px;
    background: ${white};
    border-radius: 40px;
    z-index: 10;
`;

export const CountryListWrapper = styled.div`
    width: 491px;
    height: 325px;
    overflow: hidden;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const CreatorListWrapper = styled.div`
    width: 633px;
    height: 608px;
    overflow: hidden;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const HiddenScrollBar = styled.div`
    width: 105%;
    height: 100%;
    overflow-y: scroll;
    padding-right: 17px;
    box-sizing: content-box;
`;

export const ModalItemWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 65px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    &:last-child {
        border-bottom: none;
    }
`;

export const GrayWrapper = styled(FixedWrapper)<IsClosed>`
    position: fixed;
    top: -50%;
    left: 0;
    right: 0;
    width: 100%;
    height: 150%;
    z-index: 9;
    background: rgba(0, 0, 0, 0.26);
    display: ${({ isClosed }) => (isClosed ? 'none' : 'block')};
`;

//
// export const BiasSelectWrapper = styled(ContentWrapper)`
//     border: 1px solid ${grey8};
// `;
