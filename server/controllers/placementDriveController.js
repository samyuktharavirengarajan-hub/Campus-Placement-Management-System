const db = require("../config/db");

// Add Placement Drive
const addDrive = (req, res) => {

    const {
        company_id,
        drive_title,
        drive_date,
        application_deadline,
        venue,
        description
    } = req.body;

    const sql = `
        INSERT INTO placement_drives
        (
            company_id,
            drive_title,
            drive_date,
            application_deadline,
            venue,
            description
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            company_id,
            drive_title,
            drive_date,
            application_deadline,
            venue,
            description
        ],
        (err, result) => {

            if (err) {
                console.log(err);

                return res.status(500).json(err);
            }

            res.status(201).json({
                message: "Placement Drive Added Successfully"
            });

        }
    );

};

const getDrives = (req, res) => {

    const sql = `
    SELECT *
    FROM placement_drives
    ORDER BY drive_id DESC
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(result);

    });

};

const updateDrive = (req, res) => {

    const { id } = req.params;

    const {
        company_id,
        drive_title,
        drive_date,
        application_deadline,
        venue,
        description
    } = req.body;

    const sql = `
        UPDATE placement_drives
        SET
            company_id=?,
            drive_title=?,
            drive_date=?,
            application_deadline=?,
            venue=?,
            description=?
        WHERE drive_id=?
    `;

    db.query(
        sql,
        [
            company_id,
            drive_title,
            drive_date,
            application_deadline,
            venue,
            description,
            id
        ],
        (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Placement Drive Updated Successfully"
            });

        }
    );

};

const deleteDrive = (req, res) => {

    const { id } = req.params;

    const sql = `
        DELETE FROM placement_drives
        WHERE drive_id=?
    `;

    db.query(sql, [id], (err) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Placement Drive Deleted Successfully"
        });

    });

};

module.exports = {
    addDrive,
    getDrives,
    updateDrive,
    deleteDrive
};