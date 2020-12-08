export default class Produto {

    constructor(codigoDeBarras, nome, preco, quantidade) {
        this.codigoDeBarras = codigoDeBarras;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.valorTotal = this.quantidade * this.preco
    }

}