import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { producto } from 'src/core/_models/producto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  @Input()
  producto?: producto;

  constructor(
    private productoHttp: ProductosService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

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
