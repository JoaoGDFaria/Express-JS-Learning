var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:16000/contratos')
    .then(dados => {
      res.render('contratosListPage', { title: 'Lista de Contratos', contratos: dados.data })
    })
    .catch(erro => {
      res.render('error', { error: erro })
    })

});

router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:16000/contratos/' + req.params.id)
    .then(dados => {
      console.log(dados.data)
      res.render('contratoPage', { title: 'Contrato', contrato: dados.data })
    })
    .catch(erro => {
      console.log("Erro")
      res.render('error', { error: erro })
    })
  });

router.get("/entidades/:nipc", function(req, res, next) {
  axios.get('http://localhost:16000/contratos?entidade=' + req.params.nipc)
    .then(dados => {
      var somatorioValoresContratos = 0
      var aSomar = 0
      dados.data.forEach(contrato => {
        aSomar = parseFloat(contrato.precoContratual.replace(",", "."))
        somatorioValoresContratos += aSomar
      })
      console.log(somatorioValoresContratos)
      res.render('entidadePage', { title: 'Lista de Contratos', contratos: dados.data, somatorioValoresContratos: somatorioValoresContratos })
    })
    .catch(erro => {
      console.log("Erro")
      res.render('error', { error: erro })
    })
  })
module.exports = router;
