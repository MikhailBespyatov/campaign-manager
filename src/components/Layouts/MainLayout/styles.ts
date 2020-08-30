import {
    wrapperBackground,
    wrapperBorderRadius,
    wrapperBoxShadow,
    wrapperHorizontalPadding,
    wrapperVerticalPadding
} from 'components/Layouts/MainLayout/constants';
import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column:
  width: 100%;
  border-radius: ${wrapperBorderRadius};
  background: ${wrapperBackground};
  padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
  boc-shadow: ${wrapperBoxShadow};
`;
