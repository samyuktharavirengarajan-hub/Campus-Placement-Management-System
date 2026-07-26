const db = require("../config/db");

// Add Company
const addCompany = (req, res) => {

    const {
        company_name,
        location,
        package_lpa,
        eligibility_cgpa,
        job_role
    } = req.body;

    const sql = `
    INSERT INTO companies
    (
        company_name,
        location,
        package_lpa,
        eligibility_cgpa,
        job_role
    )
    VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            company_name,
            location,
            package_lpa,
            eligibility_cgpa,
            job_role
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database Error"
                });
            }

            res.status(201).json({
                message: "Company Added Successfully"
            });

        }
    );

};


// Get All Companies
const getCompanies = (req, res) => {

    const sql = `
    SELECT * FROM companies
    ORDER BY company_id DESC
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.status(200).json(result);

    });

};


// Update Company
const updateCompany = (req, res) => {

    const { id } = req.params;

    const {
        company_name,
        location,
        package_lpa,
        eligibility_cgpa,
        job_role
    } = req.body;


    const sql = `
    UPDATE companies
    SET
        company_name=?,
        location=?,
        package_lpa=?,
        eligibility_cgpa=?,
        job_role=?
    WHERE company_id=?
    `;


    db.query(
        sql,
        [
            company_name,
            location,
            package_lpa,
            eligibility_cgpa,
            job_role,
            id
        ],
        (err) => {

            if(err){
                return res.status(500).json({
                    message:"Database Error"
                });
            }


            res.json({
                message:"Company Updated Successfully"
            });

        }
    );

};


// Delete Company
const deleteCompany = (req,res)=>{

    const {id}=req.params;


    const sql="DELETE FROM companies WHERE company_id=?";


    db.query(sql,[id],(err)=>{

        if(err){
            return res.status(500).json({
                message:"Database Error"
            });
        }


        res.json({
            message:"Company Deleted Successfully"
        });

    });

};



module.exports = {
    addCompany,
    getCompanies,
    updateCompany,
    deleteCompany
};