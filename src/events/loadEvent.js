import getApiWeather from '../data.js';

const loadWindow = () => {
    window.addEventListener('load', getApiWeather);
};

export default loadWindow;
