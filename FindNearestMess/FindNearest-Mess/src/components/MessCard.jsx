import React from "react";

export default function MessCard({ mess }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition duration-200">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{mess.name}</h2>
        <span className="text-gray-500 text-sm">{mess.distance?.toFixed(2)} km</span>
      </div>
      <p className="text-sm text-gray-600 mt-1">{mess.category.toUpperCase()}</p>
      <p className="text-gray-700 mt-2">Price: ₹{mess.price}</p>
      <p className="text-gray-700">Rating: {mess.rating} ⭐</p>
      <p className="text-gray-700">Timings: {mess.timings}</p>
      <p className="text-gray-700">Contact: {mess.contact}</p>
      <p className="text-gray-600 mt-2 text-sm">
        Menu: {mess.menu.join(", ")}
      </p>
    </div>
  );
}
