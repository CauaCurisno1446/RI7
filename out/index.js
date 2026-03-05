"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const Soma_1 = __importDefault(require("./Soma"));
const Subtracao_1 = __importDefault(require("./Subtracao"));
const Multiplicacao_1 = __importDefault(require("./Multiplicacao"));
const Divisao_1 = __importDefault(require("./Divisao"));
let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
leitor.question("Quais são os números e a operação desejada?\n", (valor) => {
    let instrucoes = valor.split(' ');
    let numero1 = Number(instrucoes[0]);
    let numero2 = Number(instrucoes[1]);
    let operacao = instrucoes[instrucoes.length - 1];
    if (instrucoes.length == 1) {
        operacao = instrucoes[0];
    }
    console.log(`Essas foram suas instruções: ${instrucoes}\n`);
    let calculo;
    switch (operacao) {
        case "Somar":
            calculo = new Soma_1.default();
            if (calculo instanceof Soma_1.default) {
                console.log("É uma soma!");
                console.log(`O resultado da soma é: ${calculo.calcular(numero1, numero2)}\n`);
            }
            break;
        case "Subtracao":
            calculo = new Subtracao_1.default();
            if (calculo instanceof Subtracao_1.default) {
                console.log("É uma subtração!");
                console.log(`O resultado da subtração é: ${calculo.calcular(numero1, numero2)}\n`);
            }
            break;
        case "Multiplicacao":
            calculo = new Multiplicacao_1.default();
            if (calculo instanceof Multiplicacao_1.default) {
                console.log("É uma multiplicação!");
                console.log(`O resultado da multiplicação é: ${calculo.calcular(numero1, numero2)}\n`);
            }
            break;
        case "Divisao":
            calculo = new Divisao_1.default();
            if (calculo instanceof Divisao_1.default) {
                console.log("É uma divisão!");
                console.log(`O resultado da divisão é: ${calculo.calcular(numero1, numero2)}\n`);
            }
            break;
    }
});
