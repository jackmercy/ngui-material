import { NgModule } from '@angular/core';
import { NguiLibComponent } from './ngui-lib.component';
import { ButtonComponent } from './atom/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { InputComponent } from './atom/input/input.component';

@NgModule({
    declarations: [
        NguiLibComponent,
        ButtonComponent,
        InputComponent
    ],
    imports: [
        BrowserAnimationsModule,
        MatButtonModule
    ],
    exports: [
        NguiLibComponent,
        ButtonComponent,
        InputComponent
    ]
})
export class NguiLibModule { }
