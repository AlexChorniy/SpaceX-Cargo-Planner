import styled from "styled-components";

export const ControlPanel = styled.div`
    background-color: #537072;
    grid-area: c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    font-family: OpenSansItalic;
    font-weight: normal;
    font-style: normal;
    font-size: 14px;
    position: relative;
    color: #F1F1F2;
`;

export const Banner = styled.div`
    width: 25%;
    font-weight: bold;
    text-align: center;
    font-size: 21px;
`;

export const SearchContainer = styled.div`
    background-color: goldenrod;
    display: flex;
    width: 51%;
    border-radius: 5px;
    overflow: hidden;
`;

export const SearchIcon = styled.div`
    background-color: honeydew;
    width: 30px;
    height: 30px;
`;

export const Buttons = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 707px) {
        flex-direction: column;
        align-items: center;
    }
`;
