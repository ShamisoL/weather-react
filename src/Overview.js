import React from "react";
import "./Overview.css";

export default function Overview() {
  return (
    <div className="overview">
      <h1 id="city"> London </h1>
      <ul>
        <li>
          Last updated: <span id="date">Tuesday 10:00</span>
        </li>
        <li id="description" className="mb-2">
          Cloudy
        </li>
      </ul>
    </div>
  );
}
