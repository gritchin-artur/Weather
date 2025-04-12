const getDivisionDay = (hour) => {
    if (hour >= 12) {
        return `${hour - 12} PM`;
    } else if ((hour = 12)) {
        return `${hour} AM`;
    }
};

export default getDivisionDay;
