

window.onload = function() {
  var startPos;
  var weatherData;
  async function geoSuccess(position) {
    startPos = position;
    // console.log(startPos);
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;

    getWeather(startPos.coords.latitude,startPos.coords.longitude);
  };
  
  function printData(data){
    console.log(data)
  }


function getWeather(lat, lon){
  $.ajax({
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=8a8b7899a71e133a0af9805244c61e66",
  }).done(function(data){
    printData(data);
  });
}

// Get the user location

  navigator.geolocation.getCurrentPosition(geoSuccess);
  
};


