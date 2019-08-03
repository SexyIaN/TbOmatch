var express = require('express');
var router = express.Router();

/* GET contacto page. */
router.get('/', function(req, res, next) {
  res.render('albums', { title: 'Seccion Albums' });
});

module.exports = router;
