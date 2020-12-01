import styled from 'styled-components';

export const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 32px;

    @media only screen and (max-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;