import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../model/pessoa'
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls:["./login.component.css"]
})

export class loginComponent implements OnInit{

    public pessoa;
    public returnUrl: string;
    public mensagem: string;
    private ativarSpinner: boolean;

    constructor(private router: Router, private activatedRouter: ActivatedRoute, private pessoaServico: PessoaService){
    }

    ngOnInit(): void {
        this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
        this.pessoa = new Pessoa();
    }
    
    entrar(){
        this.ativarSpinner = true;
        this.pessoaServico.verificarPessoa(this.pessoa)
        .subscribe(
            pessoa_json => {
                this.pessoaServico.pessoa = pessoa_json;

                if(this.returnUrl == null){
                    this.router.navigate(['/']);
                }
                else{
                    this.router.navigate([this.returnUrl]);
                }
            }, 
            err => {
                console.log(err);
                this.mensagem = err.error;
                this.ativarSpinner = false;
                
            });
    }
}