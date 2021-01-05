let nomes = ["leo","machado",10];
let[nome]=nomes;
console.log(nome);

let[nome1,nome2,idade]=nomes;
console.log(nome1,nome2,idade);

let{0:primeironome, 1:segundonome}=nomes;
console.log(primeironome,segundonome);

const pessoa0 = {
    nome0: "sara",
    sobrenome0:"silva",
    idade0:10
};

let{nome0,idade0} = pessoa0;
console.log(nome0,idade0);

let{nome0:novonome} = pessoa0;
console.log(novonome);


