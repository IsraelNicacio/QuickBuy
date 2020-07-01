import { ItemPedido } from './itemPedido';

export class Pedido {
    public id: number;
    public pessoaId: number;
    public itensPedido: ItemPedido[];

    constructor() {
        this.itensPedido = [];
    }
}