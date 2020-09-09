import styled from "styled-components";

export const InputLabel = styled.label`
    background-color: #F9F9F9;
    height: 30px;
    line-height: 30px;
    width: 100%;
    color: #A7A7A7;
    padding-left: 5px;
    padding-right: 5px;
`;

export const TextInput = styled.input.attrs(() => ({
    autocomplete: "off",
    // defaultValue: 
}))`
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	position: absolute;
	z-index: -1;
`;