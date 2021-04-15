import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class ProcesosService {

  constructor(private http: HttpClient) { }

  getPersona( ){
    return this.http.get<Persona[]>(`http://localhost:8000/api/personas/`);
  }

  postPersona( persona: any ){
    console.log(persona);
    return this.http.post(`http://localhost:8000/api/personas`, persona);
  }
}
