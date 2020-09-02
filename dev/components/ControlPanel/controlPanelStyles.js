import styled from "styled-components";

export const ControlPanel = styled.div`
    background-color: teal;
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
`;

export const Banner = styled.div`
    width: 25%;
    font-weight: bold;
    text-align: center;
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

export const InputLabel = styled.label`
    background-color: #F9F9F9;
    height: 30px;
    line-height: 30px;
    width: 100%;
    color: #A7A7A7;
`;

export const TextInput = styled.input.attrs(() => ({
    autocomplete: "off",
}))`
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	position: absolute;
	z-index: -1;
`;

export const Buttons = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-evenly;
`;

export const LoadButton = styled.label`
    height: 30px;
    width: 60px;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
    background-color: rosybrown;
    border-radius: 5px;
`;

export const UploadElement = styled.input.attrs(() => ({
    type: 'file',
}))`
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	position: absolute;
	z-index: -1;
`;

export const SaveButton = styled.div`
    height: 30px;
    width: 60px;
    text-align: center;
    line-height: 30px;
    background-color: darkmagenta;
    font-weight: bold;
    border-radius: 5px;
`;
