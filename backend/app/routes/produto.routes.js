module.exports = app => {
    const produtoController =
require("../controllers/produto.controller");

    app.post("/produtos", produtoController.create);
    app.get("/produtos", produtoController.findAll);
    app.get("/produtos/:produtold", produtoController.findByld);
    app.put("/produtos/:produtold", produtoController.update);
    app.delete("/produtos/:produtold", produtoController.delete);
    app.delete("/produtos", produtoController.deleteAll);
}