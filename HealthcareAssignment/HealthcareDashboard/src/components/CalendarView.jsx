// import React from "react";
// import { calendarAppointments } from "../data/appointments";

// export default function CalendarView() {
//   return (
//     <div className="calendar-view">
//       <h3>October 2021</h3>
//       <div className="calendar-grid">
//         {[...Array(30)].map((_, i) => {
//           const date = `2021-10-${String(i + 1).padStart(2, "0")}`;
//           const dayAppointments = calendarAppointments.filter(
//             (app) => app.date === date
//           );
//           return (
//             <div key={i} className="calendar-day">
//               <span>{i + 1}</span>
//               {dayAppointments.map((app, idx) => (
//                 <div key={idx} className="calendar-event">
//                   {app.time}
//                 </div>
//               ))}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


import React from "react";
import { calendarAppointments } from "../data/appointments";
import "../styles/CalendarView.css";

export default function CalendarView() {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const dates = [25, 26, 27, 28, 29, 30, 31];

  return (
    <div className="calendar-view">
      <h3>October 2021</h3>
      <div className="calendar-header">
        {days.map((day) => (
          <div key={day} className="day-header">{day}</div>
        ))}
      </div>
      <div className="calendar-dates">
        {dates.map((date, idx) => {
          const dateStr = `2021-10-${String(date).padStart(2, "0")}`;
          const dayApps = calendarAppointments.filter((app) => app.date === dateStr);

          return (
            <div key={idx} className="calendar-date">
              <div className={date === 26 ? "current-date" : ""}>{date}</div>
              {dayApps.map((app, i) => (
                <div key={i} className="calendar-event">
                  {app.time} {app.name}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
