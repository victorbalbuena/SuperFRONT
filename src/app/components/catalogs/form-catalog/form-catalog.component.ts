import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { catalogo } from 'src/core/_models/catalogo';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-catalog',
  templateUrl: './form-catalog.component.html',
  styleUrls: ['./form-catalog.component.scss'],
})
export class FormCatalogComponent implements OnInit {
  @Input()
  catalogo?: catalogo;

  constructor(
    private catalogoHttp: CatalogosService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  updateCatalogo(catalogo: catalogo) {
    this.catalogoHttp.updateCatalogo(catalogo).subscribe(() => {
      this.toastr.success('Succes', 'Catálogo actualizado', {
        timeOut: 10000,
      });
    });
  }

  createCatalogo(catalogo: catalogo) {
    this.catalogoHttp.updateCatalogo(catalogo).subscribe(() => {
      this.toastr.success('Succes', 'Catálogo creado', {
        timeOut: 10000,
      });
    });
  }

  cancel() {
    this.catalogo = undefined;
  }
}
