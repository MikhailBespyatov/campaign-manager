import { gridGap } from 'components/grid/Card/constants';
import styled from 'styled-components';

export const CardCatalogGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    @media (min-width: 715px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1022px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1328px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1634px) {
        grid-template-columns: repeat(5, 1fr);
    }
    @media (min-width: 1940px) {
        grid-template-columns: repeat(6, 1fr);
    }

    gap: ${gridGap};
    grid-auto-rows: auto;
    justify-items: center;
`;
