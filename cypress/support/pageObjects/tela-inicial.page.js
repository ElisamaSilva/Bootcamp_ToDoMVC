
const elem = require('../elements/tela-inicial.elements').ELEMENTS;



class telaInicial {

    inputText() {
        cy.get(elem.inputToDo).type("Elisama{Enter}");
}

}

 export default new telaInicial();