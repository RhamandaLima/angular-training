import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.scss']
})
export class DiretivaNgclassComponent {

  meuFavorito: boolean = false;

  constructor() { }

  onClick() {
    this.meuFavorito = !this.meuFavorito;
  }
}
