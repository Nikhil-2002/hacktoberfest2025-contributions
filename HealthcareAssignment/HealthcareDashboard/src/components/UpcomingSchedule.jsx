// import React from "react";
// import { upcoming } from "../data/appointments";
// import SimpleAppointmentCard from "./SimpleAppointmentCard";

// export default function UpcomingSchedule() {
//   return (
//     <div className="upcoming-schedule">
//       <h3>The Upcoming Schedule</h3>
//       <div className="appointments-list">
//         {upcoming.map((item, idx) => (
//           <SimpleAppointmentCard key={idx} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import "../styles/UpcomingSchedule.css";

export default function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      <div className="schedule-day">
        <h4>On Thursday</h4>
        <div className="schedule-event">
          Health checkup complete <span className="schedule-time">11:00 AM</span>
        </div>
        <div className="schedule-event">
          Ophthalmologist <span className="schedule-time">14:00 PM</span>
        </div>
      </div>
      <div className="schedule-day">
        <h4>On Saturday</h4>
        <div className="schedule-event">
          Cardiologist <span className="schedule-time">12:00 AM</span>
        </div>
        <div className="schedule-event">
          Neurologist <span className="schedule-time">16:00 PM</span>
        </div>
      </div>
    </div>
  );
}
