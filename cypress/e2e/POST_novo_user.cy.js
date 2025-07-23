/// <reference types="cypress" />

/* teste de criação pra novo usuário */
describe('Incluir novo usuário', () => {
  it('Incluir novo usuário', () => {
    const novoUsuario = {
      name: "Maria Eduarda",
      job: "Dev Pleno"
    };
    cy.request({
      method: 'POST',
      url: '/api/users', 
      failOnStatusCode: false, 
      headers: {
      'x-api-key': Cypress.env('apiKey')
      },
      body: novoUsuario
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq('Maria Eduarda');
      expect(response.body.job).to.eq('Dev Pleno');
      expect(response.body.id).to.exist;
      expect(response.body.createdAt).to.exist;
    });
  });
});
