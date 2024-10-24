import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { AddCharacterComponent } from '../add-character/add-character.component';
@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input ()
  public characterList: Character[]=[
    {
      name: 'Trunks',
      power: 10
    }
  ]

  @Output()
  public ondDelete: EventEmitter<String> = new EventEmitter();

  emitDelete(i?:String){
    if(i == undefined) return
    this.ondDelete.emit(i)
  }
}
