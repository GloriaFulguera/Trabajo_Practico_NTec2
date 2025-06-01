import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../Service/character.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  standalone: false,
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent implements OnInit{
  constructor(private service:CharacterService, private router:ActivatedRoute){}
  Id:any;
  DataSource:any;

  ngOnInit(): void {
    this.router.paramMap.subscribe(x=>{
      this.Id=x.get("id");
      //console.log(this.Id);
    })
    this.GetCharacter(this.Id);
  }
  GetCharacter(id:any){
    this.service.GetCharacter(id).subscribe(x=>{
      this.DataSource=x;
      console.log(this.DataSource);
    })
  }
}
