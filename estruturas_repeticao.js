let operator = '+'
let number1 = 2
let number2 = 4
let result

switch(operator){
    case '+':
        result = number1 + number2
        break
    case '-':
        result = number1 + number2
        break
    case '*':
        result = number1 + number2
        break
    case '/':
        result = number1 + number2
        break
    default:
        console.log("não implementado")
        break
}

console.log(result)

function sayMyName(name=''){
    if(name ===''){
        throw new Error ('Nome é obrigatório')
    }
    // quando acontece um erro a aplicação para no throw a linha abaixo não será executada
    console.log('depois do erro')
}

try{
    sayMyName()
}catch(e){
    console.log(e)
}


//Estrutura de repetição
//for
//break - para a execução do loop 
//continue - pula a execução do momento

for(let i =0; i<10; i++){
    if(i===5){
        continue;
    }

    if(i===8){
        break;
    }

    console.log(i)
}

let i = 1;

while(i<10){
    console.log(i)
    i++
}

// for of para array
let myName = 'wallace'
let names = ['wallace', 'lucia']
for(let name of names) {
    console.log(name)
}

for(let char of myName) {
    console.log(char)
}

// for in para objeto

let person = {
    name: 'wallace',
    age: 30,
    weight: 88.6
}
for (let property in person){
    console.log(property)
    console.log(person[property])
}