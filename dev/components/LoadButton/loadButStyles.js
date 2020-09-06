import styled from "styled-components";

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
