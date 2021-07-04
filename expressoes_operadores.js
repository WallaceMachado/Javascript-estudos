console.log(1=="1") // compara somente os valores
console.log(1==="1")// compara os valores e tipos

console.log(1!="1") // compara somente os valores
console.log(1!=="1")// compara os valores e tipos

let pao = true
let queijo = true
const cafe = pao && queijo ? "café bom" : "café ruim"

console.log(cafe)

/**
        Falsy
        Quando um valor é considerado falso em contexto de booleano
        *false
        * 0
        * -0
        * ""
        * null
        * undefined
        * NaN
 */

        /**
        trufy
        Quando um valor é considerado true em contexto de booleano
        * true
        * {}
        * []
        * 1
        * 3.12
        * "0"
        * "false"
        * -1
        * Infinity
        * -Infinity
 */