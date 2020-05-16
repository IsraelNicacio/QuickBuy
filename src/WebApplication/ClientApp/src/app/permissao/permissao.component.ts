import { PessoaService } from 'src/app/services/pessoa/pessoa.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class PermissaoRoutes implements CanActivate{

    constructor(private router: Router, private pessoaService: PessoaService){
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        //this.pessoaService
        if (this.pessoaService.pessoa_autenticada()) {
            return true;
        }

        
        this.router.navigate(['/login'],{queryParams:{ returnUrl: state.url }});

        //Se autenticado true
        return false;
    }

}