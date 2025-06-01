import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './Pages/characters/characters.component';
import { LocationsComponent } from './Pages/locations/locations.component';
import { CharacterDetailsComponent } from './Pages/character-details/character-details.component';

const routes: Routes = [
  {path:"",component:LocationsComponent},
  {path:"population/:id",component:CharactersComponent},
  {path:"character/:id",component:CharacterDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
