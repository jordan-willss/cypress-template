// / <reference types="Cypress" />

import {findListEntry} from '../pages/homepage';
import {inputMap} from '../pages/inputsPage';

import fixtures from '../fixtures/example.json';

describe('example spec', () => {
  /**
   * When linking a Cypress Test Case to a TestRail Test Case, we just have
   * to add the Case reference from TestRail to the start of the name,
   * i.e. "C###### {name of test case}", see below for an example in practice
   */
  it('C1 Input test', () => {
    // We can use a '/' to navigate to the homepage as the baseUrl is set in
    // cypress.config.js as "https://the-internet.herokuapp.com/"
    cy.visit('/');

    findListEntry('Inputs').click();

    inputMap.header()
        .should('have.text', fixtures.input.header);
    inputMap.input()
        .type('0123456789', {delay: 100})
        .should('have.value', fixtures.input.inputExpectation);
  });
});
