import React from 'react';

import {
    Container,
} from './styles';

import ControlPanel from '../ControlPanel';
import NavMenue from '../NavMenu';
import DetailList from '../DetailList';

export default () => {
    return (
        <Container>
            <ControlPanel />
            <NavMenue />
            <DetailList />
        </Container>
    );
};
