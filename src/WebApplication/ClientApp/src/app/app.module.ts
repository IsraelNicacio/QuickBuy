import { PesquisaProdutoComponent } from './produto/pesquisa/pesquisa.produto.component';
import { ProdutoService } from './services/produto/produto.service';
import { PessoaService } from './services/pessoa/pessoa.service';
import { PermissaoRoutes } from './permissao/permissao.component';
import { loginComponent } from './pessoa/login/login.component';
import { produtoComponent } from './produto/produto.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CadastroPessoaComponent } from './pessoa/cadastro/cadastro.pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    produtoComponent,
    loginComponent,
    CadastroPessoaComponent,
    PesquisaProdutoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'produto', component: produtoComponent },
      { path: 'login', component: loginComponent },
      { path: "cadastro-pessoa", component: CadastroPessoaComponent },
      { path: "pesquisar-produto", component: PesquisaProdutoComponent}
    ])
  ],
  providers: [PessoaService, ProdutoService],
  bootstrap: [AppComponent]

})
export class AppModule { }

//{ path: 'produto', component: produtoComponent, canActivate: [PermissaoRoutes] }
