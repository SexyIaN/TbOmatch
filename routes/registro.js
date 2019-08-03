var express = require('express');
var router = express.Router();

/* GET contacto page. */
router.get('/', function(req, res, next) {
  res.render('registro', { title: 'Seccion de registro' });
});

module.exports = router;