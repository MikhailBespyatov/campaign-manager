import styled from 'styled-components';
import { disableDefaultButtonStyleMixin, grey11, grey5 } from 'constants/styles';
import { buttonDiameter } from 'components/common/buttons/AddImageButton/constants';

export const Button = styled.button`
    ${disableDefaultButtonStyleMixin};
    height: ${buttonDiameter};
    width: ${buttonDiameter};
    background: ${grey11};
    border: 1px solid ${grey5};
    border-radius: 50%;
    padding: 34px;
`;
