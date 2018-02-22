

window.onload = function() {
//   var startPos;
//   var geoSuccess = function(position) {
//     startPos = position;
//     document.getElementById('startLat').innerHTML = startPos.coords.latitude;
//     document.getElementById('startLon').innerHTML = startPos.coords.longitude;
//   };
//   navigator.geolocation.getCurrentPosition(geoSuccess);



  $.ajax({
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=8a8b7899a71e133a0af9805244c61e66",
  }).done(function(data){
    console.log(data);
  })


};


