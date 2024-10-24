import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroeNames: string[] = ['Spiderman','Ironman','Hulk','Martosman','Thor'];
  public heroeBorrado?:string
  borrarUltimoHeroe(){
    this.heroeBorrado = this.heroeNames.pop()
   
  }
}

