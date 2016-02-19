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


document.addEventListener("DOMContentLoaded", function() {
  var open = document.querySelector(".btn-open-form");
  var form = document.querySelector(".window-form");
  var close = document.querySelector(".btn-close");
  var cancel = document.querySelector(".btn-cancel");
  var name = form.querySelector("[name=name]");
  var mail = form.querySelector("[name=mail]");


  document.querySelector(".map").classList.remove("no-js");
  form.classList.remove("no-js");

  open.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.add("window-form-open");
    form.classList.add("window-form-slide");
    name.focus();
  });

  cancel.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.remove("window-form-open");
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.remove("window-form-open");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (form.classList.contains("window-form-open")) {
        form.classList.remove("window-form-open");
      }
    }
  });

  form.addEventListener("submit", function(event) {
    if (!name.value || !mail.value) {
       event.preventDefault();
       console.log("Введите информацию для связи");
       form.classList.add("window-form-error");
       setTimeout(function() {
         form.classList.remove("window-form-slide")
         form.classList.remove("window-form-error");
       }, 1000);
       }
  });

});
