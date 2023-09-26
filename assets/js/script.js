// link dayjs plugin to use timezone method in dayjs
dayjs.extend(window.dayjs_plugin_utc)
dayjs.extend(window.dayjs_plugin_timezone)
// country lists with their code reference from https://gist.github.com/incredimike/1469814
const countryListAlpha2 = {
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas (the)",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia (Plurinational State of)",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "(the) British Indian Ocean Territory",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "KY": "(the) Cayman Islands",
    "CF": "(the) Central African Republic ",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "(the) Cocos (Keeling) Islands ",
    "CO": "Colombia",
    "KM": "(the) Comoros ",
    "CD": "(the Democratic Republic of the) Congo ",
    "CG": "(the) Congo ",
    "CK": "(the) Cook Islands ",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curaçao",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "CI": "Côte d'Ivoire",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "(the) Dominican Republic ",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Eswatini",
    "ET": "Ethiopia",
    "FK": "(the) Falkland Islands [Malvinas]",
    "FO": "(the) Faroe Islands ",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "(the) French Southern Territories ",
    "GA": "Gabon",
    "GM": "(the) Gambia ",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
    "VA": "(the) Holy See ",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "(Islamic Republic of) Iran ",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "(the Democratic People's Republic of) Korea ",
    "KR": "(the Republic of) Korea ",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "(the) Lao People's Democratic Republic",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "(the) Marshall Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "(Federated States of) Micronesia",
    "MD": "(the Republic of) Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "(the) Netherlands",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger (the)",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "(the) Northern Mariana Islands",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine, State of",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "(the) Philippines",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "MK": "Republic of North Macedonia",
    "RO": "Romania",
    "RU": "(the) Russian Federation",
    "RW": "Rwanda",
    "RE": "Réunion",
    "BL": "Saint Barthélemy",
    "SH": "Saint Helena, Ascension and Tristan da Cunha",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin (French part)",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten (Dutch part)",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia and the South Sandwich Islands",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "(the) Sudan",
    "SR": "Suriname",
    "SJ": "Svalbard and Jan Mayen",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania, United Republic of",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "(the) Turks and Caicos Islands",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "(the) United Arab Emirates ",
    "GB": "(the) United Kingdom of Great Britain and Northern Ireland",
    "UM": "(the) United States Minor Outlying Islands",
    "US": "(the) United States of America",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela (Bolivarian Republic of)",
    "VN": "Viet Nam",
    "VG": "Virgin Islands (British)",
    "VI": "Virgin Islands (U.S.)",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "AX": "Åland Islands"
};
// openweather api key
const APIkey = '9e2b6cc1a616c0c2e3112dad43e998d5';
// timezone api key
const APPkey = 'aac80b756ee64f36ad7fee54566166be';
// get document elements
var dashboardDiv = $("#dashboard")
var submitButt = $("button[type='submit']");
var historyDiv = $(".history");
// store the result from searching a city name
var searchCities;
// store the index value of the city that user choose from result array
var searchIndex;
// store the data return from getting the timezone of the selected city
var timezone;


$(function() {
    // after all html elements have been rendered, show any saved search history
    renderHistory();
});

// function to display any saved history
function renderHistory() {
    var savedHistory = JSON.parse(localStorage.getItem("history"));
    if (savedHistory) {
        savedHistory.forEach(item => {
            renderSavedCity(item.city[0], item.city[1]);
        })
    }
}

// After user search for a city name, get all potential results that can match
function handleSearchCityNames(url) {
    fetch(url)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
            searchCities = data;
            // Displaying the results from the search on the screen
            renderSearchedCities(data);
        });
        } else {
            dashboardDiv.append('Error: ' + response.statusText);
        }
    })
    .catch(function (error) {
        dashboardDiv.append('Unable to connect to OpenWeather, ' + error);
    });
}

