import { PessoaService } from 'src/app/services/pessoa/pessoa.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(private router: Router, private pessoaService: PessoaService) {
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  isAuthenticated():boolean{
    return this.pessoaService.pessoa_autenticada();
  }

  logout(){
    this.pessoaService.limpa_sessao();
    this.router.navigate(['/']);
  }
  
}
