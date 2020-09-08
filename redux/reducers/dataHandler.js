import { shape, string } from "prop-types";

let storage = [];

const data = (store = [], { type, payload }) => {
    switch (type) {
        case 'SET_PARSED_DATA':
            const sorted = payload.sort((a, b) => {
                const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0;
            })
            storage = [...sorted];
            return [...sorted];
        case 'SET_TEXT_VALUE':
            const findСoincidence = storage.filter(({ name }) => name.indexOf(payload) >= 0);
            return [...findСoincidence];
        default:
            return store;
    }
};

data.propTypes = {
    type: string.isRequired,
    payload: shape({}).isRequired,
};

export default data;
