// document.addEventListener("DOMContentLoaded", function() {
//   document.querySelector(".map").classList.remove("no-js");
// });

function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 59.939068, lng: 30.319990},
    disableDefaultUI: true
  });



  var image = './img/mark.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 59.938720, lng: 30.323830},
    map: map,
    icon: image
  });
};
