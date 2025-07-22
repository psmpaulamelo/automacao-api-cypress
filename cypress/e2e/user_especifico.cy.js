/// <reference types="cypress" />

describe('Apresentar dados de um id especifico em uma pagina especifica', () => {
    it.only('Trazer os dados do id=5 da pagina=1', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/5'
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