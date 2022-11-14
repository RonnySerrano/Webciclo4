import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RutaModel } from '../modelos/ruta.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class RutaService {

  url = "http://localhost:3000"
  token: string = ''

  constructor(private http: HttpClient,
    private seguridadService: SeguridadService) {
      this.token = this.seguridadService.getToken();      
    }

    store(ruta: RutaModel): Observable<RutaModel> {
      return this.http.post<RutaModel>(`${this.url}/Ruta`, {
        id: ruta.id,
        origen: ruta.origen,
        destino: ruta.destino,
        tiempo_estimado:ruta.tiempo_estimado
      });
    }

    getAll(): Observable<RutaModel[]>{
      return this.http.get<RutaModel[]>(`${this.url}/Ruta`, {
        // Le paso el token a la solicitud
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }

    update(ruta: RutaModel): Observable<RutaModel> {
      return this.http.patch<RutaModel>(`${this.url}/ruta/${ruta.id}`, {
        id: ruta.id,
        origen: ruta.origen,
        destino: ruta.destino,
        tiempo_estimado:ruta.tiempo_estimado
      }, {
        // Le paso el token a la solicitud
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }

    delete(id: string): Observable<RutaModel[]>{
      return this.http.delete<RutaModel[]>(`${this.url}/ruta/${id}`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }

    getWithId(id: string): Observable<RutaModel>{
      return this.http.get<RutaModel>(`${this.url}/ruta/${id}`,{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }    

    getCount(): Observable<RutaModel[]>{
      return this.http.get<RutaModel[]>(`${this.url}/ruta/count`, {
        // Le paso el token a la solicitud
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }

}