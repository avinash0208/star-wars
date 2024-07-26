describe('Counter E2E Tests', () => {
    it('increments the counter', () => {
      cy.visit('/');
      cy.contains('0');
      cy.get('button').contains('+').click();
      cy.contains('1');
    });
  
    it('decrements the counter', () => {
      cy.visit('/');
      cy.contains('0');
      cy.get('button').contains('-').click();
      cy.contains('-1');
    });
  
    it('increments the counter by 5', () => {
      cy.visit('/');
      cy.contains('0');
      cy.get('button').contains('Add 5').click();
      cy.contains('5');
    });
  });
  