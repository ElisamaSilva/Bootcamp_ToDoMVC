/**
 * Feature -> describe
 * background -> context ou beforeEach
 * caso de teste -> it
 * passos -> cy
 */

import telaInicial from "../support/pageObjects/tela-inicial.page";

describe('Adicionar item na lista lista de toDo', () => {

    /**Before - Antes do primeiro teste, executa uma ação.
     * BeforeEach é executado antes de cada teste dentro do describe.
     */

    beforeEach(() => {
        cy.visit('/');
    });

    it('Adicionar um item na lista', () => {
        telaInicial.inputText("Dado 1");
    })
    it('Adicionar um ou vários itens na lista', () => {
        var todoItens = ["Maçã", "Banana", "Uva"];
        todoItens.forEach(function (item, indice, array) { 
            telaInicial.inputText(item);
          
        })
    })
});
