var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Você está na página raiz de Estudantes!');
  });

/* GET users listing. */
router.get('/exercícios', function(req, res, next) {
  res.send('Você está na página de Exercícios!');
});

/* GET users listing. */
router.get('/provas', function(req, res, next) {
  res.send('Você está na pasta de Provas!');
});

/* GET users listing. */
router.get('/notas', function(req, res, next) {
    res.send('Você está na área de Notas!');
  });

module.exports = router;
