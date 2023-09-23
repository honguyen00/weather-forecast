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

const APIkey = '9e2b6cc1a616c0c2e3112dad43e998d5';
var geoCodeURL = 'http://api.openweathermap.org/geo/1.0/direct?q='
var dashboardDiv = $("#dashboard")
var submitButt = $("button[type='submit']");
var searchCities;
var timezone;

function getCoordinates(url) {
    fetch(url)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
            searchCities = data;
            displayCities(data);
        });
        } else {
            alert('Error: ' + response.message);
        }
    })
    .catch(function (error) {
        alert('Unable to connect to OpenWeather');
    });
}

function displayCities(cities) {
    dashboardDiv.empty();
    cities.forEach(city => {
        var newDiv = $("<div class='city'>")
        var newCity = (city.state != undefined) ? 
        $("<h2>" + city.name + ", " + city.state + " in " + countryListAlpha2[city.country] + "</h2>") :
        $("<h2>" + city.name + " in " + countryListAlpha2[city.country] + "</h2>") 
        newDiv.append(newCity);
        dashboardDiv.append(newDiv);
    })
}

function handleSelectWeather(event) {
    var index = $(event.target).parent().index();
    console.log(searchCities[index]);
    dashboardDiv.empty();
    var url = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + searchCities[index].lat +'&lon=' + searchCities[index].lon + '&appid=' + APIkey + "&units=metric";
    fetch()
    fetch(url)
    .then((response) => {
        if(response.ok) {
            response.json().then((data) => {
                renderCityWeather(data);
            })
        }
        else {
            dashboardDiv.append("<alert>Error: " + response.message + "</alert>");
        }
    })
    .catch(function(error) {
        dashboardDiv.append("<alert>Error: Unable to connect to OpenWeather</alert>");
    })
}   

function getTimeZone(url) {
    
}

function renderCityWeather(weatherdata) {
    console.log(weatherdata);
    weatherdata.list.forEach((hour) => {
        var newDiv = $("<div class='present'>");
        var cityName = $("<h3>" + weatherdata.city.name + " in " + countryListAlpha2[weatherdata.city.country] + " (" + dayjs.unix(hour.dt).format('D/MM/YYYY, HH:mm:ss') + ")" + "</h3>")
        var temp = $("<p>Temp: " + Math.floor(hour.main.temp) + "&deg;C</p>");
        var wind = $("<p>Wind: " + hour.wind.speed + "km/h" + "</p>");
        var humid = $("<p>Humidity: " + hour.main.humidity + "%" + "</p>");
        newDiv.append(cityName, temp, wind, humid);
        dashboardDiv.append(newDiv);
    })
}


function handleSearchCity(event) {
    event.preventDefault();
    var cityName = $('#CityName').val().trim();
    if (cityName !== "" ) {
        var fetchurl = geoCodeURL + cityName + "&limit=5&appid=" + APIkey;
        getCoordinates(fetchurl);
    }
}

submitButt.on("click", handleSearchCity);
dashboardDiv.on("click", ".city", handleSelectWeather)