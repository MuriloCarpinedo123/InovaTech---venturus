const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Configuração do Supabase em CommonJS
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const cadastrarAnimal = async (req, res) => {
  try {
    const { nome, especie, porte, castrado, vacinado, descricao, foto } = req.body;

    // Validação simples
    if (!nome || !especie || !porte || castrado === undefined || vacinado === undefined || !descricao || !foto) {
      return res.status(400).json({ erro: "Todos os campos obrigatórios devem ser preenchidos corretamente." });
    }

    // Inserir no Supabase
    const { data, error } = await supabase
      .from('animais')
      .insert([
        { nome, especie, porte, castrado, vacinado, descricao, foto }
      ]);

    if (error) {
      console.log(error);
      return res.status(500).json({ erro: "Erro interno ao cadastrar o animal." });
    }

    return res.status(201).json(data[0]);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ erro: "Erro interno ao cadastrar o animal." });
  }
};

module.exports = { cadastrarAnimal };
