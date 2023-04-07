describe('input component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=widgets-input--default'));
  it('should display input', () => {
    cy.get('#label').should('exist');
    cy.get('#label').should('have.attr', 'type', 'text');
  });
  it('should focus input', () => {
    cy.get('#label').focus();
  });
  it('should update its value when typed into', () => {
    cy.get('#label').focus();
    cy.get('#label').type('Hello, World!');
    cy.get('#label').should('have.value', 'Hello, World!');
    cy.get('#label').clear();
    cy.get('#label').should('have.value', '12312');
  });
});
