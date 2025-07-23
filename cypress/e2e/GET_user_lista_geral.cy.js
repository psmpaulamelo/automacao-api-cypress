/// <reference types="cypress" />

/*teste referente todos os usuário apresentado na pagina 2  */
describe("Listar todos os users", () => {   
    it('listar users da página 2', () => {
        cy.request({
            method: 'GET',
            url: '/api/users?page=2',
            headers: {
            'x-api-key': Cypress.env('apiKey')
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data).to.be.an('array')

            const emails = response.body.data.map(user => user.email)
            expect(emails).to.include('michael.lawson@reqres.in')
        })    
    })
})

/*teste referente contagem de usuários apresentados no response  na pagina especifica  */
describe('Apresentar o total de usuario por pagina ',() => {
    it('Apresentar o total de usuario por pagina na pagina 1',() => {
        cy.request({
            method: 'GET',
            url: '/api/users?page=1',
            headers: {
             'x-api-key': Cypress.env('apiKey')
             }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.page).to.eq(1)
            expect(response.body.per_page).to.eq(6)
            expect(response.body.total).to.eq(12)
        })
    
    })
})

