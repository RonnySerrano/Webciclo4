import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AeropuertoModel} from '../modelos/aeropuerto.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {

  url = "http://localhost:3000"
  token: string = ''

  constructor(private http: HttpClient,
    private seguridadService: SeguridadService) {
      this.token = this.seguridadService.getToken();      
    }

    store(aeropuerto: AeropuertoModel): Observable<AeropuertoModel> {
      return this.http.post<AeropuertoModel>(`${this.url}/aeropuerto`, {
        id: aeropuerto.id,
        nombre: aeropuerto.nombre,
        ciudad: aeropuerto.ciudad,
        pais:aeropuerto.pais,
        coord_X: aeropuerto.coord_X,
        coord_Y: aeropuerto.coord_Y,
        siglas: aeropuerto.siglas,
        tipo:  aeropuerto.tipo
        
      });
    }

    getAll(): Observable<AeropuertoModel[]>{
      return this.http.get<AeropuertoModel[]>(`${this.url}/aeropuerto`, {
        // Le paso el token a la solicitud
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }

    update(aeropuerto: AeropuertoModel): Observable<AeropuertoModel> {
      return this.http.patch<AeropuertoModel>(`${this.url}/aeropuerto/${aeropuerto.id}`, {
        id: aeropuerto.id,
        nombre: aeropuerto.nombre,
        ciudad: aeropuerto.ciudad,
        pais:aeropuerto.pais,
        coord_X: aeropuerto.coord_X,
        coord_Y: aeropuerto.coord_Y,
        siglas: aeropuerto.siglas,
        tipo:  aeropuerto.tipo
      }, {
        // Le paso el token a la solicitud
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }

    delete(id: string): Observable<AeropuertoModel[]>{
      return this.http.delete<AeropuertoModel[]>(`${this.url}/aeropuerto/${id}`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }

    getWithId(id: string): Observable<AeropuertoModel>{
      return this.http.get<AeropuertoModel>(`${this.url}/aeropuerto/${id}`,{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }    

    getCount(): Observable<AeropuertoModel[]>{
      return this.http.get<AeropuertoModel[]>(`${this.url}/aeropuerto/count`, {
        // Le paso el token a la solicitud
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }

}