import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductosService } from 'src/app/services/productos.service';
import { producto } from 'src/core/_models/producto';

@Component({
  selector: 'app-products-overview',
  templateUrl: './products-overview.component.html',
  styleUrls: ['./products-overview.component.scss'],
})
export class ProductsOverviewComponent implements OnInit {
  productos?: producto[] = [];
  productoToEdit?: producto;

  constructor(
    private productoHttp: ProductosService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllProductos();
  }

  getAllProductos() {
    this.productoHttp.getAllProducts().subscribe((products: producto[]) => {
      console.log(products);
      this.productos = products;
    });
  }

  deleteProduct(id: number) {
    this.productoHttp.deleteProductById(id).subscribe(() => {
      console.log('eliminado');
    });
    this.toastr.success('Succes', 'Producto eliminado', {
      timeOut: 10000,
    });
  }

  initNewProducto() {
    this.productoToEdit = new producto();
  }

  editProducto(producto: producto) {
    this.productoToEdit = producto;
  }
}
