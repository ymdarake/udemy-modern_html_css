var map;
function initMap() {
  map = new google.maps.Map(document.querySelector('.map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
  const marker = new google.maps.Marker({ position: localStorage, map: map });
}

window.addEventListener('scroll', function() {
  document.querySelector('#navbar').style.opacity =
    this.window.scrollY > 150 ? 0.9 : 1;
});

$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
