// import React from "react";
// import DashboardOverview from "./DashboardOverview";
// import CalendarView from "./CalendarView";
// import UpcomingSchedule from "./UpcomingSchedule";
// import ActivityFeed from "./ActivityFeed";
// import "../styles/Dashboard.css";

// export default function DashboardMainContent() {
//   return (
//     <div className="dashboard-main">
//       <DashboardOverview />
//       <CalendarView />
//       <UpcomingSchedule />
//       <ActivityFeed />
//     </div>
//   );
// }


import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import ActivityFeed from "./ActivityFeed";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import "../styles/Dashboard.css";

export default function DashboardMainContent() {
  return (
    <div className="dashboard-main-content">
      <div className="left-section">
        <h2>Dashboard</h2>
        <AnatomySection />
        <HealthStatusCards />
        <ActivityFeed />
      </div>
      <div className="right-section">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
}
