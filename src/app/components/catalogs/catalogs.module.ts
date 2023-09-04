import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogsRoutingModule } from './catalogs-routing.module';
import { CatalogsOverviewComponent } from './catalogs-overview/catalogs-overview.component';
import { FormCatalogComponent } from './form-catalog/form-catalog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CatalogsOverviewComponent, FormCatalogComponent],
  imports: [
    CommonModule,
    CatalogsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class CatalogsModule {}
