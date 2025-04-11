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
