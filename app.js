const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

var myIcon = L.icon({
    iconUrl: 'ISS.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],

});


// code to initialize maps template on the
    const mymap = L.map('mapid').setView([0, 0], 1);
    const marker = L.marker([0,0] ,{icon:myIcon}).addTo(mymap);
    const tile_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tiles = L.tileLayer(tile_URL, {attribution});
    tiles.addTo(mymap);


// code for the ISS icon


// code for fetching coordinate of ISS from the api



async function getISS(){
    
    const response = await fetch(api_url);
    const data = await response.json();
    const {latitude, longitude} = data;

    const lat = document.querySelector('#lat')
    const long = document.querySelector('#long')

    lat.innerHTML = data.latitude
    long.innerHTML = data.longitude
 
    marker.setLatLng([latitude,longitude])
   
}


setInterval(getISS, 1000);