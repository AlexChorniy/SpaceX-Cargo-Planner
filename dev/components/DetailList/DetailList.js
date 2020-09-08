import React from 'react';

import {
    DetailContainer,
    List,
    Item,
} from './detailListStyle';

import DetailItem from './DetailItem';

export default ({ data, isLS }) => {

    const Items = () => (
        data?.map((item, idx) => {
            return (
                <DetailItem key={item.id} id={item.id} index={idx} />
            )
        })
    );

    return (
        <DetailContainer>
            <List>
                {
                    isLS
                        ? <Items />
                        : <Item color={'red'}>Please load the file in *.json format</Item>
                }
            </List>
        </DetailContainer>
    )
};
