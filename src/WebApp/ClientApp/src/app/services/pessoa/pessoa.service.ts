import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pessoa } from 'src/app/modelos/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private baseUrl: string;
    private _pessoa: Pessoa;

    public get headers(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application/json');
    }

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    get pessoa(): Pessoa {
        let pessoa_json = sessionStorage.getItem("usuario-autenticado");
        this._pessoa = JSON.parse(pessoa_json);
        return this._pessoa;
    }

    set pessoa(pessoa: Pessoa) {
        sessionStorage.setItem("usuario-autenticado", JSON.stringify(pessoa));
        this._pessoa = pessoa;
    }

    public pessoa_autenticada(): boolean {
        return this._pessoa != null && this._pessoa.email != "" && this._pessoa.senha != "";
    }

    public limpa_sessao() {
        sessionStorage.setItem("usuario-autenticado", "");
        this._pessoa = null;
    }

    public verificarPessoa(pessoa: Pessoa): Observable<Pessoa> {
        return this.http.post<Pessoa>(this.baseUrl + "api/pessoa/verificarPessoa", JSON.stringify(pessoa), { headers: this.headers });
    }

    public cadastrarPessoa(pessoa: Pessoa): Observable<Pessoa> {
        return this.http.post<Pessoa>(this.baseUrl + "api/pessoa", JSON.stringify(pessoa), { headers: this.headers });
    }
}
