const openWeatherMapAPI = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "abcdef1234567890"; 
document.getElementById("getWeatherBtn").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value;
  try {
    const response = await fetch(
      `${openWeatherMapAPI}?q=${city}&appid=${apiKey}`
    );
    const data = await response.json();
    if (data.cod === 200) {
      const weatherDescription = data.weather[0].description;
      const temperature = Math.round(data.main.temp - 273.15); 
      const weatherInfo = `Weather in ${city}: ${weatherDescription}, Temperature: ${temperature}°C`;
      document.getElementById("weatherInfo").innerText = weatherInfo;
    } else {
      document.getElementById("weatherInfo").innerText = "City not found";
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weatherInfo").innerText =
      "Error fetching weather data";
  }
});
