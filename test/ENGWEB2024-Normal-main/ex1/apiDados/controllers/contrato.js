const mongoose = require('mongoose')
var Contrato = require("../models/contrato")

module.exports.listAll = () => {
    return Contrato.find().exec();
}

module.exports.findById = id => {
    return Contrato.findById(id).exec();
}

module.exports.listCE = (entidade) => {
    return Contrato.find({"NIPC_entidade_comunicante": entidade}).exec();
}

module.exports.listCT = (tipo) => {
    return Contrato.find({"tipoprocedimento": tipo}).exec();
}

module.exports.listEnti = () => {
    return Contrato.distinct("entidade_comunicante").sort().exec();
}

module.exports.listT = () => {
    return Contrato.distinct("tipoprocedimento").sort().exec();
}

module.exports.insert = con => {
    return Contrato.create(con);
}


module.exports.remove = id => {
    return Contrato.findOneAndDelete({_id : id}).exec();
}


module.exports.update = (id, con) => {
    return Contrato.findOneAndUpdate({_id : id}, con).exec();
}