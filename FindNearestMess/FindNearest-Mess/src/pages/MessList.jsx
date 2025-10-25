import React from "react";
import MessCard from "../components/MessCard";

export default function MessList({ messes }) {
  if (!Array.isArray(messes) || messes.length === 0)
    return <p className="text-center text-gray-500 mt-4">No messes found.</p>;

  return (
    <div className="mt-4 grid grid-cols-1 gap-4">
      {messes.map((mess) => (
        <MessCard key={mess.id} mess={mess} />
      ))}
    </div>
  );
}
