//geolocation
//use navigator, geolocation, getCurrentPosition() 
const API_KEY = "c4d783d19b89e319d8b27abc58910fe1";
//https://home.openweathermap.org/

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            
            const temp = Math.floor(data.main.temp);
            weather.innerText = data.weather[0].main;
            city.innerText = `${data.name} / ${temp}`;
        }
    );
}

function onGeoError(){
    alert("Can't find you. No weather for you. :(");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
