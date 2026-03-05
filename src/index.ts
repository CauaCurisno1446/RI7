import * as readline from 'readline';
import Soma from './Soma';
import Subtracao from './Subtracao';
import Multiplicacao from './Multiplicacao';
import Divisao from './Divisao';
import Calculo from './Calculo';

let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


leitor.question("Quais são os números e a operação desejada?\n", (valor) => {
    let instrucoes = valor.split(' ')
    let numero1 = Number(instrucoes[0])
    let numero2 = Number(instrucoes[1])
    let operacao = instrucoes[instrucoes.length - 1]

    if(instrucoes.length == 1){
        operacao = instrucoes[0]
    }
    
    console.log(`Essas foram suas instruções: ${instrucoes}\n`)

    let calculo: Calculo

    switch(operacao){
        case "Somar":
            calculo = new Soma()
            if(calculo instanceof Soma){
                console.log("É uma soma!")
                console.log(`O resultado da soma é: ${calculo.calcular(numero1, numero2)}\n`)
            }
            break
        case "Subtracao":
            calculo = new Subtracao()
            if(calculo instanceof Subtracao){
                console.log("É uma subtração!")
                console.log(`O resultado da subtração é: ${calculo.calcular(numero1, numero2)}\n`)
            }
            break
        case "Multiplicacao":
            calculo = new Multiplicacao()
            if(calculo instanceof Multiplicacao){
                console.log("É uma multiplicação!")
                console.log(`O resultado da multiplicação é: ${calculo.calcular(numero1, numero2)}\n`)
            }
            break
        case "Divisao":
            calculo = new Divisao()
            if(calculo instanceof Divisao){
                console.log("É uma divisão!")
                console.log(`O resultado da divisão é: ${calculo.calcular(numero1, numero2)}\n`)
            }
            break
    }
})