import { LojaProdutoComponent } from './loja/produto/loja.produto.component';
import { LojaPesquisaComponent } from './loja/pesquisa/loja.pesquisa.component';
import { ProdutoComponent } from './produtos/produto.component';
import { CadastroUsuarioComponent } from './controleAcesso/usuario/cadastro.usuario.component';
import { ProdutoService } from './services/produto/produto.service';
import { PessoaService } from './services/pessoa/pessoa.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './controleAcesso/login/login.component';
import { AppRoutingModule } from './routes/app-routing/app-routing.module';
import { ProdutoListaComponent } from './produtos/produto-lista/produto-lista.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { TruncateModule } from 'ng2-truncate';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProdutoListaComponent,
    NavMenuComponent,
    CadastroUsuarioComponent,
    ProdutoComponent,
    LojaPesquisaComponent,
    LojaProdutoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TruncateModule
  ],
  providers: [
    AuthGuardService,
    PessoaService,
    ProdutoService,
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
