import { shape, string } from "prop-types";

const detail = (store = [], { type, payload }) => {
    switch (type) {
        case 'SET_LINK':
            return [...new Set([...store, payload])];
        case 'CHANGE_ITEM_BOX_VALUE':
            const { value, id } = payload;
            const newStore = store.map((item) => item.id === id ? ({ ...item, ...{ boxes: value } }) : item);
            return [...newStore];
        default:
            return store;
    }
};

detail.propTypes = {
    type: string.isRequired,
    payload: shape({}).isRequired,
};

export default detail;
