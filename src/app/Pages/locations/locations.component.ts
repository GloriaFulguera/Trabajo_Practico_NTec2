import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../Service/character.service';

@Component({
  selector: 'app-locations',
  standalone: false,
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent implements OnInit{
  constructor(private service:CharacterService){}
  DataSource:any;
  Id:any;

  ngOnInit(): void {
    this.service.GetLocations().subscribe(x=>{
      this.DataSource=x;
      console.log(x);
    })
  }
}
