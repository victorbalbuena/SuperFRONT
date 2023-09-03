import { catalogo } from './catalogo';

export class producto {
  idProducto?: number;
  nombre?: string;
  precioUnitario?: number;
  descripcion?: string;
  existencias?: number;
  catalogo?: catalogo[];
}
