// import "../styles/Sidebar.css";
// import navLinks from "../data/navigation";
// import { Home, Calendar, BarChart2, Settings } from "lucide-react";

// export default function Sidebar() {
//   const icons = {
//     Dashboard: <Home />,
//     Calendar: <Calendar />,
//     Statistics: <BarChart2 />,
//     Setting: <Settings />,
//   };

//   return (
//     <aside className="sidebar">
//       <h3>General</h3>
//       <ul>
//         {navLinks.map((link) => (
//           <li key={link}>
//             <span>{icons[link] || "•"}</span>
//             {link}
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// }


import React from "react";
import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="logo">Healthcare.</div>
        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li>History</li>
            <li>Calendar</li>
            <li>Appointments</li>
            <li>Statistics</li>
            <li className="tools">Tools</li>
            <li>Chat</li>
            <li>Support</li>
          </ul>
        </nav>
      </div>
      <div className="sidebar-bottom">
        <span>Setting</span>
      </div>
    </aside>
  );
}
