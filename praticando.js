function notasEscolares(nota){
    if(nota>=90){
            return 'A'
    }else if (nota>=80 && nota<=89){
            return 'B'
    } else if(nota>=70 && nota<=79){
            return 'C'
    }else if (nota>=60 && nota<=69){
            return 'D'
    }else{
            return 'F'
            
    }
}

let nota = notasEscolares(80)

console.log(nota);

// receitas e despetas

let total;
const gastos  = {
    receitas: [10,500, 1000],
    despesas: [10,400,680],
}

for (let property in gastos){
    let totalReceitas=0;
    let receitas = gastos["receitas"]
    for(let receita of receitas ){
        totalReceitas += receita
    }
    let totalDespesas=0;
    despesas = gastos["despesas"]
    for(let despesa of despesas ){
        totalDespesas += despesa
    }

    total = totalReceitas- totalDespesas
}

console.log(total)