import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent // declarado apenas de modo privado a esse módulo
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ],
  providers: [ CursosService ]
})
export class CursosModule { }
