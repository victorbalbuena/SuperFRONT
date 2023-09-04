import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  productForm = new FormGroup({
    nombre: new FormControl(''),
    precioUnitario: new FormControl(''),
    descripcion: new FormControl(''),
    existencias: new FormControl(''),
  });
}
