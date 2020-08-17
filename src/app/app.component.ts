import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { UsuarioService} from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usuarios: Array<any>;
  usuario: any;

  constructor(private service: UsuarioService) {}

  ngOnInit() {
    this.usuario = {};
    this.listar();
    
  }
  listar(){
    this.service.listar()
      .subscribe(resposta => this.usuarios = resposta);
  }

  criar(frm: FormGroup) {
    this.service.criar(this.usuario).subscribe(resposta => {
      this.listar();
      frm.reset();
    });
  }

  editar(frm: FormGroup) {
    this.service.editar(this.usuario).subscribe(resposta => {
      this.listar();
      frm.reset();
    });
  }

  apagar(frm: FormGroup){
    this.service.apagar(this.usuario.id).subscribe(resposta => {
      this.listar();
      frm.reset();
    });
  }
}
