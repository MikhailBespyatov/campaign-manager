import styled from 'styled-components';
import { BackgroundColor, Sizes } from 'types';
import { white } from 'constants/styles';
import { copyButtonDiameter } from 'components/common/buttons/ImgButton/constants';
import { ContentWrapper } from 'components/grid/wrappers/NewDesign/ContentWrapper';

interface CopyButtonWrapper extends BackgroundColor, Sizes {}

export const CopyButtonWrapper = styled(ContentWrapper)<CopyButtonWrapper>`
    width: ${({ width }) => width || copyButtonDiameter};
    height: ${({ height }) => height || copyButtonDiameter};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ backgroundColor }) => backgroundColor || white};
    cursor: pointer;
`;
