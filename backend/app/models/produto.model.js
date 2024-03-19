const sql = require("../configs/db");

const ProdutoModel = function(produto) {
    this.nome = produto.nome;
    this.valor = produto.valor
}

ProdutoModel.create = (produto, result) =>{
    sql.query("INSERT INTO produtos SET ?", produto, (err, res) =>{
        if(err){
            console.log("Erro: ", err);
            result(err, null);
            return;
        }
        console.log("Produto criado: ", {idproduto: res.insertId, ...produto});
        result(null, {idproduto: res.insertId, ...produto});
    })
};

ProdutoModel.findByld = (id, result) =>{
};

ProdutoModel.getAll = result => {
}

ProdutoModel.updateByld = (id, produto, result) =>{
}

ProdutoModel.remove = (id, result) =>{
}

ProdutoModel.removeAll = (result) =>{
}

module.exports = ProdutoModel