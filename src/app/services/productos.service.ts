import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  uri: string = 'https://localhost:5001/api';
  token: string;

  constructor(private http: HttpClient) { }

  async getProductos() {
    const resp = await this.http.get<Producto>(this.uri + '/productos').toPromise();
    return resp;
  }
}
