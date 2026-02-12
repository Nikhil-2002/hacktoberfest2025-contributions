import React, { useState, useEffect } from "react";
import MessList from "./MessList";
import useGeolocation from "../hooks/useGeolocation";
import messesData from "../data/messes.json";

export default function Home() {
  const { location, error, getLocation } = useGeolocation();
  const [nearestMesses, setNearestMesses] = useState([]);

  // Haversine formula to calculate distance in km
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  useEffect(() => {
    if (location.latitude && location.longitude) {
      const sortedMesses = messesData
        .map((mess) => ({
          ...mess,
          distance: getDistance(
            location.latitude,
            location.longitude,
            mess.latitude,
            mess.longitude
          )
        }))
        .sort((a, b) => a.distance - b.distance);
      setNearestMesses(sortedMesses);
    }
  }, [location]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Find Nearest Mess</h1>
      <div className="text-center mb-4">
        <button
          onClick={getLocation}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Use My Location
        </button>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <MessList messes={nearestMesses} />
    </div>
  );
}
