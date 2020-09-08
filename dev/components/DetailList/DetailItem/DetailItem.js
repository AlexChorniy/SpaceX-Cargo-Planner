import React, { useState, useEffect } from 'react';

import {
    Item,
    Title,
    Email,
    CargoBays,
    CargoBoxes,
} from './detailItemStyle';

export default ({ data, id, index }) => {
    const { name, email, id: itemId, boxes } = data[index];
    const [bays, setBays] = useState(0);
    const [itemBoxes, setBoxes] = useState(boxes);

    useEffect(() => {
        const baysAmount = (itemBoxes.split(',').reduce((acc, num) => +acc + +num, 0) / 10);
        setBays(Math.ceil(baysAmount));
    }, [id, index]);


    return (
        <Item color={'white'}>
            <Title>{name}</Title>
            <Email>{email}</Email>
            <CargoBays>
                Number of required
                cargo bays is {bays}
            </CargoBays>
            <CargoBoxes defaultValue={itemBoxes} />
        </Item>
    )
};
