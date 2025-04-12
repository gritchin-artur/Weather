import getWeather from '../api/getWeather.js';
import groupByDay from './utils/groupByDate.js';
import createCards from './components/weatherCard.js';

const getApiWeather = async () => {
    const data = await getWeather();
    const dataGrouped = groupByDay(data.hourly.time);
    const temp = data.hourly.temperature_2m;
    const degreeCelsius = data.hourly_units.temperature_2m;
    console.log(data);
    createCards(dataGrouped, temp, degreeCelsius);
};

export default getApiWeather;
