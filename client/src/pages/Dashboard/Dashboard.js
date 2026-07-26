import React, { useEffect, useState } from "react";
import StatCard from "../../components/dashboard/StatCard";
import { getDashboardSummary } from "../../services/dashboardService";

function Dashboard() {

    const [summary, setSummary] = useState({
        totalStudents: 0,
        totalCompanies: 0,
        totalDrives: 0,
        totalApplications: 0
    });

    useEffect(() => {

        const fetchDashboard = async () => {

            try {

                const response = await getDashboardSummary();

                console.log("Response:", response);
                console.log("Data:", response.data);

                setSummary(response.data);

            } catch (error) {

                console.error("Dashboard Error:", error);

            }

        };

        fetchDashboard();

    }, []);

    return (
        <div>

            <h2 className="mb-2">
                Welcome Back 👋
            </h2>

            <p className="text-secondary">
                Campus Placement Management Dashboard
            </p>

            <div className="row mt-4">

                <div className="col-md-3 mb-3">
                    <StatCard
                        title="Students"
                        value={summary.totalStudents}
                        icon="👨‍🎓"
                    />
                </div>

                <div className="col-md-3 mb-3">
                    <StatCard
                        title="Companies"
                        value={summary.totalCompanies}
                        icon="🏢"
                    />
                </div>

                <div className="col-md-3 mb-3">
                    <StatCard
                        title="Placement Drives"
                        value={summary.totalDrives}
                        icon="📅"
                    />
                </div>

                <div className="col-md-3 mb-3">
                    <StatCard
                        title="Applications"
                        value={summary.totalApplications}
                        icon="📝"
                    />
                </div>

            </div>

        </div>
    );
}

export default Dashboard;