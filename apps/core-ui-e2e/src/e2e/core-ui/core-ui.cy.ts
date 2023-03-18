describe('core-ui: CoreUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=coreui--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CoreUi!');
    });
});
