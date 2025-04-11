import dom from '../dom.js';
import randomIcon from '../utils/randomIcon.js';
import getDivisionDay from '../utils/getDivisionDay.js';

const createCards = (dataGrouped, temp, degreeCelsius) => {
    Object.entries(dataGrouped).forEach(([dateKey, timeArray], index) => {
        const date = document.createElement('h2');
        date.classList.add('date');
        date.innerText = dateKey;
        dom.weatherCard.append(date);

        const ul = document.createElement('ul');
        ul.classList.add('cardList');
        timeArray.forEach((time, i) => {
            const hour = getDivisionDay(time.split('T')[1].slice(0, 2));
            const temperature = temp[index * 24 + i];

            const li = document.createElement('li');
            li.classList.add('card');
            const timeCard = document.createElement('p');
            timeCard.classList.add('cardTime');
            timeCard.innerText = hour;

            const tempCard = document.createElement('p');
            tempCard.classList.add('cardTemp');
            tempCard.style.color = temperature > 10 ? 'red' : 'blue';
            tempCard.innerText = `${temperature} ${degreeCelsius}`;

            const iconCard = document.createElement('p');
            iconCard.classList.add('iconCard');
            iconCard.innerHTML = randomIcon();

            li.append(timeCard, iconCard, tempCard);
            ul.appendChild(li);
        });

        dom.weatherCard.appendChild(ul);
    });
};

export default createCards;
