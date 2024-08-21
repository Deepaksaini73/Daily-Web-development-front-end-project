
const apikey="c4ad468b7bd8bac5f7cbe2810bf113ae";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector('.searchBar input');
const searchBtn=document.querySelector('.searchBar img');
const sunImage=document.querySelector('.sunImage');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+`&degc`;
    document.querySelector('.humidity').innerHTML=data.main.humidity + " %";
    document.querySelector('.windSpeed').innerHTML=data.wind.speed+" km/h";


    if(data.weather[0].main == "Clouds"){
        sunImage.src= "clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        sunImage.src= "clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        sunImage.src= "rain.png"
    }
    else if(data.weather[0].main == "Drizzel"){
        sunImage.src= "drizzel.png"
    }
    else if(data.weather[0].main == "Mist"){
        sunImage.src= "mist.png"
    }
    else if(data.weather[0].main == "Snow"){
        sunImage.src= "snow.png"
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

