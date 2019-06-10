import { NgModule } from '@angular/core';
import { NguiLibComponent } from './ngui-lib.component';
import { ButtonComponent } from './atom/button/button.component';

@NgModule({
    declarations: [
        NguiLibComponent,
        ButtonComponent
    ],
    imports: [
    ],
    exports: [
        NguiLibComponent,
        ButtonComponent
    ]
})
export class NguiLibModule { }
