# 🤖 Automação de Testes de API com Cypress

Este projeto realiza testes automatizados de API REST utilizando o framework **Cypress**, com foco na API pública [Reqres.in](https://reqres.in). Foram implementados testes para os métodos HTTP `GET`, `POST` e `PUT`, garantindo a validação de funcionalidades essenciais.

---

## 📁 Estrutura do Projeto

AUTOMACAO_API_CYPRESS/
├── cypress/
│ └── e2e/
│ ├── GET_user_especifico.cy.js
│ ├── GET_user_lista_geral.cy.js
│ ├── POST_novo_user.cy.js
│ ├── PUT_atualizar_user.cy.js
│ └── reports/ # Relatórios de testes em HTML
├── cypress.config.js # Configuração do Cypress
├── cypress.env.json # Variáveis de ambiente
├── package.json # Dependências e scripts
├── .gitignore
└── readme.md # Documentação do projeto


---

## 🚀 Execução dos Testes

1. **Instale as dependências** do projeto:
   ```bash
   npm install

2Execute os testes via terminal:
```bash
npx cypress run
Ou, para executar com a interface interativa:
```bash
npx cypress open

🔍 Relatórios de Teste
Após a execução dos testes, um relatório em HTML será gerado automaticamente na pasta:
cypress/e2e/reports/

🔗 Como visualizar o relatório:
Copie o caminho do arquivo HTML gerado (por exemplo, index.html) e abra diretamente no navegador. Exemplo:
C:/Users/SeuUsuario/Projetos/AUTOMACAO_API_CYPRESS/cypress/e2e/reports/index.html

🔌 API Utilizada
Os testes foram criados com base na API pública Reqres:

🌐 https://reqres.in

Endpoints testados:

GET /users – Lista de usuários

GET /users/:id – Usuário específico

POST /users – Criação de novo usuário

PUT /users/:id – Atualização de usuário existente

📦 Dependências
Cypress

Mocha Reporter / HTML Report Plugin (caso aplicável)

👩‍💻 Autor
Paula Melo – Analista de Qualidade (QA)
