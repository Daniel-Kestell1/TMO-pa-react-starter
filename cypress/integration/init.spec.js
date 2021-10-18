describe('Cypress', () => {   
  it('is working', () => {     
      expect(true).to.equal(true)   
  }) 
  
  it('opens the app', () => {   
      cy.visit('http://localhost:3000') 
  })

  it("header contains recipe heading with a message that there are no recipes", () => {
    cy.findByRole('heading').should('contain', 'My Recipes');
    cy.contains(/There are no recipes to list/i).should('exist');
})

  

})