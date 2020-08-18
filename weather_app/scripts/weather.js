//apis info
let openWeatherApi = {
    key: 'bb8fffb77c233d3391006cd4611ceda9',
    baseurl: 'https://api.openweathermap.org/data/2.5/',
};

let locationIqApi = {
    token: '98b5053ccbd403',
    baseurl: `https://eu1.locationiq.com/v1/search.php?key=`
}

let openCageData = {
    key: '0c5b31fffada439ca3f7e208bfb56504',
    baseurl: 'https://api.opencagedata.com/geocode/v1/json?'
}

let ipgeolocation = {
    baseurl: 'https://api.ipgeolocation.io/timezone?apiKey=API_KEY&location=London,%20United%20Kingdom',
    key: '8a06eacc2fcd4cd6b6c0d24e16372909'
}

let dataRespose;

document.querySelector('body').style.backgroundImage = normalWeather;

//get location time
async function getLocationTime(element){
    let data = await(await fetch(`https://api.ipgeolocation.io/timezone?apiKey=${ipgeolocation.key}&location=${element}`)).json();
    localTime.innerHTML = data.date_time_txt;
}

//convert city to coordinates
async function dataRequest(element){
    let data = await (await fetch(`${openCageData.baseurl}q=${element}&key=${openCageData.key}`)).json();
    let lat = data.results[0].geometry.lat;
    let lon = data.results[0].geometry.lng;
    let city = data.results[0].components.city;
    let country = data.results[0].components.country;
    locationName.innerHTML = city + ', ' + country; 
    weatherRequest(lat, lon)
}

//requesting weather info from openweather
async function weatherRequest(lat, lon){
    let weather = await (await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${openWeatherApi.key}&units=metric`)).json();
    
    currentWeatherInfo(weather);
    forecastWeatherInfo(weather);
    saveData(weather); 
}

let saveData = (element) =>{
    dataRespose = element;
}

//get user location
function geolocation(){
    navigator.geolocation.getCurrentPosition(myCoords);
    getLocationTime(inputField.value);
}

//get coord for data request
function myCoords(object){
    let lat  =  object.coords.latitude;
    let lon  =  object.coords.longitude;
    weatherRequest(lat, lon);
    getCity(lat, lon);
}

//reverse geocode 
async function getCity(lat, lon){
        let data = await (await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${openCageData.key}`)).json();
        let city = data.results[0].components.city;
        let country = data.results[0].components.country;
        locationName.innerHTML = city + ', ' + country; 
}

//display data 
let currentWeatherInfo = (object) =>{
    let current = object.current;
    currentImage.src = `http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`;
    currentDescription.innerHTML = current.weather[0].description;
    currentTemp.innerHTML = current.temp + ' ºc';
    currentFeelsLike.innerHTML = current.feels_like + ' ºc';
    currentHumidity.innerHTML = current.humidity + '%';
    currentWind.innerHTML = current.wind_speed + ' km/h';
    changeBackground(current.weather[0].main, current.temp);
};

