var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/create', function(req, res, next) {
  console.log(req.body)

  res.json(req.body);
});

module.exports = router;
