import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
    background-color: #537072;
    height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-areas:
    "c c c c c c c c"
    "n n n d d d d d";
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 15% 1fr;
`;
