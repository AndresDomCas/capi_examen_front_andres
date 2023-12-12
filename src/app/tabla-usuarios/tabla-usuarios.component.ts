import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';
import { UsuariosI } from '../interfaces/usuarios-i';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit{
  users: UsuariosI | any= [];

  constructor(private usuarios: UsuariosService){}
  
  ngOnInit(): void {
    this.usuarios.getUsuarios().subscribe({
      next: (r: any) => {
        this.users = r;
        console.log(this.users);

      },
      error: (e: any)=>{
        console.error(e);
      }
    });
  }
}
