import { Produto } from './../../modelos/produto';
import { Router } from '@angular/router';
import { ProdutoService } from './../../services/produto/produto.service';
import { core } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-loja-comprar-component",
    templateUrl: "./loja.comprar.component.html",
    styleUrls: ["./loja.comprar.component.css"]
})

export class LojaComprarComponent implements OnInit {

    public produto: Produto;

    constructor(private produtoServico: ProdutoService, private router: Router) {
    }

    ngOnInit(): void {
        
    }
}