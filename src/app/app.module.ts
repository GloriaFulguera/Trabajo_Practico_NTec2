import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Components/container/container.component';
import { LocationsComponent } from './Components/locations/locations.component';
import { CharactersComponent } from './Components/characters/characters.component';
import { CharacterDetailsComponent } from './Components/character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LocationsComponent,
    CharactersComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
