import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Negociacao[];

    adciciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}