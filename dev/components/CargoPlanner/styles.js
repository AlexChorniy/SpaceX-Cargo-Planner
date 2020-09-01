import styled from "styled-components";

export const Container = styled.div`
    background-color: grey;
    min-height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-areas:
    "c c c c c c c c"
    "n n n d d d d d";
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 15% 1fr;
`;

export const DetailList = styled.div`
    background-color: greenyellow;
    grid-area: d;
`;