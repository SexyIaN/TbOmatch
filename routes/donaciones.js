var express = require('express');
var router = express.Router();

/* GET contacto page. */
router.get('/', function(req, res, next) {
  res.render('donaciones', { title: 'Seccion donaciones' });
});

module.exports = router;
