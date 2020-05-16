import { Router } from '@angular/router';
import { ProdutoService } from './../services/produto/produto.service';
import { Produto } from 'src/app/model/produto';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: "app-produto",
    templateUrl: "./produto.component.html",
    styleUrls: ["./produto.component.css"]
})

export class produtoComponent implements OnInit {
    public produto: Produto;
    public arquivo: File;
    public mensagem: string;
    private ativarSpinner: boolean;
    public produtoCadastrado: boolean;

    constructor(private produtoServico: ProdutoService, private router: Router) {

    }

    ngOnInit(): void {
        var produtoSession = sessionStorage.getItem("produtoSession");
        if (produtoSession != null && produtoSession != "") {
            this.produto = JSON.parse(produtoSession);
        }
        else {
            this.produto = new Produto();
        }
    }

    public salvar() {
        this.ativarSpinner = true;
        this.produtoServico.salvar(this.produto)
            .subscribe(
                produtoJson => {
                    this.produtoCadastrado = true;
                    this.mensagem = "";
                    this.ativarSpinner = false;
                    this.router.navigate(['/pesquisar-produto']);
                    sessionStorage.setItem("produtoSession", "");
                },
                err => {
                    console.log(err);
                    this.mensagem = err.error;
                    this.ativarSpinner = false;
                }
            );
    }

    public inputChange(files: FileList) {
        this.arquivo = files.item(0);
        this.produtoServico.enviarArquivo(this.arquivo)
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
}