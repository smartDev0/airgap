// TODO: currying
const whenKey = (code, cb) => (event) => {
    if (event.key === code) {
        cb(event);
    }
};

export default whenKey;
