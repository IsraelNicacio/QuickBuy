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
    public arquivoSelecionado: File;
    public ativarSpinner: boolean;
    public mensagem: string;
    public produtoCadastrado: boolean;

    constructor(private produtoServico: ProdutoService) {
    }

    public inputChange(files: FileList) {

        console.log(files.item(0));

        this.arquivoSelecionado = files.item(0);
        this.produtoServico.enviarArquivo(this.arquivoSelecionado)
        .subscribe(
            data => {
                console.log(data);
            },
            err => {
                console.log(err.error)
            }
        );
    }

    public cadastrar() {

        this.ativarSpinner = false;

        this.produtoServico.Inserir(this.produto)
            .subscribe(
                data => {
                    this.ativarSpinner = true;
                    this.produtoCadastrado = true;
                    console.log(data);
                },
                err => {
                    console.log(err.error);
                    this.ativarSpinner = false;
                    this.mensagem = err.error
                }
            );
    }

    ngOnInit(): void {
        this.produto = new Produto();
    }

}