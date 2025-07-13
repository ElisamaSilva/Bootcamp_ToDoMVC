import telaInicial from "../support/pageObjects/tela-inicial.page";

describe('Concluir item na lista de toDo', () => {

    beforeEach(() => {
        cy.visit('/');
        var todoItens = ["Maçã", "Banana", "Uva"]

        todoItens.forEach(function (item, indice, array) {
            telaInicial.inputText(item);
        })
    })
    
        it('Concluir um item na lista', () => {
            telaInicial.concluirItem();

        })
});
