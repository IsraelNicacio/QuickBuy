import { ProdutoService } from './../services/produto/produto.service';
import { Produto } from './../modelos/produto';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "app-produto",
    templateUrl: "./produto.component.html"
})

export class ProdutoComponent implements OnInit {

    public produto: Produto;
    public arquivoSelecionado: File;
    public ativarSpinner: boolean;
    public mensagem: string;
    public produtoCadastrado: boolean;
    public returnUrl: any;

    constructor(private router: Router, private produtoServico: ProdutoService) {
    }

    public inputChange(files: FileList) {
        this.arquivoSelecionado = files.item(0);
        this.produtoServico.enviarArquivo(this.arquivoSelecionado)
            .subscribe(
                nomeArquivo => {
                    this.produto.NomeArquivo = nomeArquivo;
                },
                err => {
                    console.log(err);
                    this.mensagem = err.error;
                }
            );
    }

    public cadastrar() {

        sessionStorage.setItem("produtoSession", "");
        this.ativarSpinner = true;

        this.produtoServico.Inserir(this.produto)
            .subscribe(
                data => {
                    this.ativarSpinner = false;
                    this.produtoCadastrado = true;
                    this.mensagem = "";
                },
                err => {
                    console.log(err.error);
                    this.ativarSpinner = false;
                    this.mensagem = err.error;
                }
            );
    }

    ngOnInit(): void {
        var produtoSession = sessionStorage.getItem("produtoSession");
        if (produtoSession != null && produtoSession != "") {
            this.produto = JSON.parse(produtoSession);

            console.log(this.produto);
        }
        else {
            this.produto = new Produto();
        }
    }
}