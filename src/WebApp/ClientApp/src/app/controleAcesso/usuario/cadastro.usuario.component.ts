import { Pessoa } from 'src/app/modelos/pessoa';
import { PessoaService } from './../../services/pessoa/pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: "app-cadastro-usuario",
    templateUrl: "./cadastro.usuario.component.html"
})

export class CadastroUsuarioComponent implements OnInit {

    public pessoa: Pessoa;

    constructor(private pessoaServico: PessoaService) {
    }

    ngOnInit(): void {
        this.pessoa = new Pessoa();
    }

    public cadastrar() {

        alert("Nome: " + this.pessoa.nome + "\nSobreNome: " + this.pessoa.sobreNome + "\nEmail: " + this.pessoa.email + "\nSenha: " + this.pessoa.senha);

        // this.pessoaServico.cadastrarPessoa(this.pessoa)
        //     .subscribe(
        //         data => {},
        //         err => {
        //             console.log(err)
        //         }
        //     );
    }

}