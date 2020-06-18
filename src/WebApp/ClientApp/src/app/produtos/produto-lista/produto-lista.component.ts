import { Produto } from './../../modelos/produto';
import { ProdutoService } from './../../services/produto/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {
  public produtos: Produto[];

  constructor(private produtoservico: ProdutoService) {
    this.produtoservico.RecuperarColecaoProdutos().subscribe(
      data => {
        this.produtos = data;
        console.log(this.produtos);
      },
      err => {
        console.log(err.error);
      }
    );
   }

  ngOnInit() {
  }

}
