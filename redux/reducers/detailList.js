import { shape, string } from "prop-types";

const detail = (store = [], { type, payload }) => {
    switch (type) {
        case 'SET_LINK':
            return [...new Set([...store, payload])];
        default:
            return store;
    }
};

detail.propTypes = {
    type: string.isRequired,
    payload: shape({}).isRequired,
};

export default detail;
