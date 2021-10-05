import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  datos(){
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log("wenas " + usuario.nombre )

  }



}
