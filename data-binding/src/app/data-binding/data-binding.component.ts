import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
    `
      .highlight {
      background-color: yellow;
      font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';

  cursoAngular: boolean = true;

  urlImagem: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nomeCurso: string = 'Angular';

  valorInicial: number = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!')
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
    console.log(this.valorAtual);
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