// Displaying the results from the search on the screen
function renderSearchedCities(cities) {
    dashboardDiv.empty();
    if (cities.length == 0) {
        dashboardDiv.append('No search results that match!');
    } else {
        cities.forEach(city => {
            var newDiv = $("<div class='city'>")
            var newCity = (city.state != undefined) ? 
            $("<h2>" + city.name + ", " + city.state + " in " + countryListAlpha2[city.country] + "</h2>") :
            $("<h2>" + city.name + " in " + countryListAlpha2[city.country] + "</h2>") 
            newDiv.append(newCity);
            dashboardDiv.append(newDiv);
        })
    } 
}

// when user click on a city from either the searched results or history div
function handleSelectedCity(event) { 
    // if user click on a result from search results
    if (event.target.tagName.toLowerCase() === "h2") {
        searchIndex = $(event.target).parent().index();
        dashboardDiv.empty();
        var forecasturl = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + searchCities[searchIndex].lat +'&lon=' + searchCities[searchIndex].lon + '&appid=' + APIkey + "&units=metric";
        var timezoneurl = 'https://timezone.abstractapi.com/v1/current_time?api_key=' + APPkey + '&location=' + searchCities[searchIndex].lat.toFixed(2) + "," + searchCities[searchIndex].lon.toFixed(2);
        var currenturl = "https://api.openweathermap.org/data/2.5/weather?lat="+ searchCities[searchIndex].lat +"&lon="+ searchCities[searchIndex].lon + "&appid=" + APIkey + "&units=metric";
        // store the city to history in local storage
        handleSaveSearchedCity();
        // get the timezone of the chosen city
        getTimeZone(timezoneurl, forecasturl, currenturl);
    } 
    // user click on a city from history
    else {
        var historyIndex = $(event.target).index();
        var coordinates = JSON.parse(localStorage.getItem("history"))[historyIndex];
        dashboardDiv.empty();
        var forecasturl = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + coordinates.lat +'&lon=' + coordinates.lon + '&appid=' + APIkey + "&units=metric";
        var timezoneurl = 'https://timezone.abstractapi.com/v1/current_time?api_key=' + APPkey + '&location=' + coordinates.lat.toFixed(2) + "," + coordinates.lon.toFixed(2);
        var currenturl = "https://api.openweathermap.org/data/2.5/weather?lat="+ coordinates.lat +"&lon="+ coordinates.lon + "&appid=" + APIkey + "&units=metric";
        // get the timezone of the chosen city, timezone url for present use, forecasturl for fetching weather forecast api and currenturl for fetching current weather api
        getTimeZone(timezoneurl, forecasturl, currenturl);
    }
}   

// function to store the city to history in local storage
function handleSaveSearchedCity() {
    var country;
    var cityName = searchCities[searchIndex].name;
    ((searchCities[searchIndex].state) ? country=searchCities[searchIndex].state : country=searchCities[searchIndex].country)
    // display the history in the history div
    renderSavedCity(cityName, country);
    if (!localStorage.getItem("history")) {
        var savedCity = [{city: [cityName, country], lat: searchCities[searchIndex].lat, lon: searchCities[searchIndex].lon}];
        localStorage.setItem("history", JSON.stringify(savedCity));
    } else {
        var savedCity = JSON.parse(localStorage.getItem("history"));
        var newHistory = savedCity.concat([{city: [cityName, country], lat: searchCities[searchIndex].lat, lon: searchCities[searchIndex].lon}]);
        localStorage.setItem("history", JSON.stringify(newHistory));
    }
}

// function to get the timezone of the chosen city
function getTimeZone(url, forecasturl, currenturl) {
    fetch(url)
    .then((response) => {
        if(response.ok) {
            response.json().then((data) => {
                timezone = data;
                // get the current weather of the chosen city
                getWeatherCurrent(currenturl, forecasturl);
            })}
        else {
            dashboardDiv.append("<p>Error: " + response.statusText + "</p>");
        }
    })
    .catch(function(error) {
        dashboardDiv.append("<p>Error: Unable to connect to TimeZone, "+  error + "</p>");
    })
}

