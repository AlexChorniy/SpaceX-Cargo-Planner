import React, { useState, useEffect } from 'react';

import {
    Item,
    Title,
    Email,
    CargoBays,
    CargoBoxes,
} from './detailItemStyle';

import { debounce } from '../../../assets/helpers'

export default ({ data, id, index, changeItemBoxVal }) => {
    const { name, email, id: itemId, boxes } = data[index];
    const [bays, setBays] = useState(0);

    useEffect(() => {
        const baysAmount = boxes && (boxes.split(',').reduce((acc, num) => +acc + +num, 0) / 10);
        const baysRound = Math.ceil(baysAmount) || 0;
        setBays(baysRound);
    }, [id, index, data]);

    const boxesChangeHdr = e => {
        const newBoxVal = e.target.value;

        debBoxesHandler({ value: newBoxVal, id });
    }

    const debBoxesHandler = debounce(changeItemBoxVal, 300);

    return (
        <Item color={'white'}>
            <Title>{name}</Title>
            <Email>{email}</Email>
            <CargoBays>
                Number of required
                cargo bays is {bays}
            </CargoBays>
            <CargoBoxes onChange={boxesChangeHdr} defaultValue={boxes} />
        </Item>
    )
};
