import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Students from "../pages/Students/Students";

import Companies from "../pages/Companies/Companies";

import Drives from "../pages/Drives/Drives";

import Applications from "../pages/Applications/Applications";

function AppRoutes() {

    return (
        <BrowserRouter>
            <Layout>

                <Routes>

                    <Route
                        path="/"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/students"
                        element={<Students />}
                    />

                    <Route
    path="/companies"
    element={<Companies />}
/>
<Route
    path="/drives"
    element={<Drives />}
/>
<Route
    path="/applications"
    element={<Applications />}
/>

                </Routes>

            </Layout>
        </BrowserRouter>
    );

}

export default AppRoutes;