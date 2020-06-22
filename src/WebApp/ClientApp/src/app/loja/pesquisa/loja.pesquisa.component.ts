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

    constructor(private produtoservico: ProdutoService) {
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

