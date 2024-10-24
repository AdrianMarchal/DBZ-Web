import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template: `<h1>Hola contador</h1>
    <h4>{{contador}}</h4>
    <button (click)="modificar(1)">+1</button>,
    <button (click)="reset()">reset</button>,
    <button (click)="modificar(-1)">-1</button>,
    `
})

export class CounterComponent{

    title = 'prueba';
    public titulo:string = 'Primer ejemplo de angular';
    public contador:number = 20;
  
  
    modificar(valor:number):void{
      this.contador += valor;
  
    }
  
    reset():void{
      this.contador = 25;
    }
  }

