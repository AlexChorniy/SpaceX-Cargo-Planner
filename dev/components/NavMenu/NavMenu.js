import React from 'react';

import { Link } from "react-router-dom";

import {
    NavContainer,
    List,
    Item,
} from './navStyles';

export default ({ data, isLS, setLink }) => {

    const Items = (
        data?.map((item) => (
            <List key={item.id}>
                <Item  >
                    <Link key={item.id} to={`/${item.name}`} onClick={event => setLink(item)}>
                        {item.name}
                    </Link>
                </Item>
            </List>
        ))
    );

    return (
        <NavContainer>
            {
                isLS
                    ? Items
                    : ''
            }
        </NavContainer>
    )
};
