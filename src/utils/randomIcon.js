const randomIcon = () => {
    const icons = {
        sunny: '☀️',
        rain: '🌧️',
        wind: '🌬️',
        cloud: '☁️',
        partlyCloudy: '🌤️'
    };

    const emojiValues = Object.values(icons);
    const randomEmoji =
        emojiValues[Math.floor(Math.random() * emojiValues.length)];

    return randomEmoji;
};

export default randomIcon;
