import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.router';

NgModule({
    bootstrap: [AppComponent],
    imports: [BrowserModule, routing],
    declarations: [AppComponent]
})
export class AppModule {}