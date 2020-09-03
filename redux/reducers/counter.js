const counter = (store = 2, { type }) => {
    switch (type) {
        case 'INCREMENT':
            return store + 2;
        case 'DECREMENT':
            return store - 1;
        default:
            return store;
    }
};

export default counter;
