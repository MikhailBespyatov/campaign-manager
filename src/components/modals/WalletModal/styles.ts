import styled from 'styled-components';
import { Visibility } from 'types';
import { flexCenter, grey4, primaryPadding, white } from 'constants/styles';
import {
    modalBackground,
    modalBorderRadius,
    modalBoxShadow,
    modalHorizontalPadding,
    modalVerticalPadding,
    wrapperBackground,
    wrapperHorizontalPadding,
    wrapperVerticalPadding
} from 'components/modals/QexWidgetModal/constants';
import { modalWidth } from './constants';
import { Span } from 'components/common/typography/Span';

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
    max-width: ${modalWidth};
    height: ${modalWidth};
    border-radius: ${modalBorderRadius};
    box-shadow: ${modalBoxShadow};
    background: ${modalBackground};
    margin: auto;
    padding: ${modalVerticalPadding} ${modalHorizontalPadding};
    z-index: 10;
`;

export const WalletTitleSpan = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 1px;
    color: ${white};
`;

export const WalletSubtitleSpan = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: ${grey4};
`;

export const WalletBalanceSpan = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: white;
`;

export const CurrencySpan = styled(Span)`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
`;
