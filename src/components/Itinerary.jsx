import React, { useState } from 'react';
import MapComponent from './ItineraryMap';

export const Itinerary = ({ itinerary }) => {
  const [rating, setRating] = useState(null); //added rating constant
  return (
    <div className="p-4 flex flex-col md:flex-row gap-6">
      <div className="flex-1 max-w-full md:max-w-md">
        <h2 className="text-2xl font-bold mb-4">Your Itinerary</h2>
        {itinerary.map((item, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg">
            <h3 className="text-xl font-bold">{item.place}</h3>
            <p className="text-gray-600">{item.date}</p>
            <p className="text-gray-600">{item.description}</p>
            
            <div id="map" className="h-96 w-full md:w-[400px]"></div>
          </div>
        ))}
      </div>

      {<div id="map" className="h-96 w-full md:w-[400px]"></div>}
      { <MapComponent />}
    </div>
  );
};
