/**
 * Feature -> describe
 * background -> context ou beforeEach
 * caso de teste -> it
 * passos -> cy
 */

import telaInicial from '../support/pageObjects/tela-inicial.page';

describe('Acessar a pagina do todo mvc', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/backbone_marionette/')
    telaInicial.inputText();
  })
})