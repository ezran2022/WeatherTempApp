// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-API-Key': '06cf3d5d111590d8f13842aa6b665799'
// 	}
// };

// fetch('api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid= 06cf3d5d111590d8f13842aa6b665799'
// , options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

/**
 * Weather App
 */

// API_KEY for maps api
let API_KEY = "06cf3d5d111590d8f13842aa6b665799";

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