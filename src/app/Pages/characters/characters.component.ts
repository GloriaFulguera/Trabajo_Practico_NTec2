import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../Service/character.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-characters',
  standalone: false,
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit{
  constructor(private service:CharacterService,private route:ActivatedRoute){}
  DataSource:any;
  Id:any;
  Population:any[]=[];

  ngOnInit(): void {
    this.route.paramMap.subscribe(x=>{
      this.Id=x.get('id');
      this.service.GetCharactersLocation(this.Id).subscribe(z=>{
        this.DataSource=z;
        //console.log(this.DataSource);
      })
    })
    this.GetPopulation();
  }
  GetPopulation(){
    for(let resident of this.DataSource.residents){
      this.service.GetCharacterByUrl(resident).subscribe(x=>{
        this.Population.push(x);
        //console.log(this.Population);
      })
    }
  }

}
