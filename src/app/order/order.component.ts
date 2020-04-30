import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto';
import { DetalleProducto } from '../models/detalleproducto';
import { PedidosService } from '../services/pedidos.service';
import { DetallePedido } from '../models/detallepedido';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  seleccionado: Producto;
  productos: any;
  amout: number;
  detalleProductoSel: DetalleProducto;
  //productosPedido: DetalleProducto[];
  productosPedido: Array<DetalleProducto> = [];
  headers = ["SKU", "PRODUCTO", "CANTIDAD", "PRECIO U.", "TOTAL"];
  granTotal: number;

  constructor(public prodService: ProductosService, public pedService: PedidosService) {
  }

  agregarPedido() {
    let detallePedido: DetallePedido;
    detallePedido = new DetallePedido(); 
    detallePedido.detalleproductos = this.productosPedido;
    detallePedido.grantotal = this.granTotal;
    detallePedido.usuario = localStorage.getItem('usuario');
    this.pedService.generarPedido(detallePedido);
  }

  agregarDetallePedido() {
    /*
    console.log(this.seleccionado.sku + ',');
    console.log(this.amout + ',');
    console.log((this.seleccionado.price * this.amout).toString() + ',');
    */

    this.detalleProductoSel = new DetalleProducto();
    this.detalleProductoSel.sku = this.seleccionado.sku;
    this.detalleProductoSel.producto = this.seleccionado.nombre;
    this.detalleProductoSel.cantidad = this.amout;
    this.detalleProductoSel.precioUnitario = this.seleccionado.price;
    this.detalleProductoSel.total = this.seleccionado.price * this.amout;

    console.log(this.detalleProductoSel);

    this.productosPedido.push(this.detalleProductoSel);

    console.log(this.productosPedido);

    this.granTotal = this.productosPedido.filter(item => item.total)
      .reduce((sum, current) => sum + current.total, 0);


  }

  ngOnInit(): void {
    this.prodService.getProductos().then(prods => {
      this.productos = prods;
    });
    //console.log(this.productos);
  }

}
