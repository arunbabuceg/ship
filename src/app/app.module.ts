import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { CoheroComponent } from './cohero/cohero.component';
import { CoreComponent } from './core/core.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PeopleComponent } from './people/people.component';
import { HeroineComponent } from './heroine/heroine.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    CoheroComponent,
    CoreComponent,
    GalleryComponent,
    PeopleComponent,
    HeroineComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
