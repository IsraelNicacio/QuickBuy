import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';


@Injectable({
    providedIn: "root"
})

export class ProdutoService implements OnInit {
    private _baseUrl: string;
    public produto: Produto[];

    public get headers(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application/json');
    }

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this._baseUrl = baseUrl;
    }

    ngOnInit(): void {
        this.produto = [];
    }

    public salvar(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>(this._baseUrl + "api/produto", JSON.stringify(produto), { headers: this.headers });
    }

    public atualizar(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>(this._baseUrl + "api/produto/atualizar", JSON.stringify(produto), { headers: this.headers });
    }

    public deletar(produto: Produto): Observable<Produto> {
        return this.http.post<Produto>(this._baseUrl + "api/produto/deletar", JSON.stringify(produto), { headers: this.headers });
    }

    public enviarArquivo(arquivo: File): Observable<string> {
        const formData: FormData = new FormData();
        formData.append("arquivoEnviado", arquivo, arquivo.name)
        return this.http.post<string>(this._baseUrl + "api/produto/enviarArquivo", formData);
    }

    public recuperarColecao(): Observable<Produto[]> {
        return this.http.get<Produto[]>(this._baseUrl + "api/produto");
    }

    public excluirProduto(produto: Produto): Observable<Produto[]> {
        return this.http.post<Produto[]>(this._baseUrl + "api/produto/excluir", JSON.stringify(produto), { headers: this.headers });
    }
}