import { Usuario } from "../Models/index.js";

class UsuarioController {

    
  static async criar(req, res) {
    try {
      const {
        nome_completo,
        senha,
        email,
        cidade,
        estado,
        idade,
        telefone,
        instagram,
        facebook
      } = req.body;


      if (!nome_completo || !senha || !email || !cidade || !estado || !idade || !telefone) {
        return res.status(400).json({
          erro: "Todos os campos obrigatórios devem ser preenchidos corretamente."
        });
      }


      const emailExistente = await Usuario.findOne({ where: { email } });
      if (emailExistente) {
        return res.status(400).json({
          erro: "Email preenchido já está sendo utilizado."
        });
      }


      const novoUsuario = await Usuario.create({
        nome_completo,
        senha,
        email,
        cidade,
        estado,
        idade,
        telefone,
        instagram,
        facebook
      });

      return res.status(201).json(novoUsuario);
    } catch (erro) {
      console.error("Erro ao cadastrar tutor:", erro);
      return res.status(500).json({
        erro: "Erro interno ao cadastrar o tutor."
      });
    }
  }


  static async listar(req, res) {
    try {
      const { id } = req.params;

      if (id) {
        // busca por id
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
          return res.status(404).json({ erro: "Usuário não encontrado." });
        }
        return res.status(200).json(usuario);
      }

      // busca todos
      const usuarios = await Usuario.findAll({
        order: [["createdAt", "DESC"]]
      });

      return res.status(200).json({
        total: usuarios.length,
        data: usuarios
      });
    } catch (erro) {
      console.error("Erro ao listar usuários:", erro);
      return res.status(500).json({
        erro: "Erro ao listar usuários."
      });
    }
  }
}

export default UsuarioController;
