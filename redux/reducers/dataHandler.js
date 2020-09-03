import { shape, string } from "prop-types";

const data = (store = [], { type, payload }) => {

    const data = {
        'SET_PARSED_DATA': arr => store = [...store, ...arr],
    }
    const result = payload ? data[type](payload) : store;
    return result;
};

data.propTypes = {
    type: string.isRequired,
    payload: shape({}).isRequired,
};

export default data;
