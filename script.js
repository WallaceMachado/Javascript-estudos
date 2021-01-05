//rest operator ...

let lista = [1,2,3,4,5,6];

console.log(lista.some(lista => lista === 1)); // verifica se tem o item na lista

let nomes = [
    {nome:"lucas", idade :18},
    {nome: "sara", idade : 15}
];

console.log(nomes.every(nome => nome.idade>= 18)); //verifica se todos satisfaem a condição

