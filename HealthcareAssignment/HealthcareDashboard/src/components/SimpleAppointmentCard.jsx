// import React from "react";

// export default function SimpleAppointmentCard({ title, time, icon }) {
//   return (
//     <div className="appointment-card">
//       <span className="icon">{icon}</span>
//       <div className="details">
//         <p className="title">{title}</p>
//         <p className="time">{time}</p>
//       </div>
//     </div>
//   );
// }


import React from "react";

export default function SimpleAppointmentCard({ title, time, doctor }) {
  return (
    <div className="appointment-card">
      <div className="appointment-title">{title}</div>
      <div className="appointment-time">{time}</div>
      <div className="appointment-doctor">{doctor}</div>
    </div>
  );
}
