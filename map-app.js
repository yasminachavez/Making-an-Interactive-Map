
//map object

// get user coordinates
async function getCoords(){
    userPos = await new Promise((resolve, reject) => 
        navigator.geolocation.getCurrentPosition(resolve, reject))
    return [position.coords.latitude, position.coords.longitude]
}

// Create map:                                                       
// const myMap = L.map('map', {
//     center: [48.868672, 2.342130],
//     zoom: 12,
// }); replaced with below refactor

const map = L.map('map').setView([48.868672, 2.342130], 12);


// Add OpenStreetMap tiles: //Note: Replace 'https://.tile.openstreetmap.org///.png' with 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' in this copy/paste part in the Canvas activity instructions

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Create and add a geolocation marker:
const marker = L.marker([48.87007, 2.346453])
marker.addTo(map).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()

const circle = L.circle([48.87007, 2.346453], {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// build ad 2
function buildAd2(coordinates){
    const coords = coordinates
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z`
    let content = document.querySelector('.ad2')
    let inner = document.createElement('p')
    inner.innerHTML = `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`
    content.append(inner)
}

window.onload = async() => {
    const coords = await getCoords();
    console.log(coords)
    
};

// interface submit button
