import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';
import { Pessoa } from 'src/app/model/pessoa';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: "cadastro-pessoa",
    templateUrl: "./cadastro.pessoa.component.html",
    styleUrls: ["./cadastro.pessoa.component.css"]
})

export class CadastroPessoaComponent implements OnInit {
    public pessoa: Pessoa;
    public ativarSpinner: boolean;
    public mensagem: string;
    public pessoaCadastrada: boolean;

    constructor(private pessoaServico: PessoaService) {

    }

    ngOnInit(): void {
        this.pessoa = new Pessoa();
    }

    /**
     * Cadastrar
     */
    public Cadastrar() {
        this.ativarSpinner = true;
        this.pessoaServico.cadastrarPessoa(this.pessoa)
            .subscribe(
                pessoaJson => {
                    this.pessoaCadastrada = true;
                    this.mensagem = "";
                    this.ativarSpinner = false;
                },
                err => {
                    console.log(err);
                    this.mensagem = err.error;
                    this.ativarSpinner = false;
                }
            );
    }
}