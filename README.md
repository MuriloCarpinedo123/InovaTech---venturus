🐾 InovaTech - Sistema de Adoção

Sistema RESTful desenvolvido para gerenciar o cadastro de tutores, animais e questionários de adoção.
Projeto acadêmico do grupo InovaTech.

👥 Integrantes

🧑‍💻 Murilo Duarte Carpinedo

👨‍💻 João Miguel dos Santos Silva

👨‍💻 Lucas Mickael Silva Lima

⚙️ Como usar

A API utiliza o padrão REST e responde em JSON.
As rotas estão organizadas em três módulos principais:
Animal, Usuário e Questionário.

🐶 Rotas de Animal
🔹 POST /animal

Descrição:
Cadastra um novo animal no sistema.

📍 Endpoint:

http://localhost:8080/animal


📦 Body (JSON):

{
  "nome": "",
  "especie": "",
  "porte": "",
  "castrado": "",
  "vacinado": "",
  "descricao": "",
  "foto": ""
}


✅ Resposta (201 – Created):

Animal cadastrado com sucesso.

🔹 GET /animal

Descrição:
Lista todos os animais cadastrados.

📍 Endpoint:

http://localhost:8080/animal


✅ Resposta (200 – OK):
Retorna todos os animais cadastrados no banco de dados.

🔹 GET /animal com filtros

Descrição:
Permite buscar animais cadastrados com base em filtros específicos, utilizando query parameters.

📘 Como usar:
Adicione os parâmetros após o endpoint, usando ? seguido dos query params desejados.

📍 Exemplo simples:

http://localhost:8080/animal?especie=cachorro


📍 Exemplo com múltiplos filtros:

http://localhost:8080/animal?especie=gato&porte=pequeno&castrado=true


💡 A aplicação interpreta os parâmetros após o ? como filtros, retornando apenas os animais correspondentes.

👤 Rotas de Usuário (Tutor)
🔹 POST /usuario

Descrição:
Cadastra um novo tutor no sistema.

📍 Endpoint:

http://localhost:8080/usuario


📦 Body (JSON):

{
  "nome_completo": "",
  "senha": "",
  "email": "",
  "cidade": "",
  "estado": "",
  "idade": "",
  "telefone": "",
  "instagram": "",
  "facebook": ""
}


📋 Campos obrigatórios:
nome_completo, senha, email, cidade, estado, idade, telefone

✅ Resposta (201 – Created):
Retorna os dados do tutor cadastrado.

❌ Erros possíveis:

400 – Campos obrigatórios não preenchidos

400 – Email já cadastrado

500 – Erro interno ao cadastrar tutor

🔹 GET /usuario

Descrição:
Lista todos os tutores cadastrados.

📍 Endpoint:

http://localhost:8080/usuario


✅ Resposta (200 – OK):

{
  "total": 3,
  "data": [
    {
      "id": "uuid",
      "nome_completo": "Exemplo",
      "email": "exemplo@email.com",
      "cidade": "São Paulo",
      "estado": "SP",
      "idade": 25,
      "telefone": "11999999999",
      "instagram": "@exemplo",
      "facebook": "Exemplo Silva"
    }
  ]
}


❌ Erros possíveis:

500 – Erro interno ao listar usuários

🔹 GET /usuario/:id

Descrição:
Busca um tutor específico pelo seu ID.

📍 Endpoint:

http://localhost:8080/usuario/{id}


📘 Exemplo:

http://localhost:8080/usuario/5d8f0e4c-93a3-4e6b-a65d-1c22ab99f6d2


✅ Resposta (200 – OK):

{
  "id": "uuid",
  "nome_completo": "Exemplo",
  "email": "exemplo@email.com",
  "cidade": "São Paulo",
  "estado": "SP",
  "idade": 25,
  "telefone": "11999999999"
}


❌ Erros possíveis:

404 – Usuário não encontrado

500 – Erro interno ao buscar usuário

📋 Rotas de Questionário
🔹 POST /questionario

Descrição:
Cadastra um novo questionário de adoção, vinculado a um tutor já cadastrado.
Cada tutor pode possuir apenas um questionário.

📍 Endpoint:

http://localhost:8080/questionario


📦 Body (JSON):

