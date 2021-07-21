// TODO: currying
const preventDefault = cb => (event) => {
    if (event.preventDefault) {
        event.preventDefault();
    }
    cb(event);
};

export default preventDefault;
