describe('button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=widgets-button--default'));
  it('should display the button', () => {
    cy.get('button').should('exist');
  });
  it('should display the correct text', () => {
    cy.get('button').should('contain', 'Primary');
  });

  it('should be disabled', () => {
    cy.get('button').should('be.disabled');
  });
});