let forecastWeatherInfo = (object) =>{
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let dayOne = object.daily[1];
    let dateStamp1 = dayOne.dt;
    let date1 = new Date(dateStamp1 * 1000);
    firstDayTitle.innerHTML = days[date1.getDay()];
    firstDayImage.src = `http://openweathermap.org/img/wn/${dayOne.weather[0].icon}@4x.png`
    firstDayDescription.innerHTML = dayOne.weather[0].description;
    firstDayTemp.innerHTML = 'Min: ' + dayOne.temp.min + ' ºc / Max: ' + dayOne.temp.max + ' ºc';
    firstDayFeelsLike.innerHTML = dayOne.feels_like.day + ' ºc';
    firstDayHumidity.innerHTML = dayOne.humidity + '%';
    firstDayWind.innerHTML = dayOne.wind_speed + ' km/h';

    let dayTwo = object.daily[2];
    let dateStamp2 = dayTwo.dt;
    let date2 = new Date(dateStamp2 * 1000);
    secondDayTitle.innerHTML = days[date2.getDay()];
    secondDayImage.src = `http://openweathermap.org/img/wn/${dayTwo.weather[0].icon}@4x.png`
    secondDayDescription.innerHTML = dayTwo.weather[0].description;
    secondDayTemp.innerHTML = 'Min: ' + dayTwo.temp.min + ' ºc / Max: ' + dayTwo.temp.max + ' ºc';
    secondDayFeelsLike.innerHTML = dayTwo.feels_like.day + ' ºc';
    secondDayHumidity.innerHTML = dayTwo.humidity + '%';
    secondDayWind.innerHTML = dayTwo.wind_speed + ' km/h';

    let dayThree = object.daily[3];
    let dateStamp3 = dayThree.dt;
    let date3 = new Date(dateStamp3 * 1000);
    thirdDayTitle.innerHTML = days[date3.getDay()];
    thirdDayImage.src = `http://openweathermap.org/img/wn/${dayThree.weather[0].icon}@4x.png`
    thirdDayDescription.innerHTML = dayThree.weather[0].description;
    thirdDayTemp.innerHTML = 'Min: ' + dayThree.temp.min + ' ºc / Max: ' + dayThree.temp.max + ' ºc';
    thirdDayFeelsLike.innerHTML = dayThree.feels_like.day + ' ºc';
    thirdDayHumidity.innerHTML = dayThree.humidity + '%';
    thirdDayWind.innerHTML = dayThree.wind_speed + ' km/h';

    let dayFour = object.daily[4];
    let dateStamp4 = dayFour.dt;
    let date4 = new Date(dateStamp4 * 1000);
    fourthDayTitle.innerHTML = days[date4.getDay()];
    fourthDayImage.src = `http://openweathermap.org/img/wn/${dayFour.weather[0].icon}@4x.png`
    fourthDayDescription.innerHTML = dayFour.weather[0].description;
    fourthDayTemp.innerHTML = 'Min: ' + dayFour.temp.min + ' ºc / Max: ' + dayFour.temp.max + ' ºc';
    fourthDayFeelsLike.innerHTML = dayFour.feels_like.day + ' ºc';
    fourthDayHumidity.innerHTML = dayFour.humidity + '%';
    fourthDayWind.innerHTML = dayFour.wind_speed + ' km/h';

    let dayFive = object.daily[5];
    let dateStamp5 = dayFive.dt;
    let date5 = new Date(dateStamp5 * 1000);
    fifthDayTitle.innerHTML = days[date5.getDay()];
    fifthDayImage.src = `http://openweathermap.org/img/wn/${dayFive.weather[0].icon}@4x.png`
    fifthDayDescription.innerHTML = dayFive.weather[0].description;
    fifthDayTemp.innerHTML = 'Min: ' + dayFive.temp.min + ' ºc / Max: ' + dayFive.temp.max + ' ºc';
    fifthDayFeelsLike.innerHTML = dayFive.feels_like.day + ' ºc';
    fifthDayHumidity.innerHTML = dayFive.humidity + '%';
    fifthDayWind.innerHTML = dayFive.wind_speed + ' km/h';
}

let changeBackground = (main, temp) =>{    
    let background = document.querySelector('body')
    if(main === 'Thunderstorm'){
        background.style.backgroundImage = thunderWeather;
    }else if(main === 'Rain' || main === 'Drizzle'){
        background.style.backgroundImage = rainWeather;
    }else if(main === 'Clouds'){
        background.style.backgroundImage = cloudWeather;
    }else if(temp < 5){
        background.style.backgroundImage = snowWeather;
    }else if(temp < 17){
        background.style.backgroundImage = coldWeather
    }else if(temp < 27){
        background.style.backgroundImage = normalWeather
    }else{
        background.style.backgroundImage = hotWeather
    }
}

