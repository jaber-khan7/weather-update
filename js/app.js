// api key
const API_KEY = `65581e8874eed8c499baffdfa3e25595`;

const errorMessage = document.getElementById("error-message");
const temperatureDetailes = document.getElementById("city");

const loadTemperature = () => {
  const cityName = document.getElementById("city-name");
  const city = cityName.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => showTemperature(data))
    .catch(() => displayError());

  const displayError = () => {
    errorMessage.innerText = `enter a valid city name !!`;
    errorMessage.style.color = "#FF6666";
    errorMessage.style.fontFamily = "satisfy";
    temperatureDetailes.style.display = "none";
  };

  try {
    if (city === "") throw "enter a city name :(";
  } catch (err) {
    errorMessage.innerText = err;
    errorMessage.style.color = "#FF6666";
    errorMessage.style.fontFamily = "satisfy";
    temperatureDetailes.style.display = "none";
  }

  //   clear data
  cityName.value = "";
};

const showDetailes = (textId, value) => {
  document.getElementById(textId).innerText = value;
};

const showTemperature = (temperature) => {
  showDetailes("city", `${temperature.name}`);
  showDetailes("temperature", `${temperature.main.temp}`);
  showDetailes("condition", `${temperature.weather[0].main}`);

  // show weather icon
  const iconUrl = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const weatherIcon = document.getElementById("weather-icon");
  weatherIcon.setAttribute("src", `${iconUrl}`);
};
