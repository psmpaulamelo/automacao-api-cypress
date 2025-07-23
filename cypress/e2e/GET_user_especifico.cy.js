/// <reference types="cypress" />



/*teste referente a procurar de um usuário especifico em uma pagina especifica */
describe('Apresentar dados de um id especifico em uma pagina especifica', () => {
    it('Trazer os dados do id=5 da pagina=2', () => {
        cy.request({
            method: 'GET',
            url: '/api/users/5',
            headers: {
             'x-api-key': Cypress.env('apiKey')
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data.id).to.eq(5)
            expect(response.body.data.email).to.eq('charles.morris@reqres.in')
            expect(response.body.data.first_name).to.eq('Charles')
            expect(response.body.data.last_name).to.eq('Morris')
            expect(response.body.data.avatar).to.eq('https://reqres.in/img/faces/5-image.jpg')
            
        
        })

    })
})   



describe('Validar resposta para ID inválido', () => {
  it('Deve retornar 401 ao buscar um usuário inexistente', () => {
        cy.request({
        method: 'GET',
        url: '/api/users/53', 
        failOnStatusCode: false,
        }).then((response) => {
        expect(response.status).to.eq(401)
        })
    })
})

