const sql = require("../configs/db");
const Usuario = function (usuario) {
  this.email = usuario.email;
  this.senha = usuario.senha;
  this.tipo = usuario.tipo;
};
Usuario.create = (usuario, result) => {
  sql.query("INSERT INTO usuarios SET ?", usuario, (err, res) => {
    if (err) result(err, null);
    else result(null, "Usuário criado com suscesso.");
  });
};
Usuario.findByEmail = (email, result) => {
  sql.query("SELECT * FROM usuarios WHERE email = ?", email, (err, res) => {
    if (err) result(err, null);
    else if (res.length) result(null, res[0]);
    else result({ type: "not_found" }, null);
  });
};
Usuario.findById = (idUsuario, result) => {
  sql.query("SELECT * FROM usuarios WHERE idusuario = ?", idUsuario, (err, res) => {
    if (err) result(err, null);
    else if (res.length) result(null, res[0]);
    else result({ type: "not_found" }, null);
  });
};
//Seleciona todos os produtos
Usuario.getAll = (result) => {
  sql.query("SELECT * FROM usuarios", (err, res) => {
    if (err) {
      console.log("erro: ", err);
      result(null, err);
      return;
    }
    console.log("usuarios: ", res);
    result(null, res);
  });
};
//Atualizar usuario por id
Usuario.updateById = (idUsuario, usuario, result) => {
  sql.query(
    "UPDATE usuarios SET email = ?, senha = ?, tipo = ? WHERE idusuario = ?",
    [usuario.email, usuario.senha, usuario.tipo, idUsuario],
    (err, res) => {
      if (err) {
        console.log("erro: ", err);
        result(null, err);
      } else if (res.affectedRows == 0) {
        result({ type: "not_found" }, null);
      } else {
        console.log("Usuário atualizado: ", { idusuario: idUsuario, ...usuario });
        result(null, { idusuario: idUsuario, ...usuario });
      }
    }
  );
};
//Remover usuario por id
Usuario.remove = (idUsuario, result) => {
  sql.query("DELETE FROM usuarios WHERE idusuario = ?", idUsuario, (err, res) => {
    if (err) {
      console.log("erro: ", err);
      result(err, null);
    } else if (res.affectedRows == 0) {
      result({ type: "not_found" }, null);
    } else {
      result(null, res);
    }
  });
};
module.exports = Usuario;
