import { Injectable } from '@angular/core';
import { producto } from 'src/core/_models/producto';
import { catalogo } from 'src/core/_models/catalogo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private url = 'producto';

  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<producto[]> {
    return this.http.get<producto[]>(
      `${environment.apiUrl}/${this.url}/consulta`
    );
  }

  public deleteProductById(id: number) {
    return this.http.delete(`${environment.apiUrl}/${this.url}/baja/${id}`);
  }

  public addProducto(producto: producto) {
    return this.http.post(`${environment.apiUrl}/${this.url}/alta`, producto);
  }

  public updateProducto(producto: producto) {
    return this.http.put(
      `${environment.apiUrl}/${this.url}/modificacion`,
      producto
    );
  }
}
