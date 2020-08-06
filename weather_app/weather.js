const inputField = document.querySelector('#autocomplete');
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

//google autocomplete
let autocomplete;
function initAutocomplete(){
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete')
    )
};


//api info
let api = {
    key: 'bb8fffb77c233d3391006cd4611ceda9',
    baseurl: 'https://api.openweathermap.org/data/2.5/',
};
//user input data
inputField.addEventListener('keypress', (event)=>{
    if(event.keyCode === 13){
        getInfo(inputField.value);
        inputField.value = '';
        units.innerHTML = 'ºC'
    }
})
//data fetch from open weather
let getInfo = (autocomplete) =>{
    fetch(`${api.baseurl}forecast?q=${autocomplete}&units=metric&appid=${api.key}`)
        
        .then(weatherInfo =>{
            return weatherInfo.json();
        })
        .then(displayWeatherInfo);
}

let getLocationWeather = (object) =>{    
    fetch(`${api.baseurl}forecast?lat=${object.coords.latitude}&lon=${object.coords.longitude}&units=metric&appid=${api.key}`)
        .then(weatherInfo =>{
            return weatherInfo.json();
        })
        .then(displayWeatherInfo);
}


//data display
let displayWeatherInfo = (object) =>{
    temperature.innerHTML = Math.floor(object.list[0].main.temp);
    celciusTemp = Math.floor(object.list[0].main.temp);
    feelsLike.innerHTML = 'Feels like ' + Math.floor(object.list[0].main.feels_like) + 'ºC';
    feelsLikeTemp = Math.floor(object.list[0].main.feels_like)
    description.innerHTML  = object.list[0].weather[0].description;
    humidity.innerHTML = object.list[0].main.humidity + '%';
    windSpeed.innerHTML = object.list[0].wind.speed + ' KM/H';
    wind = object.list[0].wind.speed;
    title.innerHTML = `${object.city.name}, ${object.city.country}`;

    let temperatureIcon = document.querySelector('.temperature-div i img');
    if(object.list[0].main.temp > 23){
        temperatureIcon.src = 'media/3026240-weather/svg/021-hot temperature.svg';
        tempDivIcon.title = 'Icons by Vitaly Gorbachev - Flaticon.com';
        document.getElementById('body').classList.add('hot-weather');
    }else{
        temperatureIcon.src = 'media/3026240-weather/svg/048-low temperatures.svg';
        tempDivIcon.title = 'Icons by Vitaly Gorbachev - Flaticon.com';
        document.getElementById('body').classList.remove('hot-weather');
    };

    let desc =  object.list[0].weather[0].main;
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

function geolocation(){
    navigator.geolocation.getCurrentPosition(getLocationWeather)
}

window.addEventListener('load', geolocation)
