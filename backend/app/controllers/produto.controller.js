const ProdutoModel = require("../models/produto.model");

exports.create = (req, res) => {
    if (! req.body.nome || !req.body.valor) {
        res.status(400).send({
            
        message: "Conteúdo do corpo da requisição vazia."
        });

    } else {
        const produto = new ProdutoModel({
            nome: req.body.nome,
            valor: req.body.valor
        });
        ProdutoModel.create(produto, (err, data) => {
            if (err){
                res.status(500).send({
                    message: err.message || "Ocorreu um erro"
                });
            } else{
                res.send(data);
            }
        })
    }
}

exports.findAll = (req, res) => {}

exports.findByld = (req, res) => {}

exports.update = (req, res) => {}

exports.delete = (req, res) => {}

exports.deleteAll = (req, res) => {}