let changeUnits = (element) => {
    let current = element.current;
    let dailyOne = element.daily[1];
    let dailyTwo = element.daily[2];
    let dailyThree = element.daily[3];
    let dailyFour = element.daily[4];
    let dailyFive = element.daily[5];

    let farenheitTemp = (current.temp * 9/5) + 32;
    let farenheitFeelsLike = (current.feels_like * 9/5) + 32;
    let windMiles = current.wind_speed / 1.6;

    if(unitButton.innerHTML === 'Celsius'){
        //current
        currentTemp.innerHTML = farenheitTemp.toFixed(2) + 'ºf';
        currentFeelsLike.innerHTML = farenheitFeelsLike.toFixed(2) + 'ºf';
        currentWind.innerHTML = windMiles.toFixed(2) + ' m/h';
        unitButton.innerHTML = 'Farenheit';
        //daily
        firstDayTemp.innerHTML = 'Min: ' + ((dailyOne.temp.min * 9/5) + 32).toFixed(2) + ' ºf / Max: ' + ((dailyOne.temp.max * 9/5) + 32).toFixed(2) + ' ºf';
        secondDayTemp.innerHTML = 'Min: ' + ((dailyTwo.temp.min * 9/5) + 32).toFixed(2) + ' ºf / Max: ' + ((dailyTwo.temp.max * 9/5) + 32).toFixed(2) + ' ºf';
        thirdDayTemp.innerHTML = 'Min: ' + ((dailyThree.temp.min * 9/5) + 32).toFixed(2) + ' ºf / Max: ' + ((dailyThree.temp.max * 9/5) + 32).toFixed(2) + ' ºf';
        fourthDayTemp.innerHTML = 'Min: ' + ((dailyFour.temp.min * 9/5) + 32).toFixed(2) + ' ºf / Max: ' + ((dailyFour.temp.max * 9/5) + 32).toFixed(2) + ' ºf';
        fifthDayTemp.innerHTML = 'Min: ' + ((dailyFive.temp.min * 9/5) + 32).toFixed(2) + ' ºf / Max: ' + ((dailyFive.temp.max * 9/5) + 32).toFixed(2) + ' ºf';

        firstDayFeelsLike.innerHTML = ((dailyOne.feels_like.day * 9/5) + 32).toFixed(2) + 'ºf';
        secondDayFeelsLike.innerHTML = ((dailyTwo.feels_like.day * 9/5) + 32).toFixed(2) + 'ºf';
        thirdDayFeelsLike.innerHTML = ((dailyThree.feels_like.day * 9/5) + 32).toFixed(2) + 'ºf';
        fourthDayFeelsLike.innerHTML = ((dailyFour.feels_like.day * 9/5) + 32).toFixed(2) + 'ºf';
        fifthDayFeelsLike.innerHTML = ((dailyFive.feels_like.day * 9/5) + 32).toFixed(2) + 'ºf';

        firstDayWind.innerHTML = (dailyOne.wind_speed / 1.6).toFixed(2) + ' m/h';
        secondDayWind.innerHTML = (dailyTwo.wind_speed / 1.6).toFixed(2) + ' m/h';
        thirdDayWind.innerHTML = (dailyThree.wind_speed / 1.6).toFixed(2) + ' m/h';
        fourthDayWind.innerHTML = (dailyFour.wind_speed / 1.6).toFixed(2) + ' m/h';
        fifthDayWind.innerHTML = (dailyFive.wind_speed / 1.6).toFixed(2) + ' m/h';
    }else{
        currentTemp.innerHTML = current.temp + 'ºc';
        currentFeelsLike.innerHTML = current.feels_like + 'ºc';
        currentWind.innerHTML = current.wind_speed + 'km/h';
        unitButton.innerHTML = 'Celsius'
        //daily
        firstDayTemp.innerHTML = 'Min: ' + dailyOne.temp.min + ' ºc / Max: ' + dailyOne.temp.max + ' ºc';
        secondDayTemp.innerHTML = 'Min: ' + dailyTwo.temp.min + ' ºc / Max: ' + dailyTwo.temp.max + ' ºc';
        thirdDayTemp.innerHTML = 'Min: ' + dailyThree.temp.min + ' ºc / Max: ' + dailyThree.temp.max + ' ºc';
        fourthDayTemp.innerHTML = 'Min: ' + dailyFour.temp.min + ' ºc / Max: ' + dailyFour.temp.max + ' ºc';
        fifthDayTemp.innerHTML = 'Min: ' + dailyFive.temp.min + ' ºc / Max: ' + dailyFive.temp.max + ' ºc';
    
        firstDayFeelsLike.innerHTML = dailyOne.feels_like.day + ' ºc';
        secondDayFeelsLike.innerHTML = dailyTwo.feels_like.day + ' ºc';
        thirdDayFeelsLike.innerHTML = dailyThree.feels_like.day + ' ºc';
        fourthDayFeelsLike.innerHTML = dailyFour.feels_like.day + ' ºc';
        fifthDayFeelsLike.innerHTML = dailyFive.feels_like.day + ' ºc';

        firstDayWind.innerHTML = dailyOne.wind_speed + ' km/h';
        secondDayWind.innerHTML = dailyTwo.wind_speed + ' km/h';
        thirdDayWind.innerHTML = dailyThree.wind_speed + ' km/h';
        fourthDayWind.innerHTML = dailyFour.wind_speed + ' km/h';
        fifthDayWind.innerHTML = dailyFive.wind_speed + ' km/h';

    }
}

function cToFToggle(){
    changeUnits(dataRespose);
}

function changeIcon(){
    let icon =  document.querySelector('#show-forecast');
    if(icon.innerHTML === '<i class="fas fa-chevron-up fa-5x" aria-hidden="true"></i>'){
        icon.innerHTML = '<i class="fas fa-chevron-down fa-5x" aria-hidden="true"></i>';
    }else{
        icon.innerHTML = '<i class="fas fa-chevron-up fa-5x" aria-hidden="true"></i>'
    }   
}

function scrollPage(){
    setTimeout(function(){window.scrollBy(0, 1000);}, 1000)
    
}

//event handlers
window.addEventListener('load', geolocation);

function getData(){
    dataRequest(inputField.value);
    getLocationTime(inputField.value);
    inputField.value = '';
};

submitlocation.addEventListener('click', getData);

window.addEventListener('keydown', (e)=>{
    if(e.which == 13){
        getData()
    }
});

unitButton.addEventListener('click', cToFToggle);

showForecastButton.addEventListener('click', changeIcon);
showForecastButton.addEventListener('click', scrollPage);

