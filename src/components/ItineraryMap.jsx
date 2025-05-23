import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const MapComponent = ({ coordinates, mapId }) => {
  const mapRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!coordinates || !coordinates.length || coordinates.length !== 2) {
      console.error("Invalid coordinates provided to MapComponent:", coordinates);
      return;
    }
    
    if (!containerRef.current) return;
    
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }
    
    try {
      const map = L.map(containerRef.current).setView(coordinates, 13);
      mapRef.current = map;
      
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      L.marker(coordinates).addTo(map)
        .bindPopup('Hotel Location')
        .openPopup();
    } catch (error) {
      console.error("Error initializing map:", error);
    }
    
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [coordinates]);

  return <div ref={containerRef} className="h-96 w-full md:w-[400px]"></div>;
};