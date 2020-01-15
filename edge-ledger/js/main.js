var map;
function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
  const marker = new google.maps.Marker({ position: localStorage, map: map });
}
