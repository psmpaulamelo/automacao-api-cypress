/// <reference types="cypress" />

const { describe } = require("mocha")


describe("Listar todos os users", () => {   
    it('listar users da página 2', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data).to.be.an('array')

            const emails = response.body.data.map(user => user.email)
            expect(emails).to.include('michael.lawson@reqres.in')
        })    
    })
})

describe('Contar quando usuarios tem na pagina 1',() => {
    it('apresentar o total de usuario da pagina 1',() => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=1'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data).to.have.length(6)
        })
    
    })
})

