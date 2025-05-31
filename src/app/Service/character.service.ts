import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  url="https://rickandmortyapi.com/api/";
  constructor(private httpClient:HttpClient) { }

  GetCharacters(){
    return this.httpClient.get(this.url+'character');
  }
  GetLocations(){
    return this.httpClient.get(this.url+'location');
  }
}
