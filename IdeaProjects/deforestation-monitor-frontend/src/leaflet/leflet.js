var mymap = L.map('mapId').setView([50.44919738216061, 30.52413940429687], 11);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2FoNGF6enoiLCJhIjoiY2tiYjZ5b2N0MDFteTJ2cDJ4eTJtdW1hbSJ9.Z6og7_Z4OyAEgsT2_axgzw'
}).addTo(mymap);

var marker = L.marker([50.44919738216061, 30.52413940429687]).addTo(mymap);

var circle = L.circle([50.456848286215894, 30.487318038940426], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [ 50.440889285370865, 30.480880737304684],
    [50.456848286215894, 30.475387573242188],
    [50.456629706127664,30.44174194335937],
    [50.42383125367359, 30.41736602783203]
]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);