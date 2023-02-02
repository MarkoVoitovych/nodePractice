var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
  const { email, password } = req.body;
  res.render('response', { title: 'Simple express app', email, password });
});

module.exports = router;
