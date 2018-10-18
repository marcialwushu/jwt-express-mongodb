var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/register', function(req, res, next) {
  const { name, email, password } = req.body.userData;

  const dataToInsert = {
    name, 
    email,
    password
  }

  res.json(dataToInsert);

});

module.exports = router;
