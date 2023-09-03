import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogsOverviewComponent } from './catalogs-overview/catalogs-overview.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogsOverviewComponent,
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
export class CatalogsRoutingModule {}
