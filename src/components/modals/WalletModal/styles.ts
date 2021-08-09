import { Span } from 'components/common/typography/Span';
import {
    modalBackground,
    modalBoxShadow,
    modalVerticalPadding,
    wrapperBackground,
    wrapperHorizontalPadding,
    wrapperVerticalPadding
} from 'components/modals/QexWidgetModal/constants';
import { flexCenter, grey4, primaryPadding, white } from 'constants/styles';
import styled from 'styled-components';
import { Visibility } from 'types';
import { modalBorderRadius, modalWidth } from './constants';

export const Wrapper = styled.div<Visibility>`
    position: fixed;
    top: 0;
    left: 0;
    ${flexCenter};
    width: 100%;
    height: 100vh;
    background: ${wrapperBackground};
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
    padding-bottom: ${primaryPadding};
    display: ${({ visible }) => (visible ? 'block' : 'none')};
    z-index: 9;
    overflow: auto;
`;

export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    max-width: ${modalWidth};
    border-radius: ${modalBorderRadius};
    box-shadow: ${modalBoxShadow};
    background: ${modalBackground};
    margin: auto;
    padding: ${modalVerticalPadding} 0px 0px;
    z-index: 10;
`;

export const WalletTitleSpan = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 1px;
    color: ${white};
`;

export const WalletSubtitleSpan = styled.div`
    min-width: 160px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: ${grey4};
`;

export const WalletBalanceSpan = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: white;
`;

export const CurrencySpan = styled(Span)`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
`;
