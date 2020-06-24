import { Router } from '@angular/router';
import { ProdutoService } from './../../services/produto/produto.service';
import { Produto } from './../../modelos/produto';
import { Component, OnInit } from '@angular/core';
import { core } from "@angular/compiler";

@Component({
    selector: "app-loja-produto",
    templateUrl: "./loja.produto.component.html"
})

export class LojaProdutoComponent implements OnInit {

    public produto: Produto;
    constructor(private produtoServico: ProdutoService, private router: Router) {
    }

    ngOnInit(): void {
        var produtoDetalhe = sessionStorage.getItem("produtoDetalhe");
        if (produtoDetalhe) {
            this.produto = JSON.parse(produtoDetalhe);
        }
    }
    public comprar() {
        this.router.navigate(["/loja-comprar"]);
    }
}