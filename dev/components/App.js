import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";

import CargoPlanner from './CargoPlanner';
import GlobalStyles from '../assets/global.styles';
import { workWithLS } from '../assets/helpers';
import { isLSExist, setParsedData } from '../../redux/actions'


const App = ({ isExist, setParsed }) => {
    useEffect(() => {
        const LSData = workWithLS.getData('dataList');
        if (LSData) {
            setParsed(JSON.parse(LSData));
            isExist(true);
        } else isExist(false)
    }, [isExist, setParsed]);

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
    {
        isExist: isLSExist,
        setParsed: setParsedData,
    },
)(App);

