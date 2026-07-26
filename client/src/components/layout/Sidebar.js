import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3 className="logo">⚡ CPMS</h3>

      <div className="menu">
        <NavLink to="/" className="menu-item">
          📊 Dashboard
        </NavLink>

        <NavLink to="/students" className="menu-item">
          👨‍🎓 Students
        </NavLink>

        <NavLink to="/companies" className="menu-item">
          🏢 Companies
        </NavLink>

        <NavLink to="/drives" className="menu-item">
          📅 Placement Drives
        </NavLink>

        <NavLink to="/applications" className="menu-item">
          📝 Applications
        </NavLink>
      </div>

      <div className="logout">
        🚪 Logout
      </div>
    </div>
  );
}

export default Sidebar;