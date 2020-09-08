import React, { useState, useEffect } from 'react';

import {
    Item,
    Title,
    Email,
    CargoBays,
    CargoBoxes,
} from './detailItemsStyle';

export default ({ data }) => {
    const [bays, setBays] = useState(0);

    return (
        <>
            {
                data?.map((item) => (
                    <Item key={item.id} color={'white'}>
                        <Title>{item.name}</Title>
                        <Email>{item.email}</Email>
                        <CargoBays>
                            Number of required
                            cargo bays is 34556568
                            </CargoBays>
                        <CargoBoxes defaultValue={item.boxes} />
                    </Item>
                ))
            }
        </>
    )
};
