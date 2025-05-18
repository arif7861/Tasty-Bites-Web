describe('Header Buttons Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to Home page', () => {
    cy.get('nav').contains('Home').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('should navigate to Popular Food page', () => {
    cy.get('nav').contains('Popular Food').click();
    cy.url().should('include', '/popular');
  });

  it('should navigate to Account page', () => {
    cy.get('nav').contains('Account').click();
    cy.url().should('include', '/account');
  });

  it('should navigate to Support page', () => {
    cy.get('nav').contains('Support').click();
    cy.url().should('include', '/help-support');
  });

  it('should navigate to Cart page', () => {
    cy.get('nav').contains('Cart').click();
    cy.url().should('include', '/cart');
  });

  it('should navigate to Login page when not logged in', () => {
    cy.get('nav').contains('Login').click();
    cy.url().should('include', '/login');
  });

  it('should navigate to Register page', () => {
    cy.get('nav').contains('Register').click();
    cy.url().should('include', '/register');
  });
});
