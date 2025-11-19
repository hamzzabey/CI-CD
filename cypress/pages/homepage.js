const HomePage = {
  openMenu() {
    cy.get('#open-navigation-menu-mobile').should('be.visible').click();
  },

  scrollToBottom() {
    cy.scrollTo('bottom');
  },

  clickProfile() {
    cy.get(':nth-child(12) > .next-bve2vl').should('be.visible').click();
  },

  clickSettings() {
    cy.get(':nth-child(8) > .next-bve2vl').should('be.visible').click();
  }
};

export default HomePage;