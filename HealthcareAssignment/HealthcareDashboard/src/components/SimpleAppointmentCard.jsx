import React from "react";

export default function SimpleAppointmentCard({ title, time, icon, status }) {
  return (
    <article className={`appointment-card ${status}`} role="listitem">
      <span className="icon" aria-hidden="true">{icon}</span>
      <div className="details">
        <h4 className="title">{title}</h4>
        <time className="time" dateTime={time}>{time}</time>
        <span className={`status-badge ${status}`} aria-label={`Status: ${status}`}>
          {status === 'completed' ? '✓ Completed' : 
           status === 'upcoming' ? '⏰ Upcoming' : 
           status === 'pending' ? '⏳ Pending' : status}
        </span>
      </div>
    </article>
  );
}
