import { Questionario, Usuario } from "../Models/index.js";

class QuestionarioController {
  static async criar(req, res) {
    try {
      const { usuarioId } = req.body;

      const usuario = await Usuario.findByPk(usuarioId);
      if (!usuario) {
        return res.status(400).json({ erro: "Usuário não encontrado. Cadastre um tutor antes do questionário." });
      }

      
      const existente = await Questionario.findOne({ where: { usuarioId } });
      if (existente) {
        return res.status(400).json({ erro: "Este tutor já possui um questionário cadastrado." });
      }

      const obrigatorios = [
        "quantos_animais_possui",
        "motivos_para_adotar",
        "quem_vai_sustentar_o_animal",
        "numero_adultos_na_casa",
        "numero_criancas_na_casa",
        "residencia_tipo",
        "proprietario_permite_animais",
        "todos_de_acordo_com_adocao",
        "responsavel_pelo_animal",
        "responsavel_concorda_com_adocao",
        "ha_alergico_ou_pessoas_que_nao_gostam",
        "gasto_mensal_estimado",
        "valor_disponivel_no_orcamento",
        "tipo_alimentacao",
        "local_que_o_animal_vai_ficar",
        "forma_de_permanencia",
        "forma_de_confinamento",
        "tera_brinquedos",
        "tera_abrigo",
        "tera_passeios_acompanhado",
        "tera_passeios_sozinho",
        "companhia_outro_animal",
        "companhia_humana_24h",
        "companhia_humana_parcial",
        "sem_companhia_humana",
        "sem_companhia_animal",
        "o_que_faz_em_viagem",
        "o_que_faz_se_fugir",
        "o_que_faz_se_nao_puder_criar",
        "animais_que_ja_criou",
        "destino_animais_anteriores",
        "costuma_esterilizar",
        "costuma_vacinar",
        "costuma_vermifugar",
        "veterinario_usual",
        "forma_de_educar",
        "envia_fotos_e_videos_do_local",
        "aceita_visitas_e_fotos_do_animal",
        "topa_entrar_grupo_adotantes",
        "concorda_com_taxa_adocao",
        "data_disponivel_para_buscar_animal"
      ];

      for (const campo of obrigatorios) {
        if (req.body[campo] === undefined || req.body[campo] === null) {
          return res.status(400).json({ erro: `Campo obrigatório faltando: ${campo}` });
        }
      }

      const novoQuestionario = await Questionario.create(req.body);
      return res.status(201).json(novoQuestionario);
    } catch (erro) {
      console.error(erro);
      return res.status(500).json({ erro: "Erro interno ao cadastrar o questionário." });
    }
  }

  static async listar(req, res) {
    try {
      const questionarios = await Questionario.findAll({ include: Usuario });
      return res.status(200).json(questionarios);
    } catch (erro) {
      console.error(erro);
      return res.status(500).json({ erro: "Erro ao listar questionários." });
    }
  }

  static async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const questionario = await Questionario.findByPk(id, { include: Usuario });

      if (!questionario) {
        return res.status(404).json({ erro: "Questionário não encontrado." });
      }

      return res.status(200).json(questionario);
    } catch (erro) {
      console.error(erro);
      return res.status(500).json({ erro: "Erro ao buscar questionário." });
    }
  }
}

export default QuestionarioController;