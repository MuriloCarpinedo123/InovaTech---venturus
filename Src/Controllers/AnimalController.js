import Animal from "./models/Animal.js";

class AnimalController {
  static async criar(req, res) {
    try {
      const { nome, especie, porte, castrado, vacinado, descricao, foto } = req.body;

      // Verifica se todos os campos obrigatórios estão preenchidos
      if (!nome || !especie || !porte || castrado === undefined || vacinado === undefined) {
        return res.status(400).json({ erro: "Todos os campos obrigatórios devem ser preenchidos corretamente." });
      }

      // Cria o registro no banco
      const novoAnimal = await Animal.create({
        nome,
        especie,
        porte,
        castrado,
        vacinado,
        descricao,
        foto
      });

      // Retorna 201 com o objeto criado
      return res.status(201).json(novoAnimal);

    } catch (erro) {
      console.error(erro);
      return res.status(500).json({ erro: "Erro interno ao cadastrar o animal." });
    }
  }
}

export default AnimalController;
