import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";

import CargoPlanner from './CargoPlanner';
import GlobalStyles from '../assets/global.styles';
import { workWithLS } from '../assets/helpers';
import { isLSExist } from '../../redux/actions'


const App = ({ isExist }) => {
    // workWithLS.setData('dataList', [1, 2, 3, 5]);
    const isLS = !!workWithLS.getData('dataList');
    // console.log(isLS);
    isExist(isLS);

    return (
        <Wrapper>
            <CargoPlanner />
            <GlobalStyles />
        </Wrapper>
    )
};

const Wrapper = styled.div`
    background-color: transparent;
    min-height: 100vh;
    width: 90%;
    margin: 0 auto;
`;

export default connect(
    store => ({}),
    { isExist: isLSExist },
)(App);

