import { Injectable } from '@angular/core';
import { Film } from  './modele/film';


@Injectable({
  providedIn: 'root'
})
export class FilmyService {

 private filmy: Film[] = [
    {id: 0, tytul: 'Titanic', opis: 'brytyjski transatlantyk typu Olympic, brytyjskiego towarzystwa okrętowego White Star Line ', rok: 1996 },
    {id: 1, tytul: 'Terminator', opis: 'Sarah Connor powraca aby chronić dziewczynę imieniem Dani przed nowym Terminatorem Rev-9', rok: 1984 },
    {id: 2, tytul: 'Avatar', opis: 'Jake, sparaliżowany były komandos, zostaje wysłany na planetę Pandora, gdzie zaprzyjaźnia się z lokalną społecznością i postanawia jej pomóc', rok: 2009 },
  ] 

  constructor() { }

  wszystkieFilmy(): Film[] {
    return this.filmy;
  }

  getFilmy(id: number): Film {
    return this.filmy[id];
  }
}
