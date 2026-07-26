const db = require("../config/db");

// =========================
// Add Student
// =========================
const addStudent = (req, res) => {

    const {
        register_number,
        full_name,
        email,
        phone,
        department,
        tenth_percentage,
        twelfth_percentage,
        cgpa,
        current_backlogs,
        skills,
        github_url,
        linkedin_url,
        resume_url
    } = req.body;

    const sql = `
    INSERT INTO students
    (
        register_number,
        full_name,
        email,
        phone,
        department,
        tenth_percentage,
        twelfth_percentage,
        cgpa,
        current_backlogs,
        skills,
        github_url,
        linkedin_url,
        resume_url
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const studentData = [
        register_number,
        full_name,
        email,
        phone,
        department,
        tenth_percentage || 0,
        twelfth_percentage || 0,
        cgpa || 0,
        current_backlogs || 0,
        skills || "",
        github_url || "",
        linkedin_url || "",
        resume_url || ""
    ];

    db.query(sql, studentData, (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }

        res.status(201).json({
            message: "Student Added Successfully"
        });

    });

};

// =========================
// Get All Students
// =========================
const getStudents = (req, res) => {

    const sql = "SELECT * FROM students ORDER BY student_id DESC";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.status(200).json(result);

    });

};

// =========================
// Update Student
// =========================
const updateStudent = (req, res) => {

    const { id } = req.params;

    const {
        register_number,
        full_name,
        email,
        phone,
        department,
        tenth_percentage,
        twelfth_percentage,
        cgpa,
        current_backlogs,
        skills,
        github_url,
        linkedin_url,
        resume_url
    } = req.body;

    const sql = `
    UPDATE students
    SET
        register_number=?,
        full_name=?,
        email=?,
        phone=?,
        department=?,
        tenth_percentage=?,
        twelfth_percentage=?,
        cgpa=?,
        current_backlogs=?,
        skills=?,
        github_url=?,
        linkedin_url=?,
        resume_url=?
    WHERE student_id=?
    `;

    const studentData = [
        register_number,
        full_name,
        email,
        phone,
        department,
        tenth_percentage || 0,
        twelfth_percentage || 0,
        cgpa || 0,
        current_backlogs || 0,
        skills || "",
        github_url || "",
        linkedin_url || "",
        resume_url || "",
        id
    ];

    db.query(sql, studentData, (err) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.json({
            message: "Student Updated Successfully"
        });

    });

};

// =========================
// Delete Student
// =========================
const deleteStudent = (req, res) => {

    const { id } = req.params;

    const deleteApplicationsQuery =
        "DELETE FROM applications WHERE student_id=?";

    db.query(deleteApplicationsQuery, [id], (err) => {

        if (err) {
            console.log(err);
            return res.status(500).json(err);
        }

        const deleteStudentQuery =
            "DELETE FROM students WHERE student_id=?";

        db.query(deleteStudentQuery, [id], (err) => {

            if (err) {
                console.log(err);
                return res.status(500).json(err);
            }

            res.json({
                message: "Student Deleted Successfully"
            });

        });

    });

};

module.exports = {
    addStudent,
    getStudents,
    updateStudent,
    deleteStudent
};