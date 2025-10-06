InovaTech - Sistema de Adoção

Integrantes:
--------------------------
Murilo Duarte Carpinedo
João Miguel dos Santos Silva
Lucas Mickael Silva Lima
--------------------------

Como usar:

POST /animal
Descrição: Cadastra um novo animal no sistema.

Endpoint:
http://localhost:8080/animal



Body (JSON):
{
  "nome": "",
  "especie": "",
  "porte": "",
  "castrado": "",
  "vacinado": "",
  "descricao": "",
  "foto": ""
}


Resposta (201 – Created):
Animal cadastrado com sucesso.

GET /animal
Descrição: Lista todos os animais cadastrados.

Endpoint:
http://localhost:8080/animal


Resposta (200 – OK):
Retorna todos os animais cadastrados no banco de dados.

GET /animal com filtros
Descrição: Permite buscar animais cadastrados com base em filtros específicos, utilizando query parameters.

Como usar:
Adicione os parâmetros de filtragem após o endpoint, usando o símbolo de interrogação (?), seguido dos query 
params desejados.

Exemplo simples:
http://localhost:8080/animal?especie=cachorro


Exemplo com múltiplos filtros:
http://localhost:8080/animal?especie=gato&porte=pequeno&castrado=true

Nesse formato, a aplicação interpreta os parâmetros enviados após o ? como filtros de busca (query parameters),
permitindo retornar apenas os animais que correspondem aos critérios informados.

POST /usuario

Descrição:
Cadastra um novo tutor (usuário) no sistema.

Endpoint:

http://localhost:8080/usuario


Body (JSON):

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


Campos obrigatórios:
nome_completo, senha, email, cidade, estado, idade, telefone

Resposta (201 – Created):
Retorna os dados do tutor cadastrado.

Erros possíveis:

400 – Campos obrigatórios não preenchidos.

400 – Email já cadastrado.

500 – Erro interno ao cadastrar o tutor.

GET /usuario

Descrição:
Lista todos os tutores cadastrados no sistema.

Endpoint:

http://localhost:8080/usuario


Resposta (200 – OK):

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
      "facebook": "Exemplo Silva",
      "createdAt": "2025-10-06T13:00:00Z"
    }
  ]
}


Erros possíveis:

500 – Erro interno ao listar usuários.

GET /usuario/:id

Descrição:
Busca um tutor específico pelo seu ID.

Endpoint:

http://localhost:8080/usuario/{id}


Exemplo:

http://localhost:8080/usuario/5d8f0e4c-93a3-4e6b-a65d-1c22ab99f6d2


Resposta (200 – OK):

{
  "id": "uuid",
  "nome_completo": "Exemplo",
  "email": "exemplo@email.com",
  "cidade": "São Paulo",
  "estado": "SP",
  "idade": 25,
  "telefone": "11999999999",
  "instagram": "@exemplo",
  "facebook": "Exemplo Silva",
  "createdAt": "2025-10-06T13:00:00Z"
}


Erros possíveis:

404 – Usuário não encontrado.

500 – Erro interno ao buscar o usuário.

POST /questionario

Descrição:
Cadastra um novo questionário vinculado a um tutor (usuário) previamente cadastrado.
Cada tutor pode ter apenas um questionário.

Endpoint:

http://localhost:8080/questionario


Body (JSON):

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


Campos obrigatórios:
Todos os campos listados acima são obrigatórios, incluindo o usuarioId (referência ao tutor cadastrado).

Resposta (201 – Created):
Retorna o questionário criado com sucesso.

Erros possíveis:

400 – Usuário não encontrado.

400 – Tutor já possui um questionário cadastrado.

400 – Campo obrigatório ausente.

500 – Erro interno ao cadastrar o questionário.

GET /questionario

Descrição:
Lista todos os questionários cadastrados, incluindo as informações do tutor associado.

Endpoint:

http://localhost:8080/questionario


Resposta (200 – OK):

[
  {
    "id": "uuid",
    "usuarioId": "uuid",
    "quantos_animais_possui": "2",
    "motivos_para_adotar": "Companhia",
    "residencia_tipo": "Casa",
    "createdAt": "2025-10-06T13:00:00Z",
    "Usuario": {
      "id": "uuid",
      "nome_completo": "Murilo Duarte",
      "email": "murilo@email.com"
    }
  }
]


Erros possíveis:

500 – Erro interno ao listar questionários.

GET /questionario/:id

Descrição:
Busca um questionário específico pelo seu ID, retornando também os dados do tutor vinculado.

Endpoint:

http://localhost:8080/questionario/{id}


Exemplo:

http://localhost:8080/questionario/3f6a9b12-9d4f-4f20-a55b-5c22ab99d611


Resposta (200 – OK):

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


Erros possíveis:

404 – Questionário não encontrado.

500 – Erro interno ao buscar questionário.
