import { ItemPedido } from './../../modelos/itemPedido';
import { Pedido } from './../../modelos/pedido';
import { Router } from '@angular/router';
import { PedidoService } from './../../services/pedidos/pedido.servide';
import { PessoaService } from './../../services/pessoa/pessoa.service';
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
    public total: number;

    constructor(private pessoaServico: PessoaService, private pedidoServico: PedidoService, private router: Router) {
    }

    public atualizarPreco(produto: Produto, quantidade: number) {

        if (!produto.precoOriginal) {
            produto.precoOriginal = produto.valoUnitario;
        }
        if (quantidade <= 0) {
            quantidade = 1;
            produto.quantidade = quantidade;
        }

        produto.valoUnitario = produto.precoOriginal * quantidade;

        this.carrinhoCompras.atualizar(this.produtos);
        this.atualizarTotal();
    }

    public atualizarTotal() {
        this.total = this.produtos.reduce((acc, produto) => acc + produto.valoUnitario, 0);
    }

    public remover(produto: Produto) {
        this.carrinhoCompras.removerProduto(produto);
        this.produtos = this.carrinhoCompras.obterProdutos();
        this.atualizarTotal();
    }

    public efetivarCompra() {

        this.pedidoServico.efetivarCompra(this.criarPedido())
            .subscribe(
                pedidoId => {
                    console.log(pedidoId);
                    sessionStorage.setItem("pedidoId", pedidoId.toString());
                    this.produtos = [];
                    this.carrinhoCompras.limparCarrinhoCompras();                   
                    this.router.navigate(["/compra-realizada-sucesso"]);
                },
                e => {
                    console.log(e.error);
                });
    }

    public criarPedido(): Pedido {

        let pedido = new Pedido();
        pedido.pessoaId = this.pessoaServico.pessoa.id;

        this.produtos = this.carrinhoCompras.obterProdutos();

        for (let produto of this.produtos) {
            let itemPedido = new ItemPedido();
            itemPedido.produtoId = produto.id;

            if (!produto.quantidade)
                produto.quantidade = 1;
            itemPedido.quantidade = produto.quantidade;

            pedido.itensPedido.push(itemPedido);
        }

        return pedido;

    }

    ngOnInit(): void {
        this.carrinhoCompras = new LojaCarrinhoCompras();
        this.produtos = this.carrinhoCompras.obterProdutos();
    }
}