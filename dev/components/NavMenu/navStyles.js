import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
background-color: #78A5A3;
color: #F1F1F2;
grid-area: n;
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
    color: #F1F1F2;
;
    cursor: pointer;
`;

export const StyledLink = styled(Link)`
    color: #F1F1F2;
    text-decoration: none;
    font-size: 18px;
    word-wrap: normal;
    @media (max-width: 536px) {
        font-size: 14px;
        overflow-wrap: break-word;
    }
`;
