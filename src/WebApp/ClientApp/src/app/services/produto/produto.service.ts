import { Produto } from './../../modelos/produto';
import { Observable } from 'rxjs';
import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService implements OnInit {


  private baseUrl: string;
  private _produto: Produto[];

  public get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  public RecuperarColecaoProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl + "api/produto");
  }

  public Inserir(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl + "api/produto", JSON.stringify(produto), { headers: this.headers });
  }

  // public Editar(produto: Produto): Observable<Produto> {

  // }

  // public Deletar(produto: Produto): Observable<Produto> {

  // }

  public enviarArquivo(arquivoSelecionado: File): Observable<boolean> {
    const formData: FormData = new FormData();
    formData.append("arquivoEnviado", arquivoSelecionado, arquivoSelecionado.name);
    return this.http.post<boolean>(this.baseUrl + "api/produto/enviarArquivo", formData);
  }

}
