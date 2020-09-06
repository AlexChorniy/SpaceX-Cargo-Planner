import React from 'react';

import {
    DetailContainer,
    List,
    Item,
    Title,
    Email,
    CargoBays,
    CargoBoxes,
} from './detailListStyle';

export default ({ data, isLS }) => {

    const Items = (
        data?.map((item, idx) => (
            <Item key={item.id}>
                <Title>{item.name}</Title>
                <Email>{item.email}</Email>
                <CargoBays>
                    Number of required
                    cargo bays is 34556568
            </CargoBays>
                <CargoBoxes defaultValue={item.boxes} />
            </Item>
        ))
    );

    return (
        <DetailContainer>
            <List>
                {
                    isLS
                        ? Items
                        : <Item>Please load the file in *.json format</Item>
                }
            </List>
        </DetailContainer>
    )
};
