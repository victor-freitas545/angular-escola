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

exibicao: string = 'cards';


  listaAlunos: AlunoInterface[] = [
    {
      foto: "../../../assets/images/homem.webp",
      matricula: 0,
      nome: 'Vanderson',
      email: 'vandinho171@proway.com',
      cadastro: true,
      cursos: ['Excel', 'Phyton']
    },

    {
      foto: "../../../assets/images/mulher.webp",
      matricula: 1,
      nome: 'Aline',
      email: 'aline.silva@proway.com',
      cadastro: true,
      cursos: ['Java', 'CSS']
    },

    {
      foto:"../../../assets/images/menino.webp",
      matricula:2,
      nome: 'Péricles',
      email: 'pericles.nando@proway.com',
      cadastro: false,
      cursos:['UI Design', 'AutoCad', 'Linux Server']
    },
  ];

  alterarExibicao(): void {
    if (this.exibicao == 'lista') {
      this.exibicao = 'cards';
    } else if (this.exibicao == 'cards') {
      this.exibicao = 'lista';
    }
  }
}
