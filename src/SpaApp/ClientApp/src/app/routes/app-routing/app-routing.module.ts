import { AuthGuardService } from './../../guards/auth-guard.service';
import { ProdutoListaComponent } from './../../produtos/produto-lista/produto-lista.component';
import { LoginComponent } from './../../controleAcesso/login/login.component';
import { HomeComponent } from './../../home/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, CanActivate } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'produto-lista', component: ProdutoListaComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'produto-lista', component: ProdutoListaComponent }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
