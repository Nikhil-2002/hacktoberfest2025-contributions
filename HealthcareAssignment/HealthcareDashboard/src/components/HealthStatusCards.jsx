import React from "react";
import { healthIndicators } from "../data/healthData";

export default function HealthStatusCards() {
  return (
    <div className="health-cards">
      {healthIndicators.map((item, index) => (
        <div key={index} className={`health-card ${item.color}`}>
          <div className="health-card-header">
            <h4>{item.organ}</h4>
            <span className="trend">{item.trend}</span>
          </div>
          <div className="health-card-value">{item.value}</div>
          <div className="health-card-status">Status: {item.status}</div>
          <div className="health-card-last-check">Last checked: {item.lastCheck}</div>
        </div>
      ))}
    </div>
  );
}
