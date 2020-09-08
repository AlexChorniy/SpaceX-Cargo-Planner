import styled from "styled-components";

export const DetailContainer = styled.div`
background-color: dimgray;
grid-area: d;
overflow: auto;
`;

export const List = styled.ul``;

export const Item = styled.li`
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 10px;
    font-family: OpenSansItalic;
    font-weight: normal;
    font-style: normal;
    font-size: 14px;
    color: whitesmoke;
    color: ${({ color }) => color || 'white'};
`;
