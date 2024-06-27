var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato')

router.get('/entidades', function(req, res, next) {
  Contrato.listEnti()
    .then(data => res.status(200).jsonp(data))
    .catch(erro => res.status(500).jsonp(erro))
});


router.get('/tipos', function(req, res, next) {
  Contrato.listT()
    .then(data => res.status(200).jsonp(data))
    .catch(erro => res.status(500).jsonp(erro))
});


router.get('/', function(req, res, next) {
  if(req.query.entidade){
    Contrato.listCE(req.query.entidade)
      .then(data => res.status(200).jsonp(data))
      .catch(erro => res.status(500).jsonp(erro)) 
  }
  else if(req.query.tipo){
    Contrato.listCT(req.query.tipo)
      .then(data => res.status(200).jsonp(data))
      .catch(erro => res.status(500).jsonp(erro)) 
  }
  else{
    Contrato.listAll()
      .then(data => res.status(200).jsonp(data))
      .catch(erro => res.status(500).jsonp(erro)) 
  }
});


router.get('/:id', function(req, res) {
  Contrato.findById(req.params.id)
    .then(data => res.status(200).jsonp(data))
    .catch(erro => res.status(501).jsonp(erro))
});


router.post('/', function(req, res) {
  Contrato.insert(req.body)
    .then(data => res.status(200).jsonp(data))
    .catch(erro => res.status(502).jsonp(erro))
});


router.delete('/:id', function(req, res) {
  Contrato.remove(req.params.id)
    .then(data => res.status(200).jsonp(data))
    .catch(erro => res.status(504).jsonp(erro))
});



router.put('/:id', function(req, res) {
  Contrato.update(req.params.id, req.body)
    .then(data => res.status(200).jsonp(data))
    .catch(erro => res.status(503).jsonp(erro))
});

module.exports = router;