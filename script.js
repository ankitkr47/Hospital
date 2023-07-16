// function initMap() {
//     new google.maps.Map(document.getElementById("map"), {
//       mapId: "ee3fb3ecdd9592ed",
//       center: { lat: 28.4798177, lng: 77.5274231 },
//       zoom: 14,
//     });
//   }
// window.initMap = initMap;



function initMap() {
  // Create a new map instance
  var map = new google.maps.Map(document.getElementById("map"), {
    mapId: "ee3fb3ecdd9592ed",
    center: { lat: 0, lng: 0 }, // Default center
    zoom: 14, // Default zoom level
  });

  // Request user's location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        console.log(userLocation);

        // Update map center to user's location
        map.setCenter(userLocation);

        // Add a marker at user's location
        var marker = new google.maps.Marker({
          position: {lat: userLocation.lat , lng: userLocation.lng}, //28.479817, 77.515876
          map: map,
          title: "Your Location",
        });
      },
      function () {
        // Handle error case when user denies location access or an error occurs
        console.error("Error: The Geolocation service failed.");
      }
    );
  } else {
    // Browser doesn't support Geolocation API
    console.error("Error: Your browser does not support geolocation.");
  }
}