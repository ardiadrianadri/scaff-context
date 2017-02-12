import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.router';
import { RunContextModule } from './runContext/runContext.module';

@NgModule({
    bootstrap: [AppComponent],
    imports: [BrowserModule, routing, RunContextModule],
    declarations: [AppComponent]
})
export class AppModule {}