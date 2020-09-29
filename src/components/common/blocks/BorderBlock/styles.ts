import { wrapperBorder } from 'components/common/blocks/BorderBlock/constants';
import { primaryPadding, secondaryBorderRadius } from 'constants/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: ${wrapperBorder};
    border-radius: ${secondaryBorderRadius};
    margin-right: ${primaryPadding};
    margin-bottom: ${primaryPadding};
    padding: ${primaryPadding};
`;
