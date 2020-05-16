import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from './../../services/produto/produto.service';
import { Produto } from 'src/app/model/produto';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: "pesquisa-produto",
    templateUrl: "./pesquisa.produto.component.html",
    styleUrls: ["./pesquisa.produto.component.css"]
})

export class PesquisaProdutoComponent implements OnInit {
    public produtos: Produto[];
    public returnUrl: string;
    public mensagem: string;

    constructor(private produtoService: ProdutoService, private router: Router) {
        this.produtoService.recuperarColecao()
            .subscribe(
                produtosJson => {
                    this.produtos = produtosJson;
                    console.log(produtosJson);
                },
                err => {
                    console.log(err);
                    this.mensagem = err.error;
                });
    }

    ngOnInit(): void {

    }

    public adicionarProduto() {
        this.router.navigate(['/produto']);
    }

    public editarProduto(produto: Produto){
        sessionStorage.setItem("produtoSession", JSON.stringify(produto));
        this.router.navigate(['/produto']);
    }

    public excluirProduto(produto: Produto){
        var retorno = confirm("Deseja realmente excluir esse produto?");
        if(retorno == true){
            this.produtoService.excluirProduto(produto)
            .subscribe(
               produtosJson => {
                   this.produtos = produtosJson;
               },
               err => {
                   console.log(err.erros);
                   this.mensagem = err.erros;
               }
            );
        }
    }
}