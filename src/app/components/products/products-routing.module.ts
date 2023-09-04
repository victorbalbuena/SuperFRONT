import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsOverviewComponent } from './products-overview/products-overview.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '', //lista
    component: ProductsOverviewComponent,
  },
  {
    path: 'create',
    component: CreateProductComponent,
  },
  {
    path: 'info/:id',
    component: ProductInfoComponent,
  },
  {
    path: 'edit/:id',
    component: EditProductComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
