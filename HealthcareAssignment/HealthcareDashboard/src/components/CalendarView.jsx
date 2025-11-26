import React from "react";
import { calendarAppointments } from "../data/appointments";

export default function CalendarView() {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h3>October 2021</h3>
        <div className="calendar-nav">
          <button className="nav-btn">‹</button>
          <button className="nav-btn">›</button>
        </div>
      </div>
      <div className="calendar-weekdays">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="weekday">{day}</div>
        ))}
      </div>
      <div className="calendar-grid">
        {[...Array(30)].map((_, i) => {
          const date = `2021-10-${String(i + 1).padStart(2, "0")}`;
          const dayAppointments = calendarAppointments.filter(
            (app) => app.date === date
          );
          const isToday = i + 1 === 15; // Mock today's date
          return (
            <div key={i} className={`calendar-day ${isToday ? 'today' : ''}`}>
              <span className="day-number">{i + 1}</span>
              {dayAppointments.map((app, idx) => (
                <div key={idx} className="calendar-event" title={`${app.type} - ${app.doctor}`}>
                  <span className="event-time">{app.time}</span>
                  <span className="event-type">{app.type}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
