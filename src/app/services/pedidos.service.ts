import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';
//import { DetalleProducto } from '../models/detalleproducto';
import { DetallePedido } from '../models/detallepedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  uri: string = 'https://localhost:5001/api';
  token: string;

  constructor(private http: HttpClient) { }

  generarPedido(detallePedido: DetallePedido) {
    this.http.post(this.uri + '/pedidos/agregar', detallePedido )
      .subscribe((resp: any) => {
        console.log(resp);
      });
  }
}
