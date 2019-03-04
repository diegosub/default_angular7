import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Usuario } from '../../models/usuario/usuario';
import { HOST_AVA } from '../ava.api';


@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) {}

  login(usuario: Usuario){
    return this.http.post(`${HOST_AVA}/api/auth`, usuario);
  }

  createOrUpdate(usuario: Usuario){
    if(usuario.codigo != null && usuario.codigo > 0){
      return this.http.put(`${HOST_AVA}/api/usuario`, usuario);
    } else {
      usuario.codigo = null;
      return this.http.post(`${HOST_AVA}/api/usuario`, usuario);
    }
  }

  findAll(page: number, count: number){
    return this.http.get(`${HOST_AVA}/api/usuario/${page}/${count}`);
  }

  findById(codigo: number){
    return this.http.get(`${HOST_AVA}/api/usuario/${codigo}`);
  }

  delete(codigo: number){
    return this.http.delete(`${HOST_AVA}/api/usuario/${codigo}`);
  }

  //METODO QUE VALIDA O TOKEN DO USUARIO
}
