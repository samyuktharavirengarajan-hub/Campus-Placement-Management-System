const db = require("../config/db");

// Apply for Placement Drive
const applyDrive = (req, res) => {

    const {
        student_id,
        drive_id,
        status,
        remarks
    } = req.body;

    const sql = `
        INSERT INTO applications
        (
            student_id,
            drive_id,
            status,
            remarks
        )
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            student_id,
            drive_id,
            status,
            remarks
        ],
        (err) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            res.status(201).json({
                message: "Application Submitted Successfully"
            });

        }
    );

};

const getApplications = (req, res) => {

    const sql = `
        SELECT *
        FROM applications
        ORDER BY application_id DESC
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(result);

    });

};

const getApplicationDetails = (req, res) => {

    const sql = `
        SELECT
            a.application_id,
            s.full_name AS student_name,
            c.company_name,
            d.drive_title,
            a.status,
            a.application_date,
            a.remarks
        FROM applications a
        JOIN students s
            ON a.student_id = s.student_id
        JOIN placement_drives d
            ON a.drive_id = d.drive_id
        JOIN companies c
            ON d.company_id = c.company_id
        ORDER BY a.application_id DESC
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(result);

    });

};

const updateApplication = (req, res) => {

    const { id } = req.params;

    const {
        student_id,
        drive_id,
        status,
        remarks
    } = req.body;

    const sql = `
        UPDATE applications
        SET
            student_id=?,
            drive_id=?,
            status=?,
            remarks=?
        WHERE application_id=?
    `;

    db.query(
        sql,
        [
            student_id,
            drive_id,
            status,
            remarks,
            id
        ],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Application Updated Successfully"
            });

        }
    );

};

const deleteApplication = (req, res) => {

    const { id } = req.params;

    const sql = `
        DELETE FROM applications
        WHERE application_id=?
    `;

    db.query(sql, [id], (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Application Deleted Successfully"
        });

    });

};

module.exports = {
    applyDrive,
    getApplications,
    getApplicationDetails,
    updateApplication,
    deleteApplication
};