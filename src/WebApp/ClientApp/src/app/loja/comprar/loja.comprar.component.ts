import { LojaCarrinhoCompras } from './../carrinho/loja.carrinho.compras';
import { Produto } from './../../modelos/produto';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-loja-comprar",
    templateUrl: "./loja.comprar.component.html"
})

export class LojaComprarComponent implements OnInit {
    public carrinhoCompras: LojaCarrinhoCompras;
    public produtos: Produto[];
    private prod: Produto

    constructor() {
    }

    public atualizarPreco(produto: Produto, event: Event) {
        produto.ValoUnitario = produto.ValoUnitario * (<HTMLInputElement>event.target).valueAsNumber;
    }

    public remover(produto: Produto) {
        this.carrinhoCompras.removerProdutos(produto);
        this.produtos = this.carrinhoCompras.obterProdutos();
    }

    ngOnInit(): void {
        this.carrinhoCompras = new LojaCarrinhoCompras();
        this.produtos = this.carrinhoCompras.obterProdutos();
    }
}