import { copyIconDiameter } from 'components/common/buttons/CopyButton/constants';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import styled from 'styled-components';

interface CopyButtonImgProps {
    disabled?: boolean;
}

export const CopyButtonImg = styled(CustomImg)<CopyButtonImgProps>`
    height: ${copyIconDiameter};
    width: ${copyIconDiameter};
    ${({ disabled }) => disabled && `cursor: not-allowed; opacity: 0.4;`}
`;
