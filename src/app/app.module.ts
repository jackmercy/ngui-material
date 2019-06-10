import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NguiLibModule } from 'ngui-lib';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NguiLibModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
