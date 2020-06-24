import { Router } from '@angular/router';
import { ProdutoService } from './../../services/produto/produto.service';
import { Produto } from './../../modelos/produto';
import { core } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-loja-pesquisa",
    templateUrl: "./loja.pesquisa.component.html",
    styleUrls: ["./loja.pesquisa.component.css"]
})

export class LojaPesquisaComponent implements OnInit {

    public produtos: Produto[];

    constructor(private produtoservico: ProdutoService, private router: Router) {
    }

    abrirProduto(produto: Produto) {
        sessionStorage.setItem("produtoDetalhe", JSON.stringify(produto));
        this.router.navigate(["/loja-produto"]);
    }

    ngOnInit(): void {
        this.produtoservico.RecuperarColecaoProdutos()
            .subscribe(
                produtos => {
                    this.produtos = produtos;
                },
                err => {
                    console.log(err.error)
                }
            );
    }

}

