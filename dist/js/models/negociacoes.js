export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adciciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
