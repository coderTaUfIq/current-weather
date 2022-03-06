const apiKey = `4d35a9712d57be56e486689d09589f2f`;

let uRl = 'https://api.openweathermap.org/data/2.5/weather?q=rajshahi&appid=4d35a9712d57be56e486689d09589f2f&units=metric';
let cityValue = document.getElementById('city');
let tempValue = document.getElementById('temp');
let conditionVal = document.getElementById('condition');

fetch (uRl)
        .then(res => res.json())
        .then(data => {
            cityValue.innerText = data.name;
            tempValue.innerText = data.main.temp;
            conditionVal.innerText = data.weather[0].main;
            let url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            let imgIcon = document.getElementById('weather-icon');
            imgIcon.setAttribute('src', url);
        })
    


const searchTemp = () => {
    document.getElementById('first-location').style.display = 'none';
    document.getElementById('wind-vis').style.display = 'block';
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch (url)
        .then(res => res.json())
        .then(data => displayTemp(data))
}

const setInnerTxt = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = temperature => {
    setInnerTxt('city', temperature.name);
    setInnerTxt('temp', temperature.main.temp);
    setInnerTxt('condition', temperature.weather[0].main);
    setInnerTxt('wind-spd', temperature.wind.speed);

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}