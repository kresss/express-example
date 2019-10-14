const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Goodbye!');
});

router.get('/:name', function (req, res, next) {
  res.send("Goodbye " + req.params.name + '!');
});

module.exports = router;
