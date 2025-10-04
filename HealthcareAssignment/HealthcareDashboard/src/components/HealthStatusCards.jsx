// import React from "react";
// import { healthIndicators } from "../data/healthData";

// export default function HealthStatusCards() {
//   return (
//     <div className="health-cards">
//       {healthIndicators.map((item, index) => (
//         <div key={index} className={`health-card ${item.color}`}>
//           <h4>{item.organ}</h4>
//           <p>Status: {item.status}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";
import "../styles/HealthStatusCards.css";

export default function HealthStatusCards() {
  const stats = [
    { id: 1, name: "Lungs", date: "26 Oct 2021", progress: 80, color: "#FF6F91" },
    { id: 2, name: "Teeth", date: "26 Oct 2021", progress: 60, color: "#32ACAC" },
    { id: 3, name: "Bone", date: "26 Oct 2021", progress: 40, color: "#FF6F40" },
  ];

  return (
    <div className="health-status-cards">
      {stats.map(({ id, name, date, progress, color }) => (
        <div key={id} className="health-card">
          <div className="card-header">{name}</div>
          <div className="card-date">{date}</div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progress}%`, backgroundColor: color }} />
          </div>
        </div>
      ))}
      <div className="details-link">Details &rarr;</div>
    </div>
  );
}
