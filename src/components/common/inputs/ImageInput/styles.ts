import styled from 'styled-components';
import { buttonDiameter } from 'components/common/buttons/AddImageButton/constants';
import { grey5 } from 'constants/styles';

export const HiddenInput = styled.input`
    opacity: 0;
    height: ${buttonDiameter};
    width: ${buttonDiameter};
    cursor: pointer;
`;

export const PreviewWrapper = styled.div`
    height: ${buttonDiameter};
    width: ${buttonDiameter};
    border: 1px solid ${grey5};
    border-radius: 50%;
    overflow: hidden;
`;

export const PreviewImage = styled.img`
    height: ${buttonDiameter};
    width: ${buttonDiameter};
`;
