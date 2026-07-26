const db = require("../config/db");

const getDashboard = (req, res) => {

    const sql = `
        SELECT
            (SELECT COUNT(*) FROM students) AS totalStudents,
            (SELECT COUNT(*) FROM companies) AS totalCompanies,
            (SELECT COUNT(*) FROM placement_drives) AS totalDrives,
            (SELECT COUNT(*) FROM applications) AS totalApplications;
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(result[0]);

    });

};

const getApplicationStatus = (req, res) => {

    const sql = `
        SELECT
            status,
            COUNT(*) AS count
        FROM applications
        GROUP BY status
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(result);

    });

};

const getStudentsByDepartment = (req, res) => {

    const sql = `
        SELECT
            department,
            COUNT(*) AS count
        FROM students
        GROUP BY department
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(result);

    });

};

module.exports = {
    getDashboard,
    getApplicationStatus,
    getStudentsByDepartment
};