import { Component, Input } from '@angular/core';
import { AlunoInterface } from '../../interfaces/AlunoInterface';

@Component({
  selector: 'app-aluno',
  standalone: false,
  templateUrl: './aluno.html',
  styleUrl: './aluno.css'
})
export class Aluno {
 
  @Input()
  aluno!: AlunoInterface;
  //função que será executada assim que o componente for devidamente carregado
  ngOnInit(): void{
    this.calcularMedia();
  }

  calcularMedia():string{

    let soma: number = 0;
    this.aluno.notas.forEach(nota => {
      soma+= nota;
    });
     const media: number = soma /this.aluno.notas.length;
     return media.toFixed(2);
  }
}
