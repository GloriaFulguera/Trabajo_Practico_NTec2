import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  url="https://rickandmortyapi.com/api/";
  constructor(private httpClient:HttpClient) { }

  GetCharacterByUrl(sUrl:any){
    return this.httpClient.get(sUrl);
  }
  GetLocations(){
    return this.httpClient.get(this.url+'location');
  }
  GetCharactersLocation(id:any){
    return this.httpClient.get(this.url+'location/'+id)
  }
}
