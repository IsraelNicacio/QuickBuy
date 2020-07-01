import { Pedido } from './../../modelos/pedido';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PedidoService {
    public _baseUrl: string;

    get headers(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application/json');
    }

    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this._baseUrl = baseUrl;
    }

    public efetivaCompra(pedido: Pedido): Observable<number> {
        return this.http.post<number>(this._baseUrl + "api/pedido", JSON.stringify(pedido), { headers: this.headers })
    }
}