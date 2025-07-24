# 🤖 Automação de Testes de API com Cypress

Este projeto realiza testes automatizados da API REST pública [Reqres.in](https://reqres.in), utilizando o framework **Cypress**. Os testes cobrem os métodos HTTP `GET`, `POST` e `PUT`, garantindo a validação de funcionalidades essenciais.

---

## 📁 Estrutura do Projeto

AUTOMACAO_API_CYPRESS/
├── cypress/
│   ├── downloads/               # (diretório padrão do Cypress para arquivos baixados)
│   ├── e2e/                     # Casos de teste
│   │   ├── GET_user_especifico.cy.js
│   │   ├── GET_user_lista_geral.cy.js
│   │   ├── POST_novo_user.cy.js
│   │   └── PUT_atualizar_user.cy.js
│   └── reports/                 # Relatórios gerados (.json e .html)
├── node_modules/               # Dependências instaladas
├── .gitignore
├── cypress.config.js           # Configuração do Cypress
├── cypress.env.json            # Variáveis de ambiente (URL, tokens, etc.)
├── package.json                # Scripts e dependências do projeto
├── package-lock.json
└── README.md                   # Documentação do projeto

2. Execute os testes em modo headless e gere o relatório HTML consolidado:
    bash
    npm run test:report
    Esse comando executa:

   -  Os testes com Cypress

   -  Une todos os arquivos .json gerados

   - Cria um único relatório HTML consolidado em cypress/reports/html/report.html

📊 Visualização do Relatório de Testes
    Após a execução:

    Acesse o arquivo:   
    cypress/reports/html/report.html
    Abra o arquivo .html diretamente no navegador para visualizar o resultado completo dos testes com detalhes.

🧹 Limpando relatórios antigos
    Antes de executar novamente, você pode limpar todos os arquivos anteriores com: 
    npm run clean:reports

🔌 API Utilizada
    Base: https://reqres.in

    Endpoints testados:
    GET /users – Lista de usuários

    GET /users/:id – Usuário específico

    POST /users – Criação de novo usuário

    PUT /users/:id – Atualização de usuário existente   

📦 Principais Dependências
    Cypress

    Mochawesome

    mochawesome-merge

    mochawesome-report-generator (marge)

👩‍💻 Autor
    Paula Melo – Analista de Qualidade (QA)
    Especialista em testes funcionais, automação de APIs e criação de relatórios de evidência.