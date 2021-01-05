//rest operator ...

let lista = [1,2,3,4,5,6];

let novaLista = lista.map(function(item,index){
     console.log(lista[index]);
     console.log(index);
     console.log(item);
     
});



let somar = lista.reduce(function(total,proximo){
    return total + proximo;
});

console.log(somar);

let find = lista.find(function(item){
    return item=== 6;
});

console.log(find);

