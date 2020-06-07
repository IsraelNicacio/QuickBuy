import { ProdutoService } from './services/produto/produto.service';
import { PessoaService } from './services/pessoa/pessoa.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './controleAcesso/login/login.component';
import { AppRoutingModule } from './routes/app-routing/app-routing.module';
import { ProdutoListaComponent } from './produtos/produto-lista/produto-lista.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProdutoListaComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthGuardService, PessoaService, ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
