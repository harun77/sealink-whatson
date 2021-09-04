import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { EventComponent } from './components/event/event.component';
import { WhatsOnComponent } from './components/whats-on/whats-on.component';

@NgModule({
  declarations: [
    AppComponent,
    WhatsOnComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
