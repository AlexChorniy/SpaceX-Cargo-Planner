import React from 'react';

import {
    DetailContainer,
    List,
    Item,
} from './detailListStyle';

import DetailItem from './DetailItems';

export default ({ data, isLS }) => {
    return (
        <DetailContainer>
            <List>
                {
                    isLS
                        ? <DetailItem />
                        : <Item color={'red'}>Please load the file in *.json format</Item>
                }
            </List>
        </DetailContainer>
    )
};
