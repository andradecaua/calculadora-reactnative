class Calcular {

    private static valor: string = "";
    
    static getValor(){
       return this.valor
    }

    static setValor(valor: string){
        this.valor = valor
    }
}

export default Calcular