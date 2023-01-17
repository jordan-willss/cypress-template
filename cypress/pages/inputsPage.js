// The cy.get methods here could be improved, for example,
// imagine a new input element was added to the page,
// would the cy.get below be broken?
export const inputMap = {
  header: () => cy.get('h3'),
  input: () => cy.get('input'),
};
