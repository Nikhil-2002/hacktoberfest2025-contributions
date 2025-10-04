// import React from "react";
// import { healthIndicators } from "../data/healthData";
// import "../styles/Dashboard.css";

// export default function AnatomySection() {
//   return (
//     <div className="anatomy-section">
//       <img
//         src="/src/assets/anatomy.png"
//         alt="Anatomy"
//         className="anatomy-img"
//       />
//       <ul className="health-indicators">
//         {healthIndicators.map((item, index) => (
//           <li key={index} className={`indicator ${item.color}`}>
//             {item.organ}: {item.status}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React from "react";
import anatomy from "../assets/anatomy.jpg";
import "../styles/AnatomySection.css";

export default function AnatomySection() {
  return (
    <div className="anatomy-section">
      <img src={anatomy} alt="Anatomy" className="anatomy-image" />
      <div className="tag heart">❤️ Healthy Heart</div>
      <div className="tag leg">🚴 Healthy Leg</div>
    </div>
  );
}