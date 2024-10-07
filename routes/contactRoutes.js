const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const successController = require('../controllers/successController');

// Route for GET /contactus (renders the Contact Us form)
router.get('/contactus', contactController.getContactForm);

// Route for POST /contactus (handles form submission)
router.post('/contactus', contactController.submitContactForm);

// Route for GET /success (shows success message after form submission)
router.get('/success', successController.getSuccessPage);

module.exports = router;
