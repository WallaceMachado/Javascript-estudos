var lista = [1,2,3];

for(var i in lista){
    console.log(lista[i]);
}

for(let x in lista){
    console.log(lista[x]);
}

console.log(i);
console.log(x);// não é impresso pq o let só existe dentro do contexto que foi criado

