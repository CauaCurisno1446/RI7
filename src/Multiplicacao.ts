import Calculo from "./Calculo";

class Multiplicacao extends Calculo{
    public calcular(numero1: number, numero2: number): number {
        return numero1 * numero2
    }
}

export default Multiplicacao