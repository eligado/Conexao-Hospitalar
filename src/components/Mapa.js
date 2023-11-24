import React, { useEffect } from 'react';
import upa from '../img/upa.png'
import ubs from '../img/ubs.png'
import spa from '../img/spa.png'
import hos from '../img/hos.png'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MyMap = () => {
  useEffect(() => {
    // Create the map
    const myMap = L.map('map').setView([-3.0700, -60.0161], 13);

    // Add the OpenStreetMap tile layer
    const baseMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(myMap);

    var icons = {
      ubs: L.icon({ iconUrl: ubs, iconSize: [30, 30], iconAnchor: [13, 13], popupAnchor: [-2, -30] }),
      spa: L.icon({ iconUrl: spa , iconSize: [30, 30], iconAnchor: [22, 22], popupAnchor: [-2, -30] }),
      hos: L.icon({ iconUrl: hos, iconSize: [30, 30], iconAnchor: [13, 13], popupAnchor: [-2, -30] }),
      upa: L.icon({ iconUrl: upa, iconSize: [30, 30], iconAnchor: [13, 13], popupAnchor: [-2, -30] })
    };
    
    function createMarker(lat, lng, icon, title, popupContent) {
      var marker = L.marker([lat, lng], { icon: icon, title: title }).bindPopup(`<b>${title}</b><br>${popupContent}`);
      marker.addTo(myMap);
    }
    
    var locations = [
      { type: 'ubs', lat: -3.0953672, lng: -60.0042222, title: 'UBS S-50', popup: 'Rua Gabriel Gonçalves - Aleixo<br>Seg a Sex das 08:00h ÀS 17:00h' },
      { type: 'ubs', lat: -3.0993425, lng: -60.0006586, title: 'UBS S-51', popup: 'R. Atagamita - Aleixo<br>Seg a Sex das 08:00h às 17:00h' },
      { type: 'ubs', lat: -3.11249, lng: -60.02178, title: 'UBS Dr. Luiz Montenegro', popup: 'R. Pico das Águas, 527 - Nossa Sra. das Gracas<br>Seg a Sex das 06:00h às 18:00h' },
      { type: 'spa', lat: -3.0892547, lng: -59.9814582, title: 'SPA Coroado', popup: 'Av. Beira Mar - Coroado<br>24h' },
      { type: 'spa', lat: -3.07997, lng: -60.03527, title: 'SPA Alvorada', popup: 'R. Loris Cordovil - Alvorada<br>24h' },
      { type: 'spa', lat: -3.12732, lng: -60.03725, title: 'SPA São Raimundo', popup: 'Praça Ismael Benígno, 155 - São Raimundo<br>24h' },
      { type: 'upa', lat: -3.00148, lng: -60.04316, title: 'UPA 24h Campos Sales', popup: 'Av. Dona Otília, 649 - Tarumã<br>24h' },
      { type: 'upa', lat: -3.02915, lng: -59.95739, title: 'UPA Cidade Nova V', popup: 'Av. Camapuã, 1424 - Nossa Senhora De Fatima<br>24h' },
      { type: 'upa', lat: -3.10959, lng: -59.96182, title: 'UPA Distrito', popup: 'Av. Buriti, 3727 - Distrito Industrial I<br>Seg a Sex das 07:00h às 19:00h' },
      { type: 'hos', lat: -3.1019, lng: -60.01415, title: 'Hospital e Pronto Socorro 28 de Agosto', popup: 'Av. Mário Ypiranga, 1581 - Adrianópolis<br>24h' },
      { type: 'hos', lat: -3.07412, lng: -59.96227, title: 'Hospital e Pronto Socorro Dr. João Lúcio Pereira Machado', popup: 'Av. Cosme Ferreira, 3937 - Coroado<br>24h' },
      { type: 'hos', lat: -3.05428, lng: -60.006, title: 'Hospital Nilton Lins', popup: 'Av. Prof. Nilton Lins, 3259 - Flores<br>24h' },
    ];
    
    locations.forEach(location => {
      createMarker(location.lat, location.lng, icons[location.type], location.title, location.popup);
    });

    return () => {
      myMap.remove();
    };
  }, []); 

  return <div id="map" style={{ width: '100%', height: '58vh' }}></div>;
};

export default MyMap;