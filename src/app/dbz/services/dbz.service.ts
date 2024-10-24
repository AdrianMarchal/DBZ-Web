import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';
@Injectable({providedIn: 'root'})
export class DbzService {
    
    public characters : Character[] = [
        {
            id: uuid(),
            name: 'Krilin',
            power: 500
        },{
            id: uuid(),
            name: 'Goku',
            power: 9500
        },{
            id: uuid(),
            name:'Vegeta',
            power: 7500
        }
    ]
    constructor() { }
    
    onNewCharacter(character : Character):void{
        const newCharactar:Character = {
            id: uuid() ,
            name: character.name,
            power: character.power
        }
        this.characters.push(newCharactar)
    }

    onDeleteCharacter(index:number){
        this.characters.splice(index,1);
        
    }

    onDeleteCharacterById(id:String){
        this.characters = this.characters.filter(character => character.id !== id)
    }
}