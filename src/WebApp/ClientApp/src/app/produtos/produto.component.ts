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

    constructor(private router: Router, private produtoServico: ProdutoService) {
    }

    public inputChange(files: FileList) {
        this.arquivoSelecionado = files.item(0);
        this.ativarSpinner = true;
        this.produtoServico.enviarArquivo(this.arquivoSelecionado)
            .subscribe(
                nomeArquivo => {
                    this.produto.NomeArquivo = nomeArquivo;
                    console.log(nomeArquivo);
                    this.ativarSpinner = false;
                },
                err => {
                    console.log(err);
                    this.ativarSpinner = false;
                }
            );
    }

    public cadastrar() {

        this.ativarEspera();
        this.produtoServico.Inserir(this.produto)
            .subscribe(
                produtoJson => {
                    console.log(produtoJson);
                    this.desativarEspera();
                    this.router.navigate(['/pesquisar-produto']);
                },
                e => {
                    console.log(e.error);
                    this.mensagem = e.error;
                    this.desativarEspera();
                }
            );
    }

    public ativarEspera() {
        this.ativarSpinner = true;
    }

    public desativarEspera() {
        this.ativarSpinner = false;
    }

    ngOnInit(): void {
        var produtoSession = sessionStorage.getItem('produtoSession')
        if (produtoSession) {
            this.produto = JSON.parse(produtoSession);
        } else {
            this.produto = new Produto();
        }
    }
}