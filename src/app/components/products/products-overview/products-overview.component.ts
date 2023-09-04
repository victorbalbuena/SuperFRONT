import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { ProductosService } from 'src/app/services/productos.service';
import { catalogo } from 'src/core/_models/catalogo';
import { producto } from 'src/core/_models/producto';

@Component({
  selector: 'app-products-overview',
  templateUrl: './products-overview.component.html',
  styleUrls: ['./products-overview.component.scss'],
})
export class ProductsOverviewComponent implements OnInit {
  productos?: producto[] = [];
  productoToEdit?: producto;
  catalogos?: catalogo[] = [];

  constructor(
    private productoHttp: ProductosService,
    private catalogoHttp: CatalogosService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllProductos();
    this.getAllCatalogos();
  }

  getAllProductos() {
    this.productoHttp.getAllProducts().subscribe((products: producto[]) => {
      console.log(products);
      this.productos = products;
    });
  }

  getAllCatalogos() {
    this.catalogoHttp.getAllCatalogs().subscribe((catalogos: catalogo[]) => {
      console.log(catalogos);
      this.catalogos = catalogos;
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
