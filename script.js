//spread operator ...

let inicio = [1,2,3,4];

let total = [...inicio,5,6,7,8,9];

console.log(total);

let total2 = [inicio,5,6,7,8,9];
console.log(total2);

function cadastro (info){
    let novosDados = {
        ...info,
        cargo:"programador",
        status: "true"
    };

    return novosDados;
}

console.log(cadastro({nome: "sara",sobrenome:"silva"}));


