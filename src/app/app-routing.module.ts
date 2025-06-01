import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './Pages/characters/characters.component';
import { LocationsComponent } from './Pages/locations/locations.component';

const routes: Routes = [
  {path:"",component:LocationsComponent},
  {path:"population/:id",component:CharactersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