// fuction to get the current weather
function getWeatherCurrent(currenturl, forecasturl) {
    fetch(currenturl)
    .then((response) => {
        if(response.ok) {
            response.json().then((data) => {
                // display the weather result on screen
                renderCityWeather(data);
                // get weather forecast
                getWeatherForecast(forecasturl);
            })
        }
        else {
            dashboardDiv.append("<p>Error: " + response.statusText + "</p>");
        }
    })
    .catch(function(error) {
        dashboardDiv.append("<p>Error: Unable to connect to OpenWeather, " + error + "</p>");
    })
}

// function to get weather forecast
function getWeatherForecast(url) {
    fetch(url)
    .then((response) => {
        if(response.ok) {
            response.json().then((data) => {
                // display the weather result on screen
                renderCityWeather(data);
            })
        }
        else {
            dashboardDiv.append("<p>Error: " + response.statusText + "</p>");
        }
    })
    .catch(function(error) {
        dashboardDiv.append("<p>Error: Unable to connect to OpenWeather, " + error + "</p>");
    })
}

// funtion to display weather result on screen
function renderCityWeather(weatherdata) {
    // if the result is from 5 day forecast
    if(weatherdata.list) {
        var cityName = "<h3>" + weatherdata.city.name + "</h3>";
        var flexContainer = $("<div class='flex-container'>")
        weatherdata.list.forEach((hour) => {
        var newDiv = $("<div class='forecast'>");
        var cityHead = $(cityName + " <h4>(" + dayjs.unix(hour.dt).tz(timezone.timezone_location).format('D/MM/YYYY, HH:mm:00') + ")" + "</h4>");
        var icon = $('<i><img src=https://openweathermap.org/img/wn/' + hour.weather[0].icon +'@2x.png' + '></i>')
        var temp = $("<p>Temp: " + Math.floor(hour.main.temp) + "&deg;C</p>");
        var wind = $("<p>Wind: " + hour.wind.speed + "km/h" + "</p>");
        var humid = $("<p>Humidity: " + hour.main.humidity + "%" + "</p>");
        var description = $("<p>Description: " + hour.weather[0].description + "</p>")
        newDiv.append(cityHead, icon, description, temp, wind, humid);
        flexContainer.append(newDiv);
        }) 
        dashboardDiv.append($("<h3>5-Day Forecast:</h3>"), flexContainer);
    }
    // if the result is from current forecast
    else {
        var cityName = "<h3>" + weatherdata.name + "</h3>";
        var newDiv = $("<div class='present'>");
        var cityHead = $(cityName + " <h4>(most recent update: " + dayjs.unix(weatherdata.dt).tz(timezone.timezone_location).format('dddd, D/MM/YYYY, HH:mm:00' + " UTC"+ 'Z') + ")</h4>")
        var icon = $('<i><img src=https://openweathermap.org/img/wn/' + weatherdata.weather[0].icon +'@2x.png' + '></i>')
        var temp = $("<p>Temp: " + Math.floor(weatherdata.main.temp) + "&deg;C</p>");
        var description = $("<p>Description: " + weatherdata.weather[0].description + "</p>")
        var wind = $("<p>Wind: " + weatherdata.wind.speed + "km/h" + "</p>");
        var humid = $("<p>Humidity: " + weatherdata.main.humidity + "%" + "</p>");
        newDiv.append(cityHead, icon, description, temp, wind, humid);
        dashboardDiv.append(newDiv);
    }
}
// function to display saved cities on screen
function renderSavedCity(city, country) {    
    var historyButt = $("<button class='select-history'>" + city + ", " + country + "</button>");
    historyDiv.append(historyButt);
}

// function to handle when search button is clicked
function handleSearchCity(event) {
    event.preventDefault();
    var cityName = $('#CityName').val().trim();
    $('#CityName').val("");
    if (cityName !== "" ) {
        var fetchurl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + "&limit=5&appid=" + APIkey;
        handleSearchCityNames(fetchurl);
    }
}

// event listeners
submitButt.on("click", handleSearchCity);
dashboardDiv.on("click", ".city", handleSelectedCity);
historyDiv.on("click", ".select-history", handleSelectedCity)