import { Usuario } from "../Models/index.js";

class UsuarioController {
  // POST /usuario → cria um novo tutor
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

      // ✅ Verificação de campos obrigatórios
      if (!nome_completo || !senha || !email || !cidade || !estado || !idade || !telefone) {
        return res.status(400).json({
          erro: "Todos os campos obrigatórios devem ser preenchidos corretamente."
        });
      }

      // ✅ Verifica se o email já existe
      const emailExistente = await Usuario.findOne({ where: { email } });
      if (emailExistente) {
        return res.status(400).json({
          erro: "Email preenchido já está sendo utilizado."
        });
      }

      // ✅ Cria novo usuário
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
}

export default UsuarioController;
