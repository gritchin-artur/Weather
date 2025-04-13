/**
 * Check if a number is am or pm
 *
 * @param {number} num - The number to check if it is am or pm
 * @returns {string} - Returns what half of the day it is
 */

const getDivisionDay = (hour) => {
    if (hour >= 12) {
        return `${hour - 12} PM`;
    } else if (hour < 12) {
        return `${hour} AM`;
    }
};

export default getDivisionDay;
