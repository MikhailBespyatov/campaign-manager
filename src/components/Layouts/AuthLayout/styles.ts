import { mainPadding } from 'components/Layouts/AuthLayout/constants';
import styled from 'styled-components';
import { Background } from 'types';

export const Main = styled.main<Background>`
  //position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column:
  ${({ background }) => (background ? `background: ${background};` : ``)};
  margin: auto;
  padding: ${mainPadding};

`;
