import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio';

  public titulo:string = 'Primera App de Angular';
  public contador:number = 25;

  sumar(valor:number):void{
    this.contador += valor;
  }
  resetearContador():void {
    this.contador = 25;
  }
  restar(valor:number):void {
    this.contador -= valor;
  }
}