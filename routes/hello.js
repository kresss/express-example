const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send("Hello World");
});

router.get('/:name', function (req, res, next) {
  res.send("Hello " + req.params.name);
});

module.exports = router;
