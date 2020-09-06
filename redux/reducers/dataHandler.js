import { shape, string } from "prop-types";

const data = (store = [], { type, payload }) => {

    const data = {
        'SET_PARSED_DATA': arr => store = [...store, ...arr],
    }
    data[type] && data[type](payload);
    return store;
};

data.propTypes = {
    type: string.isRequired,
    payload: shape({}).isRequired,
};

export default data;
