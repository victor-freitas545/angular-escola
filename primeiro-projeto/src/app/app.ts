import { Component } from '@angular/core';
import { AlunoInterface } from './interfaces/AlunoInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'primeiro-projeto';

  listaAlunos: AlunoInterface[] = [
    {
      matricula: 0,
      nome: 'Vanderson',
      email: 'vandinho171@proway.com',
      cadastro: false,
      cursos: ['Excel', 'Phyton']
    },
    {
      matricula: 1,
      nome: 'Aline',
      email: 'aline.silva@proway.com',
      cadastro: false,
      cursos: ['Java', 'CSS']
    }
  ]
}
