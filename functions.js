//criar um app de frases motivacionais

// declarar a função

function createPhrases() {
    console.log("Estudar é muito bom")
    console.log("Paciência e Persistência")
    console.log("Revisão é a mãe do aprendizado")
}

// exceutra a função

createPhrases();

// function anonymous
// parametros 

const sum = function (number1, number2) {
    let total = number1 + number2;
    return total;
}

// argumentos
sum(2, 3);

console.log(sum(2,3))

// arrow function 

const somar = (number1, number2) => {
    let total = number1 + number2;
    return total;
}
console.log(somar(2,4))

// callback function
// chamar de volta
// envia uma função como paratemtro de outra e essa passa a ser chama na outra função

function sayMyName(name){
    console.log('antes de excecutar a funcao callback')
    name()
    console.log('depois de excecutar a funcao callback')
}

sayMyName(
    () => {console.log("estou na callback")}
)

// Function() constructor

/**
 * expressão new
 * criar um novo objeto
 * this palavra chave or keyword
 */

function Person (name) {
    this.name = name;
    this.walk = () =>{
        return this.name + " está dandando"
    }
}

const wallace = new Person("wallace")
console.log(wallace.name)
console.log(wallace.walk())



