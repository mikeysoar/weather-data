var searchBtn = document.getElementById("btn");
var apiKey = "49bc3a88d18916362c6dc4d44e861c92";

// getting the data on the page
for (var i = 0; i < localStorage.length, i++) {

    var city = localStorage.getItem(i);

    var cityName = $(".list-group").addclass("list-group-item");

    cityName.append("<li>" + city + "</li>");    
} 

var inputCount = 0;

searchBtn.click(function() {

    var searchInput = $(".searchInput").val();

    var urlCurrent = "api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + apiKey + "units=imperial";

    var urlFiveDay = "api.openweathermap.org/data/2.5/forcast?q=" + searchInput + "&Appid=" + apiKey + "units=imperial";

    if (searchInput === "") {

    } else {
        $.ajax({
            url: urlCurrent,
            method: "GET"
        }).then (function(response) {
            var cityName = $(".list-group").addclass("list-group-item");
            cityName.append("<li>" +response.name + "</li>");

            var local = localStorage.setItem(inputCount, response.name);
            inputCount = inputCount + 1;

            
        }
    }
})

