describe('Mudando a cor da aplicação', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('A aplicação tem que começar na cor azul', () => {
    cy.get('body')
      .should('have.class', 'blue')
  })

  it('Mudando a cor da aplicação para verde', () => {
    cy.get('[data-color="green"]')
      .click();
    cy.get('body')
      .should('have.class', 'green')    
  })  
  it('Mudando a cor da aplicação para laranja', () => {
    cy.get('[data-color="orange"]')
      .click();
    cy.get('body')
      .should('have.class', 'orange')    
  })
  it('Mudando a cor da aplicação para azul', () => {
    cy.get('[data-color="orange"]')
      .click();
    cy.get('body')
      .should('have.class', 'orange')    
    cy.get('[data-color="blue"]')
      .click();
    cy.get('body')
      .should('have.class', 'blue')
  })  
})
