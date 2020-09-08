import React from 'react';

import {
    NavContainer,
    List,
    Item,
    StyledLink,
} from './navStyles';

export default ({ data, isLS, setLink }) => {

    const Items = (
        data?.map((item) => (
            <List key={item.id}>
                <Item  >
                    <StyledLink key={item.id} to={`/${item.name}`} onClick={event => setLink(item)}>
                        {item.name}
                    </StyledLink>
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
