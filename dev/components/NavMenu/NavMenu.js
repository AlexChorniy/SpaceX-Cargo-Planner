import React from 'react';

import {
    NavContainer,
    List,
    Item,
    Link,
} from './navStyles';

export default ({ data, isLS, setLink }) => {

    const linkHandler = (event, item) => {
        event.preventDefault();
        setLink(item);
    };

    const Items = (
        data?.map((item) => (
            <Item key={item.id} >
                <Link href={item.name} onClick={event => linkHandler(event, item)}>
                    {item.name}
                </Link>
            </Item>
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
