import React from 'react';

import CargoPlanner from './components/CargoPlanner';
import GlobalStyles from './assets/global.styles';

import styled from "styled-components";

const App = () => (
    <Wrapper>
        <CargoPlanner />
        <GlobalStyles />
    </Wrapper>
);

const Wrapper = styled.div`
    background-color: transparent;
    min-height: 100vh;
`;

export default App;
