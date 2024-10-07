const path = require('path');

// GET handler to serve the success page
exports.getSuccessPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'success.html'));
};
