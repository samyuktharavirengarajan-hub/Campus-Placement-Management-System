import React from "react";

function StatCard({ title, value, icon }) {
    return (
        <div className="dashboard-card">
            <h5>{icon} {title}</h5>
            <h2>{value}</h2>
        </div>
    );
}

export default StatCard;