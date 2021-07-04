/**
        Prototype

        são proptoripos de funções que são herdadas automaticamente
        *__proto__
 */

console.log("wallace".__proto__)
console.log("wallace".length)
console.log(10.1.__proto__)
console.log(true.__proto__)
console.log({}.__proto__)

/**
        Type conversion (typecasting) quando explicitamente alteramos o tupo de uma variável
        type coersion, quando o js altera implicitamente o tipo de uma varável

 */

        // type conversion 
        console.log(Number('9') + 5)

        // type coersion
        console.log('9' + 5)

// manipulando Strings e numeros

// contando caracteres

let word = "teste"
console.log(word.length)

let number = 1234
console.log(String(number).length) // numero não tem a função length e por isso temos que converter para string


// transformar um numero com duas cadas decimais e trocar ponto por virgula

let n = 345.4189451
console.log(n.toFixed(2).replace(".",","))

// transformar maiuscula e minuscula

console.log(word.toUpperCase())
console.log(word.toLowerCase())

// seprar o texto que contem espeços em um novo array onde cada testo é uma posição do array e depois transformar esse ary em um texto seprado por _

let phrase = "Eu quero estudar!"
let myArray = phrase.split(" ")
console.log(myArray)
let phaseWith_ = myArray.join("_")
console.log(phaseWith_)

// verificar se o texto contém a palavra 

console.log(phrase.includes("estu"))

// criar array com construtor 

const nArray = new Array("a","b")

console.log(nArray)

// contar elementos de um array

console.log(nArray.length);


// transformar uma cadeia d ecarateres em um array

console.log(Array.from(word))

let techs = ["html", "css", "js"]

//adicionar um item no final
console.log(techs.push("nodejs"))
console.log(techs)
//encontrar a posição de um elemento
let index = techs.indexOf('css')
console.log(index)
//add um elemento no inicio
techs.unshift('sql')
console.log(techs)
//pegar somente alguns elementos
techs.slice(1,3)
console.log(techs.slice(1,3))
// remover do fim
techs.pop()
console.log(techs)
// remover do inicio
techs.shift()
console.log(techs)
// remover um ou mais itens em qualquer posição
techs.splice(1,2)

console.log(techs)


