import { bool, string } from "prop-types";

const isLSExist = (store = false, { type, payload }) => {

    const boolVal = {
        'IS_LS_EXIST': val => store = val,
    }

    boolVal[type] && boolVal[type](payload);

    return store;
};

isLSExist.propTypes = {
    type: string.isRequired,
    payload: bool.isRequired,
};

export default isLSExist;
