var inputCity = document.querySelector('.cityname')
var submitBtn = document.querySelector('.submitbtn')
var cityName = document.querySelector('.name')
var descriptionClouds = document.querySelector('.desc')
var temperature = document.querySelector('.temp')
var maxTemp = document.querySelector('.maxtemp')
var minTemp = document.querySelector('.mintemp')
var humid = document.querySelector('.humidity')
var windSpeed = document.querySelector('.windspeed')
var finalTemp
var visible = document.querySelector('.visibility')
var displayMessage = document.querySelector('.displaystuff')

function displayData(display){
    
    cityName.innerHTML = ` City: ${display.name}` 
    finalTemp = display.main.temp - 273.15
    finalTemp = finalTemp.toFixed(2)
    temperature.innerHTML = ` Temperature: ${finalTemp} ` +  `°C`
    humid.innerHTML = ` Humidity: ${(display.main.humidity)} ` + `%`
    windSpeed.innerHTML = ` Windspeed: ${display.wind.speed} `
    descriptionClouds.innerHTML = ` Description: ${(display.weather[0].description)} `;
    visible.innerHTML = ` Visibility: ${display.visibility} `

}



submitBtn.addEventListener('click', function () {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q='+inputCity.value+'&appid=212cf95eecdec0cd25b813c3c3d45a0b')
    request.send();
    request.onload = () => {
        if (request.status == 200) {
            var dispData = JSON.parse(request.response);
            displayData(dispData);
            
        }
        else {
            displayMessage.innerHTML = `No City found`
        }
    }
})









