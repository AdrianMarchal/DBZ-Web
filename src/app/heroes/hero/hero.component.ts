import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name : string = 'IronMan'
  public age : number = 30

  get capitalizedName():string{
    return this.name.toLocaleUpperCase()
  }

  getHeroDescription () :string {
    return `${this.name} - ${this.age}`
  }


  modificarHero(){

    this.name = prompt("Dime el heroe: ", "Spiderman")!
  }

  modificarEdad(){
    this.age++
  }

  reset(){
    this.age=30
    this.name='Ironman'
  }
}
