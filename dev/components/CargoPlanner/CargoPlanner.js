import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {
    Container,
} from './styles';

import ControlPanel from '../ControlPanel';
import NavMenue from '../NavMenu';
import DetailList from '../DetailList';

export default () => {
    return (
        <Container>
            <Router>
                <ControlPanel />
                <NavMenue />
                <Switch>
                    <Route path="/">
                        <DetailList />
                    </Route>
                </Switch>
            </Router>

        </Container>
    );
};
