const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginAdmin = (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM admins WHERE email = ?";

    db.query(sql, [email], async (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        if (result.length === 0) {
            return res.status(401).json({
                message: "Invalid Email or Password"
            });
        }

        const admin = result[0];

        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid Email or Password"
            });
        }

        const token = jwt.sign(
            {
                admin_id: admin.admin_id,
                email: admin.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.status(200).json({
            message: "Login Successful",
            token,
            admin: {
                admin_id: admin.admin_id,
                full_name: admin.full_name,
                email: admin.email
            }
        });

    });

};

module.exports = {
    loginAdmin
};