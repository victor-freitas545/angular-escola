import { Component } from '@angular/core';
import { AlunoInterface } from './interfaces/AlunoInterface';
import { Aluno } from './componentes/aluno/aluno';

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
      foto: "/assets/images/homem.webp",
      matricula: 0,
      nome: 'Vanderson',
      email: 'vandinho171@proway.com',
      cadastro: false,
      cursos: ['Excel', 'Phyton'],
      notas:[5,8,9]
    },

    {
      foto: "/assets/images/mulher.webp",
      matricula: 1,
      nome: 'Aline',
      email: 'aline.silva@proway.com',
      cadastro: true,
      cursos: ['Java', 'CSS'],
      notas:[10,10,10]
    },

    {
      foto:"/assets/images/menino.webp",
      matricula:2,
      nome: 'Péricles',
      email: 'pericles.nando@proway.com',
      cadastro: false,
      cursos:['UI Design', 'AutoCad', 'Linux Server'],
      notas: [9,9.9]
    },
    {
      foto:"assets/images/SpongeBob.png",
      matricula:3,
      nome: 'Bob Esponja',
      email: 'bob.esponja@proway.com',
      cadastro: true,
      cursos:['Azure', 'Infra', 'Linux Ubuntu'],
      notas: [7,7,7]
    },
      {
      foto:"assets/images/bloo-foster.png",
      matricula:4,
      nome: 'Bloo',
      email: 'bloo.foster@proway.com',
      cadastro: false,
      cursos:['Khali Linux', 'Azure', 'Redes'],
      notas: [8,8,8]
    },
  ];

  alterarExibicao(): void {
    if (this.exibicao == 'lista') {
      this.exibicao = 'cards';
    } else if (this.exibicao == 'cards') {
      this.exibicao = 'lista';
    }
  }
  listaFiltro: AlunoInterface [] = this.listaAlunos;

  filtrarAprovados(): void{

    this.listaFiltro = [];

    this.listaAlunos.forEach(aluno =>{
      if (aluno.cadastro == true) {
        this.listaFiltro.push(aluno);
      }
    });
  }
  filtrarReprovados(): void{
    this.listaFiltro = [];
  }
  mostrarTodos(): void{
    this.listaFiltro = this.listaAlunos;
  }

    onExcluir(matricula:number): void {

      //percorrer a lista de alunos
      this.listaFiltro.forEach( (aluno, index) =>{

        //encontrar o aluno com a matrícula igual a do parâmetro recebido
        if(aluno.matricula == matricula) {

          //remover o aluno da lista
          this.listaFiltro.splice(index,1);
        }else{

          //imprime na tela de debug
          console.log('Matrícula não encontrada!')
        }
      });
    }
    //percorrer a lista de alunos 
    //encontrar o aluno com a matrícula igual a do parâmetro recebido
    // remover o aluno da lista
    //lista.splice(index, quantidadeRemovida)
    //indexOf();


  }
