export function debounce(fn, ms) {
    let timeout;
    return function () {
        const fnCall = () => {
            fn.apply(this, arguments);
        };
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms);
    };
};

export const workWithLS = {
    getData(key) {
        return localStorage.getItem(key);
    },
    setData(key, value) {
        localStorage.setItem(key, value);
    },
};
