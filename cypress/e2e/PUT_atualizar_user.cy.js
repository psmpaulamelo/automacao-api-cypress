/// <reference types="cypress" />

/* atualizar um usuario de um cadastro existente */
describe('Atualizar um cadastro de um usuario', () => {
    it('Atualizar um cadastro de um usuario', () => {
        cy.request({
            method: 'PUT',
            url: '/api/users/4',
            headers: {
            'x-api-key': Cypress.env('apiKey')
            },
            body: {
                name: "morpheus",
                job: "zion resident"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq('morpheus')
            expect(response.body.job).to.eq('zion resident')
            expect(response.body.updatedAt).to.exist
        })    
    })
})            
 
/* atualizar um cadastro via PUT de um novo user que acabou de ser criado */
describe('Atualização de usuário - PUT', () => {
  it('Deve criar e atualizar um usuário com sucesso', () => {

    const usuarioInicial = {
      name: 'Maria Eduarda',
      job: 'Dev Pleno'
    };

    // 1. Criação do usuário (POST)
    cy.request({
      method: 'POST',
      url: '/api/users',
      body: usuarioInicial,
      failOnStatusCode: false,
      headers: {
        'x-api-key': Cypress.env('apiKey')
      }
    }).then((postResponse) => {
      expect(postResponse.status).to.eq(201);
      const userId = postResponse.body.id;

      // 2. Atualização do usuário (PUT)
      const dadosAtualizados = {
        name: 'Maria Eduarda',
        job: 'Tech Lead'
      };

      cy.request({
        method: 'PUT',
        url: `/api/users/${userId}`,
        body: dadosAtualizados,
        failOnStatusCode: false,
        headers: {
          'x-api-key': Cypress.env('apiKey')
        }
      }).then((putResponse) => {
        expect(putResponse.status).to.eq(200);
        expect(putResponse.body.name).to.eq('Maria Eduarda');
        expect(putResponse.body.job).to.eq('Tech Lead');
        expect(putResponse.body.updatedAt).to.exist;
      });
    });
  });
});
