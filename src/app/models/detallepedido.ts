import { DetalleProducto } from './detalleproducto';
export class DetallePedido {
  detalleproductos: Array<DetalleProducto>;
  grantotal: number;
  usuario: string;
}