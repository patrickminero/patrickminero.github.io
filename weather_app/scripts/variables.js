//google autocomplete
let autocomplete;
function initAutocomplete(){
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete')
    )
};

//input field variables
const inputField = document.querySelector('#autocomplete');
let locationName =  document.getElementById('location');
let submitlocation = document.getElementById('submit-location');
//menu variables 
let menuButton = document.getElementById('menu-button')
let menuDiv = document.getElementById('menu-div');
let unitButton = document.getElementById('unit-button')
let contactButton = document.getElementById('contact-button');
let contactDiv = document.getElementById('conctact-div');
let contactName = document.getElementById('contact-name');
let contactEmail = document.getElementById('contact-email');
let contactMessage = document.getElementById('contact-message');
let contactSendButton = document.getElementById('send-button');
let donate = document.getElementById('donate');
//backgournds
let background = document.querySelector('body');
let normalWeather = "url('./media/normal-weather.jpg')";
let hotWeather = "url('./media/hot-weather.jpg')";
let coldWeather = "url('./media/cold-weather.jpg')";
let thunderWeather = "url('./media/thunder-weather.jpg')";
let rainWeather = "url('./media/rain-weather.jpg')";
let snowWeather = "url('./media/snow-weather.jpg')";
let cloudWeather = "url('./media/cloud-weather.jpg')";
//current weather variables
let localTime = document.getElementById('local-time');
let currentImage = document.getElementById('current-image');
let currentDescription = document.getElementById('current-description');
let currentTemp = document.getElementById('current-temp');
let currentFeelsLike = document.getElementById('current-feels-like');
let currentHumidity = document.getElementById('current-humidity');
let currentWind = document.getElementById('current-wind');

let showForecastButton = document.getElementById('show-forecast');
let forecastDiv = document.getElementById('forecast-div');
let currentWeatherDiv = document.getElementById('current-weather');

let firstDayDiv = document.getElementById('first-day');
let firstDayTitle = document.getElementById('first-day-title');
let firstDayImage = document.getElementById('first-day-image');
let firstDayDescription = document.getElementById('first-day-description');
let firstDayTemp = document.getElementById('first-day-temp');
let firstDayFeelsLike = document.getElementById('first-day-feels-like');
let firstDayHumidity = document.getElementById('first-day-humidity');
let firstDayWind = document.getElementById('first-day-wind');

let secondDayDiv = document.getElementById('second-day');
let secondDayTitle = document.getElementById('second-day-title');
let secondDayImage = document.getElementById('second-day-image');
let secondDayDescription = document.getElementById('second-day-description');
let secondDayTemp = document.getElementById('second-day-temp');
let secondDayFeelsLike = document.getElementById('second-day-feels-like');
let secondDayHumidity = document.getElementById('second-day-humidity');
let secondDayWind = document.getElementById('secon-day-wind');

let thirdDayDiv = document.getElementById('third-day');
let thirdDayTitle = document.getElementById('third-day-title');
let thirdDayImage = document.getElementById('third-day-image');
let thirdDayDescription = document.getElementById('third-day-description');
let thirdDayTemp = document.getElementById('third-day-temp');
let thirdDayFeelsLike = document.getElementById('third-day-feels-like');
let thirdDayHumidity = document.getElementById('third-day-humidity');
let thirdDayWind = document.getElementById('third-day-wind');

let fourthDayDiv = document.getElementById('fourth-day');
let fourthDayTitle = document.getElementById('fourth-day-title');
let fourthDayImage = document.getElementById('fourth-day-image');
let fourthDayDescription = document.getElementById('fourth-day-description');
let fourthDayTemp = document.getElementById('fourth-day-temp');
let fourthDayFeelsLike = document.getElementById('fourth-day-feels-like');
let fourthDayHumidity = document.getElementById('fourth-day-humidity');
let fourthDayWind = document.getElementById('fourth-day-wind');

let fifthDayDiv = document.getElementById('fifth-day');
let fifthDayTitle = document.getElementById('fifth-day-title');
let fifthDayImage = document.getElementById('fifth-day-image');
let fifthDayDescription = document.getElementById('fifth-day-description');
let fifthDayTemp = document.getElementById('fifth-day-temp');
let fifthDayFeelsLike = document.getElementById('fifth-day-feels-like');
let fifthDayHumidity = document.getElementById('fifth-day-humidity');
let fifthDayWind = document.getElementById('fifth-day-wind');

//unit change on click
/*let changeUnits = () =>{
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
}*/
