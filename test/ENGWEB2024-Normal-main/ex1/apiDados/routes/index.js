var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Redirect to /contratos
  res.redirect('/contratos');
});

module.exports = router;
