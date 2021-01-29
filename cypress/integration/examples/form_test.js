// - [ ] test that you can add text to the box
// - [ ] test that you can select multiple toppings
// - [ ] test that you can submit the form

describe('Pizza Order App', ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3001");
    })
    // const nameInput = () => cy.get('input[name="name"]');
    // const emailInput = () => cy.get('input[name="email"]');
    // const pwInput = () => cy.get('input[name="password"]');
    // const termsInput = () => cy.get('input[name="terms"]');
    
    it ('sanity test', ()=>{
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(3);
    })

    it('that you can add text to the box',()=>{
        cy.get('input[name:"ordername"]').type('Testing')
        .should('exist')
        .should('have.value', 'Testing')
    })

    it('test that you can select multiple toppings', ()=>{
        cy.get('input[name:"pepperoni"]').should('have.value', 'false')
        .click()
        .should('have.value', "true")
        cy.get('input[name:"sausage"]').should('have.value', 'false')
        .click()
        .should('have.value', "true")
    })

    it('test that you can submit the form', ()=>{
        cy.get('input[name:"ordername"]').type('Monica');
        cy.get('select[name:"size"]').click();
        cy.get('input[name:"sauce"]').click();
        cy.get('button').click();
        
    })
});