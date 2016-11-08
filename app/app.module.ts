import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComoponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports: [ BrowserModule,
                FormsModule,
                AppRoutingModule
                 ],
    declarations: [ AppComponent,
                    HeroDetailComoponent,
                    HeroesComponent,
                    DashboardComponent
                ],
    bootstrap: [ AppComponent ],
    providers: [ HeroService ]
})

export class AppModule {  }