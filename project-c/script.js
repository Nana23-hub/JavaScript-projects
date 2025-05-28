// let currCity= document.querySelector('#city-name');



const btn= document.getElementById('search-btn').addEventListener('click',getWeather);
const form = document.getElementById('input');
let units= "metric"
const API_KEY = '50e011a9acc81ee3ed08622ff8255a25'

function getWeather() {
    // let span = document.getElementById('error');
    // span.classList.add("error");
    // span.style.display = "block";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${form.value}&appid=${API_KEY}&units=${units}`
fetch(url)
.then(response=>{
    if(!response.ok){
        throw new Error("Incorrect city name.please try again"); 
    }
    return response.json();
})
.then(data =>{
    const new_data = data
    console.log(new_data)
    document.getElementById('city-name').innerText = `${new_data.name} , ${new_data.sys.country}`
    //document.getElementById('cloud').innerText = new_data.clouds
    console.log(new_data.clouds);

    
    //document.getElementById('font').innerText = new_data.weather
    document.getElementById('numb').innerText = new_data.main.feels_like
    document.getElementById('numb1').innerText = new_data.main.humidity
    document.getElementById('numb2').innerHTML = new_data.wind.deg
    document.getElementById('deg-one').innerHTML   = new_data.main.temp_max
    document.getElementById('deg-two').innerHTML   = new_data.main.temp_min
    document.getElementById('temp').innerHTML  = new_data.main.temp
    document.getElementById('cloudy').innerHTML = new_data.weather[0].description

    document.getElementById('date').innerText   = `${year}${month1}${date}`
     document.getElementById('day').innerHTML = day;
})  
let currentDate = new Date();
//let month = currentDate.getMonth() +1 ;
let date = currentDate.getDate();
let year = currentDate.getFullYear();
let options = { weekday: "long"};
let day = currentDate.toLocaleString("en-US", options);
let monthName = { month: "long" };
let month1 = currentDate.toLocaleString("en-US", monthName);
}



// getWeather();

form.addEventListener('submit',(e)=>{
e.preventDefault()
getWeather();
})


function getDayName( date = new Date(), locale = 'de-DE') {
    return date.toLocaleDateString(locale, {weekday: 'long'});
}
console.log(new Date('2025-02-01'), 'de-DE');
getDayName()