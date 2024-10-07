const path = require('path');

// GET handler to serve the Contact Us page
exports.getContactForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'contactus.html'));
};

// POST handler to process the contact form submission
exports.submitContactForm = (req, res) => {
    const { name, email } = req.body;

    // You can log or store the name and email somewhere if needed
    console.log(`Received contact from: Name = ${name}, Email = ${email}`);
    
    // Redirect to the success page after form submission
    res.redirect('/success');
};
