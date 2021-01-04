

var lista = ["wallace","lucia","Fran"];
console.log(lista);
console.log(lista.length);
console.log(lista[1]);

//verificando s tem elemento no array
console.log(lista.indexOf("wallace"));

//verificando s tem elemento no array retorno será -1
console.log(lista.indexOf("wallaceaaa"));

//concatenar elementos de 1 array
console.log(lista.join(", "));
console.log(lista.join("/"));

//remover ultimo elemento
console.log(lista.pop());
console.log(lista);

//remover primeiro elemento
console.log(lista.shift());
console.log(lista);

//alterar elemento de um index
lista[0]="matheus";
console.log(lista);

//adicionar

lista.push("wallace","fran");
console.log(lista);







