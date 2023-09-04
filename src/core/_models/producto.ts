import { catalogo } from './catalogo';

export class producto {
  id!: number;
  nombre?: string;
  precioUnitario?: number;
  descripcion?: string;
  existencias?: number;
  catalogoModel?: catalogo;
}
