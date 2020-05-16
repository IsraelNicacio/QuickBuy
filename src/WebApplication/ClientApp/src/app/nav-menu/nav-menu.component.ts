import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { PessoaService } from '../services/pessoa/pessoa.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  
  public get pessoa() {
    return this.pessoaService.pessoa;
  }
  
  constructor(private router: Router, private pessoaService:PessoaService){
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public usuarioLogado() : boolean{
    return this.pessoaService.pessoa_autenticada();
  }

  sair(){
    this.pessoaService.limpa_sessao();
    this.router.navigate(['/']);
  }
}
