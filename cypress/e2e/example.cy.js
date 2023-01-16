/// <reference types="Cypress" />

import { findListEntry } from "../pages/homepage";
import { inputMap } from '../pages/inputsPage';

import fixtures from '../fixtures/example.json';

describe('template spec', () => {
  it('passes', () => {
    // We can use a '/' to navigate to the homepage as the baseUrl is set in
    // cypress.config.js as "https://the-internet.herokuapp.com/"
    cy.visit('/');
    findListEntry('Inputs').click();
    inputMap.header()
      .should('have.text', fixtures.input.header);
    inputMap.input()
      .type('0123456789', { delay: 100 })
      .should('have.value', fixtures.input.inputExpectation);
  })
})