{
  "usuarioId": "",
  "quantos_animais_possui": "",
  "motivos_para_adotar": "",
  "quem_vai_sustentar_o_animal": "",
  "numero_adultos_na_casa": "",
  "numero_criancas_na_casa": "",
  "residencia_tipo": "",
  "proprietario_permite_animais": "",
  "todos_de_acordo_com_adocao": "",
  "responsavel_pelo_animal": "",
  "responsavel_concorda_com_adocao": "",
  "ha_alergico_ou_pessoas_que_nao_gostam": "",
  "gasto_mensal_estimado": "",
  "valor_disponivel_no_orcamento": "",
  "tipo_alimentacao": "",
  "local_que_o_animal_vai_ficar": "",
  "forma_de_permanencia": "",
  "forma_de_confinamento": "",
  "tera_brinquedos": "",
  "tera_abrigo": "",
  "tera_passeios_acompanhado": "",
  "tera_passeios_sozinho": "",
  "companhia_outro_animal": "",
  "companhia_humana_24h": "",
  "companhia_humana_parcial": "",
  "sem_companhia_humana": "",
  "sem_companhia_animal": "",
  "o_que_faz_em_viagem": "",
  "o_que_faz_se_fugir": "",
  "o_que_faz_se_nao_puder_criar": "",
  "animais_que_ja_criou": "",
  "destino_animais_anteriores": "",
  "costuma_esterilizar": "",
  "costuma_vacinar": "",
  "costuma_vermifugar": "",
  "veterinario_usual": "",
  "forma_de_educar": "",
  "envia_fotos_e_videos_do_local": "",
  "aceita_visitas_e_fotos_do_animal": "",
  "topa_entrar_grupo_adotantes": "",
  "concorda_com_taxa_adocao": "",
  "data_disponivel_para_buscar_animal": ""
}


✅ Resposta (201 – Created):
Retorna o questionário criado com sucesso.

❌ Erros possíveis:

400 – Usuário não encontrado

400 – Tutor já possui um questionário

400 – Campo obrigatório ausente

500 – Erro interno ao cadastrar questionário

🔹 GET /questionario

Descrição:
Lista todos os questionários cadastrados, incluindo o tutor vinculado.

📍 Endpoint:

http://localhost:8080/questionario


✅ Resposta (200 – OK):

[
  {
    "id": "uuid",
    "usuarioId": "uuid",
    "motivos_para_adotar": "Companhia",
    "residencia_tipo": "Casa",
    "Usuario": {
      "id": "uuid",
      "nome_completo": "Murilo Duarte",
      "email": "murilo@email.com"
    }
  }
]


❌ Erros possíveis:

500 – Erro interno ao listar questionários

🔹 GET /questionario/:id

Descrição:
Busca um questionário específico pelo ID, retornando também o tutor vinculado.

📍 Endpoint:

http://localhost:8080/questionario/{id}


📘 Exemplo:

http://localhost:8080/questionario/3f6a9b12-9d4f-4f20-a55b-5c22ab99d611


✅ Resposta (200 – OK):

{
  "id": "uuid",
  "usuarioId": "uuid",
  "motivos_para_adotar": "Gosto de animais",
  "residencia_tipo": "Apartamento",
  "Usuario": {
    "id": "uuid",
    "nome_completo": "João Miguel",
    "email": "joao@email.com"
  }
}


❌ Erros possíveis:

404 – Questionário não encontrado

500 – Erro interno ao buscar questionário

🧾 Resumo
Entidade	Métodos disponíveis	Descrição
🐶 Animal	POST, GET	Cadastra e lista animais
👤 Usuário	POST, GET, GET/:id	Gerencia tutores cadastrados
📋 Questionário	POST, GET, GET/:id	Gerencia questionários de adoção
💬 Agradecimento
🧠 Sobre a Experiência

Em nome da equipe InovaTech, queremos expressar nossa sincera gratidão à Venturus pela oportunidade de participar deste projeto.
Essa experiência foi extremamente valiosa — aprendemos muito, evoluímos como equipe e tivemos a chance de aplicar nossos conhecimentos em um desafio real.

🙏 Nossas Desculpas

Pedimos desculpas por não termos conseguido finalizar o projeto com todos os requisitos planejados.
Apesar disso, nos dedicamos ao máximo e valorizamos cada etapa do processo, que nos trouxe aprendizados técnicos e pessoais.

💙 Nosso Agradecimento

Agradecemos de coração pela confiança, pelo apoio e pela oportunidade de fazer parte dessa jornada.

Com gratidão,
Equipe InovaTech
