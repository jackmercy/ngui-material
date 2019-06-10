import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ngui-material';

    // tslint:disable-next-line:variable-name
    getCounter(_counter: number): void {
        console.log(_counter);
    }
}
