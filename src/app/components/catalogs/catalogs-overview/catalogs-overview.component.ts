import { Component, OnInit } from '@angular/core';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { catalogo } from 'src/core/_models/catalogo';

@Component({
  selector: 'app-catalogs-overview',
  templateUrl: './catalogs-overview.component.html',
  styleUrls: ['./catalogs-overview.component.scss'],
})
export class CatalogsOverviewComponent implements OnInit {
  catalogos?: catalogo[] = [];
  catalogoToEdit?: catalogo;

  constructor(private catalogoHttp: CatalogosService) {}
  ngOnInit(): void {
    this.getAllCatalogos();
  }

  getAllCatalogos() {
    this.catalogoHttp.getAllCatalogs().subscribe((catalogos: catalogo[]) => {
      console.log(catalogos);
      this.catalogos = catalogos;
    });
  }

  initNewCatalogo() {
    this.catalogoToEdit = new catalogo();
  }

  editCatalogo(catalogo: catalogo) {
    this.catalogoToEdit = catalogo;
  }
}
