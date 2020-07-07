const searchBox = document.querySelector('#city');
let tempDivIcon = document.querySelector('.icon-div i img');
let description = document.querySelector('.description')
let temperature = document.querySelector('#degrees');
let feelsLike =  document.querySelector('.temperature-div h3');
let humidity = document.querySelector('#humidity');
let windSpeed = document.querySelector('#wind-speed');
let title = document.querySelector('#title');
let celciusTemp;
let feelsLikeTemp;
let forecastDiv = document.querySelector('.forecast-div');
let units = document.querySelector('#celcius');
let wind;

//api info
let api = {
    key: 'bb8fffb77c233d3391006cd4611ceda9',
    baseurl: 'https://api.openweathermap.org/data/2.5/',
};
//user input data
searchBox.addEventListener('keypress', (event)=>{
    if(event.keyCode == 13){
        getInfo(searchBox.value);
        searchBox.value = '';
    }
})
//data fetch from open weather
let getInfo = (city) =>{
    fetch(`${api.baseurl}weather?q=${city}&units=metric&appid=${api.key}`)
        .then(weatherInfo =>{
            return weatherInfo.json();
        })
        .then(displayWeatherInfo);
}
//data display
let displayWeatherInfo = (object) =>{
    temperature.innerHTML = Math.floor(object.main.temp);
    celciusTemp = Math.floor(object.main.temp);
    feelsLike.innerHTML = 'Feels like ' + Math.floor(object.main.feels_like) + ' ºC';
    feelsLikeTemp = Math.floor(object.main.feels_like)
    description.innerHTML  = object.weather[0].description;
    humidity.innerHTML = object.main.humidity + ' %';
    windSpeed.innerHTML = object.wind.speed + ' KM/H';
    wind = object.wind.speed;
    title.innerHTML = `${object.name}, ${object.sys.country}`;

    let temperatureIcon = document.querySelector('.temperature-div i img');
    if(object.main.temp > 20){
        temperatureIcon.src = 'media/3026240-weather/svg/021-hot temperature.svg';
        tempDivIcon.title = 'Icons by Vitaly Gorbachev - Flaticon.com';
    }else{
        temperatureIcon.src = 'media/3026240-weather/svg/048-low temperatures.svg';
        tempDivIcon.title = 'Icons by Vitaly Gorbachev - Flaticon.com';
    };

    let desc =  object.weather[0].main;
    switch(desc){
        case 'Clouds':
            tempDivIcon.src = 'media/3026240-weather/svg/cloudy.svg'
            tempDivIcon.title = 'Icons by Vitaly Gorbachev - Flaticon.com';
            tempDivIcon.alt = "Icon of clouds"
            break;
        case 'Clear':
            tempDivIcon.src = 'media/3026240-weather/svg/clear-sky.svg';
            tempDivIcon.title = 'Icons by Vitaly Gorbachev - Flaticon.com';
            tempDivIcon.alt = "Icon of the sun"
            break;
        case 'Snow':
            tempDivIcon.src = 'media/3026240-weather/svg/snow.svg';
            tempDivIcon.title = 'Icons by Vitaly Gorbachev - Flaticon.com';
            tempDivIcon.alt = "Icon of snow cloud"
            break;
        case 'Rain':
            tempDivIcon.src = 'media/3026240-weather/svg/rain.svg';
            tempDivIcon.title = 'Icons by Vitaly Gorbachev - Flaticon.com';
            tempDivIcon.alt = "Icon of clouds raining"
            break;
        case 'Drizzle':
            tempDivIcon.src = 'media/3026240-weather/svg/light-rain.svg';
            tempDivIcon.title = 'Icons by Vitaly Gorbachev - Flaticon.com';
            tempDivIcon.alt = "Icon of clouds drizzling"
            break;
        case 'Thunderstorm':
            tempDivIcon.src = 'media/3026240-weather/svg/thunderstorm.svg';
            tempDivIcon.title = 'Icons by Vitaly Gorbachev - Flaticon.com';
            tempDivIcon.alt = "Icon of thunderstorm cloud"
            break;
    };    
}
//unit change on click
let changeUnits = () =>{
    if(units.innerHTML === 'ºC'){
        temperature.innerHTML = Math.round(((celciusTemp * 9/5) + 32));
        units.innerHTML = 'ºF';
        feelsLike.innerHTML = 'Feels like '+ Math.round((feelsLikeTemp * 9/5) + 32) + ' ºF';
        windSpeed.innerHTML = Math.round(wind / 1.6) + ' M/H';
    }else if( units.innerHTML === 'ºF'){
        temperature.innerHTML = celciusTemp;
        units.innerHTML = 'ºC';
        feelsLike.innerHTML = 'Feels like '+ feelsLikeTemp + ' ºC';
        windSpeed.innerHTML = wind + ' KM/H';
    }
}

forecastDiv.addEventListener('click', changeUnits);

let googleApi = {
    base: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/',
    key: 'AIzaSyCJXUS1SMY6joyxVtp-jATqmgKcH7KXsVw',
}