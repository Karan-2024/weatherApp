// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
const weatherApi= {

    key: "bab281d79e5f1e9755a68d754cc313e7" ,  //api key 
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

//Event Listener function on keypress
//keypress is for pressing any key
searchInputBox.addEventListener('keypress', (event) => {
     
    if(event.keyCode == 13){    // event.keycode ==13 means if event is enter key. 
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector('.weather-body').style.display = "block";
    }

});

//Get weather report
function getWeatherReport(city)
{
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    // this statement for api calling  so will pass url to this fetch function.
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

//show weather report
function showWeatherReport(weather){
   console.log(weather);

   let city =document.getElementById('city');
   city.innerHTML =`${weather.name}, ${weather.sys.country}`;
 

   let temperature =document.getElementById('temp');
   temperature.innerHTML =`${Math.round(weather.main.temp)}&deg;C`;


   let minMaxTemp =document.getElementById('min-max');
   minMaxTemp.innerHTML =`${Math.floor(weather.main.temp_min)}&deg;C (min)  /  ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;


   let weatherType =document.getElementById('weather');
   weatherType.innerText =`${weather.weather[0].main}`;

   
    let date =document.getElementById('date');
    let todayDate =new Date();
    date.innerHTML =dateManage(todayDate);


    if(weatherType.textContent == 'Clear')
    {
        document.body.style.backgroundImage = "url('clear1.jpg')";

    }
    
    else if(weatherType.textContent == 'Clouds')
    {
        document.body.style.backgroundImage = "url('cloudy.jpg')";

    }
    
    else if(weatherType.textContent == 'Sunny')
    {
        document.body.style.backgroundImage = "url('sunny.jpg')";

    }
    
    else if(weatherType.textContent == 'Haze')
    {
        document.body.style.backgroundImage = "url('clear1.jpg')";

    }

    else if(weatherType.textContent == 'Thunderstorm')
    {
        document.body.style.backgroundImage = "url('thunderstorm.jpg')";

    }
    
    else if(weatherType.textContent == 'Rain')
    {
        document.body.style.backgroundImage = "url('rain.jpg')";

    }
    
    else if(weatherType.textContent == 'Snow')
    {
        document.body.style.backgroundImage = "url('snow.jpg')";

    }
    
    


}


// date manage 
function dateManage(dateArg)
{
  let days =["Sunday", "Monday" , "Tuesday" , "Wednesday", "Thrusday", "Friday","Saturday"];
  let months = ["January", "February", "March" , "April" ,"May", "June", "July","August",
               "September", "October","November", "December"];

               let year=dateArg.getFullYear();
               let month=months[dateArg.getMonth()];
               let date= dateArg.getDate();
               let day =days[dateArg.getDay()];

               return `${date}   ${month}   (${day}),   ${year}`;
}