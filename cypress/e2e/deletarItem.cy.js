import telaInicial from "../support/pageObjects/tela-inicial.page";

describe('Deletar itens da lista', () => {

    beforeEach(() => {
        cy.visit('/');
        var todoItens = ["Maçã", "Banana", "Uva"];

        todoItens.forEach(function (item, indice, array) {
            telaInicial.inputText(item);
        })

    })

    it('Deleção de um item da lista', () => {
        telaInicial.deletarItem();
    })

});
