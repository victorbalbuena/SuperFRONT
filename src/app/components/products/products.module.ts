import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsOverviewComponent } from './products-overview/products-overview.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormProductComponent } from './form-product/form-product.component';

@NgModule({
  declarations: [
    ProductsOverviewComponent,
    CreateProductComponent,
    ProductFormComponent,
    ProductInfoComponent,
    ProductListComponent,
    EditProductComponent,
    FormProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ProductsModule {}
