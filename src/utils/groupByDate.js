/**
 * Splits an array by dates
 *
 * @param {object} timestamps - The array of date
 * @returns {object} - Returns sorting object by date
 */

const groupByDay = (timestamps) => {
    const days = {};

    timestamps.forEach((datetime) => {
        const [date] = datetime.split('T');
        if (!days[date]) {
            days[date] = [];
        }
        days[date].push(datetime);
    });

    return days;
};

export default groupByDay;
