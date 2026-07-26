const express = require("express");

const router = express.Router();

const {
    getDashboard,
    getApplicationStatus,
    getStudentsByDepartment
} = require("../controllers/dashboardController");

router.get("/", getDashboard);
router.get("/application-status", getApplicationStatus);
router.get("/students-department", getStudentsByDepartment);

module.exports = router;