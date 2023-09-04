import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catalogo } from 'src/core/_models/catalogo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogosService {
  private url = 'catalogo';

  constructor(private http: HttpClient) {}

  public getAllCatalogs(): Observable<catalogo[]> {
    return this.http.get<catalogo[]>(
      `${environment.apiUrl}/${this.url}/consulta`
    );
  }

  public deleteCatalogById(id: number) {
    return this.http.delete(`${environment.apiUrl}/${this.url}/baja/${id}`);
  }

  public addCatalogo(catalogo: catalogo) {
    return this.http.post(`${environment.apiUrl}/${this.url}/alta`, catalogo);
  }

  public updateCatalogo(catalogo: catalogo) {
    return this.http.put(
      `${environment.apiUrl}/${this.url}/modificacion`,
      catalogo
    );
  }
}
