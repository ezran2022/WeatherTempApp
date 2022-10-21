# WeatherTempApp
 
## This is the system which used to detect the temperature of different cities by show the current , the low and the high temperature of that city

This is the starting of the system

![image](https://user-images.githubusercontent.com/103323625/185893850-bf023206-35f7-475a-ba0d-a9f53492a7e6.png)

And by puting the city we get what we want from this app 

![image](https://user-images.githubusercontent.com/103323625/185894214-ed84c02b-1b6e-4eba-8767-d8dce44bb1c8.png)


```javascript


/**
 * Retrieve weather data from openweathermap
 */

 const getWeatherData = (city) => {
	const URL = "https://api.openweathermap.org/data/2.5/weather";
	const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
	const weatherPromise  = fetch(FULL_URL);
	return weatherPromise.then((response) => {
	  return response.json();
	})
  }

/**
 * Retrieve city input and get the weather data
 */

 const searchCity = () => {
	const city = document.getElementById('city-input').value;
	getWeatherData(city)
	.then((res)=>{
	  showWeatherData(res);
	}).catch((error)=>{
	  console.log(error);
	  console.log("Something happened");
	})
  }

/**
 * Show the weather data in HTML
 */
 showWeatherData = (weatherData) => {
	document.getElementById("city-name").innerText = weatherData.name;
	document.getElementById("weather-type").innerText = weatherData.weather[0].main;
	document.getElementById("temp").innerText = weatherData.main.temp;
	document.getElementById("min-temp").innerText = weatherData.main.temp_min;
	document.getElementById("max-temp").innerText = weatherData.main.temp_max;
  }  

```
