import { bool, string } from "prop-types";

const isLSExist = (store = false, { type, payload }) => {
    switch (type) {
        case 'IS_LS_EXIST':
            return payload;
        default:
            return store;
    }
};

isLSExist.propTypes = {
    type: string.isRequired,
    payload: bool.isRequired,
};

export default isLSExist;
