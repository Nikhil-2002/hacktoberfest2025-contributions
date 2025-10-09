import React from "react";
import { upcoming } from "../data/appointments";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

export default function UpcomingSchedule() {
  return (
    <section className="upcoming-schedule" aria-label="Upcoming appointments schedule">
      <h3>The Upcoming Schedule</h3>
      <div className="appointments-list" role="list" aria-label="List of upcoming appointments">
        {upcoming.map((item, idx) => (
          <SimpleAppointmentCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
