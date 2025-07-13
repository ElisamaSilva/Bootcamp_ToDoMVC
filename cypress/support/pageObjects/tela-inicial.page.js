
const elem = require('../elements/tela-inicial.elements').ELEMENTS;
const concluirItem = require('../elements/tela-inicial.elements').ITENS;
const filtrarItem = require('../elements/tela-inicial.elements').FILTROS;

class telaInicial {

    inputText(dado) {
        cy.get(elem.inputToDo).type(dado).type('{enter}');
    }

    concluirItem() {
        cy.get(concluirItem.buttonConcluir).first().click();

    }

    filtrarItem(menu) {
        cy.get(filtrarItem.filtroToDo)
            .contains(menu)
            .should('be.visible')
            .click();

    }

    deletarItem() {
        cy.get(concluirItem.listaItens)
            .last()
            .find('button')
            .invoke('show')
            .click();
    }

}
export default new telaInicial();