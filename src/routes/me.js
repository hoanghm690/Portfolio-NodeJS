const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");

router.get("/stored/projects", meController.storedProjects);
router.get("/trash/projects", meController.trashProjects);
router.get("/stored/contacts", meController.storedContacts);
router.get("/trash/contacts", meController.trashContacts);

module.exports = router;
