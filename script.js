//rest operator ...

let lista = [1,2,3,4,5,6];

let novaLista = lista.map((item,index) =>{
     console.log(lista[index]);
     console.log(index);
     console.log(item);
     
});



let somar = lista.reduce((total,proximo) => total + proximo);

console.log(somar);

let find = lista.find((item) => item=== 6);


console.log(find);

