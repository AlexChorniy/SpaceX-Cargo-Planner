import styled from "styled-components";

export const Item = styled.li`
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 10px;
    font-family: OpenSansItalic;
    font-weight: normal;
    font-style: normal;
    font-size: 18px;
    color: whitesmoke;
    color: ${({ color }) => color || 'white'};
`;

export const Title = styled.h5`
    margin-top: 2px;
    margin-bottom: 2px;
`;

export const Email = styled.div`
    margin-top: 2px;
    margin-bottom: 2px;
`;

export const CargoBays = styled.div`
    margin-top: 2px;
    margin-bottom: 2px;
`;

export const CargoBoxes = styled.input`
    margin-top: 2px;
    margin-bottom: 2px;
`;
