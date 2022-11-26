//geolocation
//use navigator, geolocation, getCurrentPosition() 
const API_KEY = "c4d783d19b89e319d8b27abc58910fe1";
//https://home.openweathermap.org/

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            
            const icon = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:nth-child(2)");
            const city = document.querySelector("#weather span:last-child");
            
            const weatherIconCode = data.weather[0].icon;
            const weatherIcon = document.createElement("img");
            weatherIcon.src = `../img/${weatherIconCode}.png`;

            icon.append(weatherIcon);
            const temp = Math.floor(data.main.temp);
            weather.innerText = `${data.weather[0].description}`;
            city.innerText = `${data.name} @ ${temp}`;
        }
    );
}

function onGeoError(){
    alert("Can't find you. No weather for you. :(");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
