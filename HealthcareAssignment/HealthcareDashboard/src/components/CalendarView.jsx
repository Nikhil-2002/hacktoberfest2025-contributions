import React from "react";
import { calendarAppointments } from "../data/appointments";

export default function CalendarView() {
  return (
    <section className="calendar-view" aria-label="October 2021 calendar">
      <header className="calendar-header">
        <h3>October 2021</h3>
        <nav className="calendar-nav" aria-label="Calendar navigation">
          <button 
            className="nav-btn" 
            aria-label="Previous month"
            title="Previous month"
          >
            ‹
          </button>
          <button 
            className="nav-btn" 
            aria-label="Next month"
            title="Next month"
          >
            ›
          </button>
        </nav>
      </header>
      <div className="calendar-weekdays" role="row" aria-label="Weekday headers">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="weekday" role="columnheader" aria-label={day}>{day}</div>
        ))}
      </div>
      <div className="calendar-grid" role="grid" aria-label="Calendar days">
        {[...Array(30)].map((_, i) => {
          const date = `2021-10-${String(i + 1).padStart(2, "0")}`;
          const dayAppointments = calendarAppointments.filter(
            (app) => app.date === date
          );
          const isToday = i + 1 === 15; // Mock today's date
          return (
            <div 
              key={i} 
              className={`calendar-day ${isToday ? 'today' : ''}`}
              role="gridcell"
              aria-label={`October ${i + 1}, 2021${isToday ? ' (today)' : ''}`}
              tabIndex="0"
            >
              <span className="day-number">{i + 1}</span>
              {dayAppointments.map((app, idx) => (
                <div 
                  key={idx} 
                  className="calendar-event" 
                  title={`${app.type} - ${app.doctor}`}
                  aria-label={`${app.type} appointment with ${app.doctor} at ${app.time}`}
                  role="button"
                  tabIndex="0"
                >
                  <span className="event-time">{app.time}</span>
                  <span className="event-type">{app.type}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
