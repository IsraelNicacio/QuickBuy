import { Produto } from './../../modelos/produto';


export class LojaCarrinhoCompras {
    public produtos: Produto[];
    public produto: Produto;

    public adicionar(produto: Produto) {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (!produtoLocalStorage) {
            this.produtos.push(produto);
        }
        else {
            this.produtos = JSON.parse(produtoLocalStorage);
            this.produtos.push(produto);
        }
        console.log(this.produtos);
        localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
    }

    public obterProdutos(): Produto[] {

        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");

        if (produtoLocalStorage)
            return JSON.parse(produtoLocalStorage);

        return this.produtos;
    }

    public removerProdutos(produto: Produto) {

        this.produto = new Produto();
        //this.produtos = [];

        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");

        JSON.parse(produtoLocalStorage).forEach(el => {

            //this.produto = el;

            // Object.entries(el).forEach(([key, value]) => {
            //     // console.log(`${key} ${value}`);
            //     // console.log('-------------------');

            //     if (`${key}` == "id")
            //         this.produto.Id = parseInt(`${value}`);

            //     if (`${key}` == "codigoInterno")
            //         this.produto.CodigoInterno = `${value}`;

            //     if (`${key}` == "descricao")
            //         this.produto.Descricao = `${value}`;

            //     if (`${key}` == "unidadeMedida")
            //         this.produto.UnidadeMedida = `${value}`;

            //     if (`${key}` == "valoUnitario")
            //         this.produto.ValoUnitario = parseInt(`${value}`);

            //     if (`${key}` == "nomeArquivo")
            //         this.produto.NomeArquivo = `${value}`;

            // });

            this.produtos.push(el);
        });

        //console.log(this.produtos);

        if (produtoLocalStorage) {
            this.produtos = JSON.parse(produtoLocalStorage);
            this.produtos = this.produtos.filter(f => f.Id != produto.Id);

            if (this.produtos.length > 0) {
                localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
            }
        }
    }
}