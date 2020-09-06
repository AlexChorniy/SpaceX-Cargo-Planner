import React from 'react';

import {
    NavContainer,
    List,
    Item,
} from './navStyles';

export default ({ data, isLS }) => {
    const Items = (
        data?.map((item, idx) => (
            <Item key={item.id}>{item.name}</Item>
        ))
    );

    return (
        <NavContainer>
            <List>
                {
                    isLS
                        ? Items
                        : ''
                }
            </List>
        </NavContainer>
    )
};
