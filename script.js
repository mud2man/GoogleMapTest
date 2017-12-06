var GOOGLEMAP_KEY = 'AIzaSyDcNzI1i6Gg6vXmuP5p4Zk198pgNHvef9I';
var positiveLocations =[{lat: 40.807, lng: -73.963}, {lat: 39.807, lng: -73.963}];
var negativeLocations =[{lat: 34.022, lng: -118.285}, {lat: 35.022, lng: -118.285}];
var usaCenetr = {lat: 40, lng: -98};

function createMap(positiveLocations, negativeLocations) {
  console.log("Hello createMap");

  map = new google.maps.Map(document.getElementById('map'), {
    center: usaCenetr,
    zoom: 5
  });

  var markers = [];
  /* put positive marker */
  for(var i = 0; i < positiveLocations.length; ++i){
    var marker = new google.maps.Marker({
      position: positiveLocations[i],
      icon: 'greenMarker.png',
      map: map
    });
    markers.push();
  }

  /* put negative marker */
  for(var i = 0; i < negativeLocations.length; ++i){
    var marker = new google.maps.Marker({
      position: negativeLocations[i],
      icon: 'redMarker.png',
      map: map
    });
    markers.push();
  }
}

function invokeGoogleAPI() { 
  var url = "https://maps.googleapis.com/maps/api/js?key=";
  url += GOOGLEMAP_KEY;
  url += "&sensor=false&async=2&callback=loadGoogleMap";
  $.getScript(url, function(){}); 
}

function loadGoogleMap() {
   createMap(positiveLocations, negativeLocations);
}

$(document).ready(function() {
  console.log("Hello ready....");
  document.getElementById('Address').addEventListener('submit', function (e) {
    e.preventDefault(); //prevent a submit button from submitting a form.
    invokeGoogleAPI();
}, false);
});
