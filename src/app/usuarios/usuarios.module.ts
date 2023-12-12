import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponent } from '../tabla-usuarios/tabla-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './usuarios.component';

@NgModule({
  declarations: [TablaUsuariosComponent, UsuariosComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    UsuariosComponent
  ]
})
export class UsuariosModule { }
