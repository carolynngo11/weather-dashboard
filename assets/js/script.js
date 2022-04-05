// Variables
    // Add API URL
    // Add search/submit btn variable
    // Add city, date, and icon variable
    // Add temp, wind, humidity, and (uv) index variable
    // Add forecast card variable

var apiKey = "46b4cc12b7fab455d566ae2c405fc5fe";

var searchBtn = $(".searchBtn");
var searchTerm = $("#search-term");

var citynameEl = $(".cityName");
var currentdateEl = $(".currentDate");
var weathericonEl = $(".weatherIcon");
var historysearchEl = $(".historySearch")

var tempEl = $(".temp");
var windEl = $(".wind");
var humidityEl = $(".humidity");
var indexEl = $(".index");

var cardrowEl = $(".card-row")

// Click function for search button
searchBtn.on("click", function (event) {
    event.preventDefault();
    getWeather(searchTerm.val());
});

function searchData() {
    var citySearch = searchTerm.val();
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + apiKey;
    fetch(queryURL)
    .then(function (response) {
        return response.json();
})

// Function for history search button

// Function for weather data (city, date, icon variable)
    // UV index color identifier

// Function for 5-Day forecast cards

// Function for 5-Day forecast (date, icon, temp, wind, and humidity)
