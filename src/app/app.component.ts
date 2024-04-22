import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ModalUsuarioComponent } from './modal-usuario/modal-usuario.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modal-lazy-loading';

constructor(public dialog: MatDialog) {}

  abrirModalUsuario() {
    this.dialog.open(ModalUsuarioComponent, {
      width: '600px',
      height: '400px',      
    });
  }
}
