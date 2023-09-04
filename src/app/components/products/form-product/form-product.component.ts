import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { producto } from 'src/core/_models/producto';
import { ToastrService } from 'ngx-toastr';
import { catalogo } from 'src/core/_models/catalogo';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  @Input()
  producto?: producto;
  @Input()
  catalogo?: catalogo[];

  catalogoSeleccionado?: catalogo;

  constructor(
    private productoHttp: ProductosService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    console.log(catalogo);
  }

  updateProducto(producto: producto) {
    this.productoHttp.updateProducto(producto).subscribe(() => {
      this.toastr.success('Succes', 'Producto actualizado', {
        timeOut: 10000,
      });
    });
  }

  createProducto(producto: producto) {
    this.productoHttp.updateProducto(producto).subscribe(() => {
      this.toastr.success('Succes', 'Producto creado', {
        timeOut: 10000,
      });
    });
  }

  cancel() {
    this.producto = undefined;
  }
}
