import telaInicial from "../support/pageObjects/tela-inicial.page";

describe('Regressivo ToDo App', () => {

    context('Validar a tela inicial', () => {
        beforeEach(() => {
            cy.visit('/');
        });

        it('Validar a aria label de input de dados', () => {
            telaInicial.validarInput('What needs to be done?');
        })

    })

    context('Validar a adição de itens', () => {
        beforeEach(() => {
            cy.visit('/');
        });

        it('Adicionar um ou vários itens na lista', () => {
            var todoItens = ["Maçã", "Banana", "Uva"];
            todoItens.forEach(function (item, indice, array) {
                telaInicial.inputText(item);

            })

            telaInicial.validarContador('3');// Validar que o contador é igual a 3
        })
    })

    context('Validar a conclusão de itens', () => {
        beforeEach(() => {
            cy.visit('/')
            var todoItens = ["Maçã", "Banana", "Uva"];

            todoItens.forEach(function (item, indice, array) {
                telaInicial.inputText(item);
            })
        })

        it('Concluir um item da lista de ToDo', () => {
            telaInicial.concluirItem();
            telaInicial.validarContador(2)
        })

    })

    context('Validar o filtro da aplicação', () => {
        beforeEach(() => {
            cy.visit('/')
            var todoItens = ["Maçã", "Banana", "Uva"];

            todoItens.forEach(function (item, indice, array) {
                telaInicial.inputText(item);
            })

            telaInicial.concluirItem();
        })

        it('Validar itens ativos na lista', () => {
            telaInicial.filtrarItem("Active")
            telaInicial.validarSizeToDo(2);
        })

        it('Validar itens concluídos na lista', () => {
            telaInicial.filtrarItem("Completed")
            telaInicial.validarSizeToDo(1);
        })

    })

    context('Validar a remoção de itens', () => {
        beforeEach(() => {
            cy.visit('/');
            var todoItens = ["Maçã", "Banana", "Uva"];

            todoItens.forEach(function (item, indice, array) {
                telaInicial.inputText(item);
            })

        })

        it('Deleção de um item da lista', () => {
            telaInicial.deletarItem()
            telaInicial.validarSizeToDo(2);
        })
    })

})