// import React from "react";

// export default function ActivityFeed() {
//   return (
//     <div className="activity-feed">
//       <h3>Activity</h3>
//       <p>3 appointments on this week</p>
//       <div className="bar-chart">
//         {[30, 50, 70, 20, 40, 60, 80].map((val, i) => (
//           <div key={i} className="bar" style={{ height: `${val}px` }}></div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import "../styles/ActivityFeed.css";

export default function ActivityFeed() {
  // Dummy data for activity chart (bars height etc)
  const data = [30, 60, 40, 70, 50, 60, 30];
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  return (
    <div className="activity-feed">
      <h4>Activity</h4>
      <div className="bar-chart">
        {data.map((v, idx) => (
          <div key={idx} className="bar">
            <div style={{ height: `${v}px` }} className="fill" />
            <div className="day">{days[idx]}</div>
          </div>
        ))}
      </div>
      <div className="appointments-note">3 appointment on this week</div>
    </div>
  );
}
