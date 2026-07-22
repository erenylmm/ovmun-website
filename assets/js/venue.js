const map = L.map("venueMap",{
    scrollWheelZoom:false
}).setView([38.396122,27.095796],17);

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution:"© OpenStreetMap contributors"
    }
).addTo(map);

L.marker([38.396122,27.095796])
.addTo(map)
.bindPopup("OVMUN'26 Venue");