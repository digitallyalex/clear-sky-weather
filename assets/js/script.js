// 1. When user searches for a city in the input, call weather API and show the result in the HTML
const searchInput = $("#search-input");
const searchBtn = $("#search-button");
const searchHistorySection = $("#history");
const todaySection = $("#today");
const forecastSection = $("#forecast");

const key = "e51bc503507ef30d73704daf0f5ae713";
// - Get the user input value
const cityName = searchInput.val().trim();
// //    - Build the API query URL based on the user input value
const queryURL =
  "https://api.openweathermap.org/data/2.5/forecast?q=" +
  "London" +
  "&appid=" +
  key +
  "&units=metric";
// //    - Add event listener to form submit
// searchBtn.on("click", function () {
//if input is empty show error
//else -
fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  //    - Call the API and render the result in the HTML
  .then(function (data) {
    console.log(data);
    // - Get the city name and show it in the main weather forecast card
    const cityDisplayed = data.city.name;
    const currentCity = $("<h3>");
    currentCity.text(cityDisplayed);

    //creating div to place city text and icon separately from today's data
    const cityIconDiv = $("<div>");
    cityIconDiv.append(currentCity);
    todaySection.append(cityIconDiv);

    // - Get the first weather forecast item and get the following values

    //get today's icon
    const iconCode = data.list[0].weather[0].icon;
    const iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";
    const displayIcon = $("<img>");
    displayIcon.attr("src", iconURL);
    cityIconDiv.append(displayIcon);

    //get today's date
    const todayDate = data.list[0].dt_txt;
    const dateText = $("<p>");
    dateText.text(`Date & Time : ${todayDate}`);

    //creating today data div to separate from cityIcon div
    const todayDataDiv = $("<div>");
    todayDataDiv.append(dateText);
    todaySection.append(todayDataDiv);

    //get today's temperature
    const todayTemp = Math.round(data.list[0].main.temp);
    const tempText = $("<p>");
    tempText.text(`Temperature: ${todayTemp}C`);
    todayDataDiv.append(tempText);

    //get today's wind speed
    const todayWind = data.list[0].wind.speed;
    const windText = $("<p>");
    windText.text(`Wind Speed: ${todayWind}`);
    todayDataDiv.append(windText);

    //get today's humidity
    const todayHum = data.list[0].main.humidity;
    const humText = $("<p>");
    humText.text(`Humidity: ${todayHum}`);
    todayDataDiv.append(humText);

    //Loop through all weathers array and get the following values

    //DATE

    //ICON

    //TEMPERATURE

    //WIND SPEED

    //HUMIDITY
  });
// });

// 2. When user search for a city, store it in local storage
// 3. On initial page load load the search history and show it as a list in the HTML
//    - ....
//    - Build the API query URL based on the history stored in local storage
//    - Call the API and render the result in the HTML
// 4. When user click on the search history, call weather API and show the result in the HTML
// 5. CSS
