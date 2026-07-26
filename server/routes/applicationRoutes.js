const express = require("express");

const router = express.Router();

const {
    applyDrive,
    getApplications,
    getApplicationDetails,
    updateApplication,
    deleteApplication
} = require("../controllers/applicationController");

router.post("/", applyDrive);
router.get("/", getApplications);
router.get("/details", getApplicationDetails);
router.put("/:id", updateApplication);
router.delete("/:id", deleteApplication);

module.exports = router;