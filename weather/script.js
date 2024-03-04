const apikey="2c066048ab3ca6a895681789f3892648";
const apiURL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");
async function checkweather(city){
    const response=await fetch(apiURL + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";


    if(data.weather[0].main == "Clouds"){
        weathericon.src="partly_cloudy.png";//cloudy
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src="clear.jpeg";//cloudy
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src="rain_s_cloudy.png";//cloudy
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src="dizzle.jpeg";//cloudy
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src="mist.png";//cloudy
    }
}
searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
});
