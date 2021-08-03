import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { HomeComponent }            from './components/home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent }  from './components/header/header.component';
import { FooterComponent }  from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { NavComponent }     from './components/nav/nav.component';

import { MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavComponent,
    MatListModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenav
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
