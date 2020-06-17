import { ProdutoService } from './../services/produto/produto.service';
import { Produto } from './../modelos/produto';
import { core } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-produto",
    templateUrl: "./produto.component.html"
})

export class ProdutoComponent implements OnInit {

    public produto: Produto;

    constructor(private produtoServico: ProdutoService) {
    }

    public cadastrar(){
        this.produtoServico.Inserir(this.produto)
        .subscribe(
            data => {
                console.log(data);
            },
            err => {
                console.log(err.error);
            }
        );
    }

    ngOnInit(): void {
        this.produto = new Produto();
    }

}