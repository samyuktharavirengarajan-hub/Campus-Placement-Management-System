const express = require("express");

const router = express.Router();

const {
    addCompany,
    getCompanies,
    updateCompany,
    deleteCompany
} = require("../controllers/companyController");


router.post("/", addCompany);

router.get("/", getCompanies);

router.put("/:id", updateCompany);

router.delete("/:id", deleteCompany);


module.exports = router;