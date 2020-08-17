import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuariosUrl='http://localhost:5000/api/Usuario/';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.usuariosUrl}`);
  }

  criar(usuario: any) {
    return this.http.post(this.usuariosUrl, usuario);
  }

  editar(usuario: any){
    return this.http.put(this.usuariosUrl+usuario.id, usuario);
  }

  apagar(id: number){
    return this.http.delete(this.usuariosUrl+id);
  }
}
