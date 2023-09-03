import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogsRoutingModule } from './catalogs-routing.module';
import { CatalogsOverviewComponent } from './catalogs-overview/catalogs-overview.component';


@NgModule({
  declarations: [
    CatalogsOverviewComponent
  ],
  imports: [
    CommonModule,
    CatalogsRoutingModule
  ]
})
export class CatalogsModule { }
