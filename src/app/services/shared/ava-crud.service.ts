import { HOST_AVA } from '../ava.api';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AvaCrudService<Entity> {

  constructor(public http: HttpClient) {}

  pesquisar(obj: Entity) {
    return this.http.post(`${HOST_AVA}/api/`+this.artefato()+`/pesquisar`, obj);
  }

  get(obj: Entity) {
    return this.http.post(`${HOST_AVA}/api/`+this.artefato()+`/get`, obj);
  }

  inserir(obj: Entity) {
    return this.http.post(`${HOST_AVA}/api/`+this.artefato(), obj)
  }

  alterar(obj: Entity) {
    return this.http.put(`${HOST_AVA}/api/`+this.artefato(), obj)
  }

  inativar(obj: Entity) {
    return this.http.post(`${HOST_AVA}/api/`+this.artefato()+`/inativar`, obj);
  }

  ativar(obj: Entity) {
    return this.http.post(`${HOST_AVA}/api/`+this.artefato()+`/ativar`, obj);
  }

  artefato(): string { return null }
}