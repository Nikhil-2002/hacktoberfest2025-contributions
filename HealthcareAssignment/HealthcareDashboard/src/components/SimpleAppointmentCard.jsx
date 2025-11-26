import React from "react";

export default function SimpleAppointmentCard({ title, time, icon, status }) {
  return (
    <div className={`appointment-card ${status}`}>
      <span className="icon">{icon}</span>
      <div className="details">
        <p className="title">{title}</p>
        <p className="time">{time}</p>
        <span className={`status-badge ${status}`}>
          {status === 'completed' ? '✓ Completed' : 
           status === 'upcoming' ? '⏰ Upcoming' : 
           status === 'pending' ? '⏳ Pending' : status}
        </span>
      </div>
    </div>
  );
}
