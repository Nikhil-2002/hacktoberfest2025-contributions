import React from "react";
import { healthIndicators } from "../data/healthData";

export default function HealthStatusCards() {
  return (
    <section className="health-cards" aria-label="Health status indicators">
      {healthIndicators.map((item, index) => (
        <article 
          key={index} 
          className={`health-card ${item.color}`}
          role="region"
          aria-labelledby={`health-${index}-title`}
        >
          <div className="health-card-header">
            <h4 id={`health-${index}-title`}>{item.organ}</h4>
            <span className="trend" aria-label={`Trend: ${item.trend}`}>{item.trend}</span>
          </div>
          <div className="health-card-value" aria-label={`Current value: ${item.value}`}>{item.value}</div>
          <div className="health-card-status">Status: <strong>{item.status}</strong></div>
          <div className="health-card-last-check">Last checked: {item.lastCheck}</div>
        </article>
      ))}
    </section>
  );
}
