describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should be able to add 1 and 2', () => {
    cy.get('#number1').click();
    cy.get("#operator-add").click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get(".display").should('contain', '3')
  })

  it('should be able to chain multiple operations', () => {
    cy.get('#number4').click();
    cy.get("#operator-add").click();
    cy.get('#number3').click();
    cy.get("#operator-subtract").click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get(".display").should('contain', '1')
  });

  it('should be able to deal with negative numbers', () => {
    cy.get('#number4').click();
    cy.get("#operator-subtract").click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get(".display").should('contain', '-2')
  });
  
  it('should be able to deal with decimals', () => {
    cy.get('#number1').click();
    cy.get("#operator-divide").click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get(".display").should('contain', '0.5')
  });

  it('should be able to deal with large numbers', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get("#operator-divide").click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get(".display").should('contain', '1000')
  });

  it('should show that division by zero is not possible', () => {
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'SYNTAX ERROR');
  })

})