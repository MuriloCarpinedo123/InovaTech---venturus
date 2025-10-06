import { Animal } from "../Models/index.js";

class AnimalController {
  // ✅ Cadastrar animal
  static async criar(req, res) {
    try {
      const { nome, especie, porte, castrado, vacinado, descricao, foto } = req.body;

      if (!nome || !especie || !porte || castrado === undefined || vacinado === undefined) {
        return res
          .status(400)
          .json({ erro: "Todos os campos obrigatórios devem ser preenchidos corretamente." });
      }

      const novoAnimal = await Animal.create({
        nome,
        especie,
        porte,
        castrado,
        vacinado,
        descricao,
        foto,
      });

      return res.status(201).json(novoAnimal);
    } catch (erro) {
      console.error(erro);
      return res.status(500).json({ erro: "Erro interno ao cadastrar o animal." });
    }
  }

  // ✅ Listar animais com filtros
  static async listar(req, res) {
    try {
      const { especie, porte, castrado, vacinado } = req.query; // Filtros opcionais

      const filtros = {};

      if (especie) filtros.especie = especie;
      if (porte) filtros.porte = porte;
      if (castrado !== undefined) filtros.castrado = castrado === "true";
      if (vacinado !== undefined) filtros.vacinado = vacinado === "true";

      const animais = await Animal.findAll({
        where: filtros,
        order: [["createdAt", "DESC"]], // mais recentes primeiro
      });

      return res.status(200).json({
        data: animais,
        total: animais.length,
      });
    } catch (erro) {
      console.error("Erro ao buscar animais:", erro);
      return res.status(500).json({ erro: "Erro ao buscar animais" });
    }
  }
}

export default AnimalController;
