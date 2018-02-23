window.onload = function() {
  
  var startPos;
  var weatherData;
  async function geoSuccess(position) {
    startPos = position;
    // console.log(startPos);
    // document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    // document.getElementById('startLon').innerHTML = startPos.coords.longitude;

    getWeather(startPos.coords.latitude,startPos.coords.longitude);
  };

function getWeather(lat, lon){
  $.ajax({
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&appid=8a8b7899a71e133a0af9805244c61e66",
  }).done(function(data){
    printData(data);
  });
}

function printData(data){
  $('#city').text("Current Temperature in " + data.name);
  $('#temp').text(data.main.temp +"C");
  console.log(data)
}
// Get the user location
  navigator.geolocation.getCurrentPosition(geoSuccess);
  
};