var express = require('express');
var router = express.Router();

/**
 * Receive email and password
 * Find user 
 * generate token
 */
router.post('/login', (req, res, next) => {
    const { email, password } = req.body.userData;

    res.json({
        sendEmail: email
    })
})


module.exports = router