import { Router } from '@angular/router';
import { Produto } from './../../modelos/produto';
import { ProdutoService } from './../../services/produto/produto.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {
  public produtos: Produto[];
  public enableSpinner: boolean;
  public message: string;
  public destroyed = new Subject<any>();

  constructor(private produtoservico: ProdutoService, private router: Router) {

    this.enableSpinner = true;

    this.produtoservico.RecuperarColecaoProdutos().subscribe(
      data => {
        this.produtos = data;
        this.enableSpinner = false;
        this.message = "";
      },
      err => {
        console.log(err.error);
        this.enableSpinner = false;
        this.message = err.console.error;
      }
    );
  }

  public excluirProduto(produto: Produto) {
    var retorno = confirm("Deseja realmente excluir esse produto?");
    if (retorno == true) {
      this.produtoservico.excluirProduto(produto)
        .subscribe(
          produtosJson => {
            this.produtos = produtosJson;
            this.ngOnInit();
          },
          err => {
            console.log(err.erros);
            this.message = err.erros;
          }
        );
    }
  }

  public editarProduto(produto: Produto) {
    sessionStorage.setItem("produtoSession", JSON.stringify(produto));
    this.router.navigate(["/produto"]);
  }

  ngOnInit() {
    this.router.navigate(["produto-lista"]);
  }
}
