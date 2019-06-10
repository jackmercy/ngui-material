import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
    private countClick: number;
    text: string;

    // @Input() resetCounter: boolean;

    @Input() buttonText: string;
    @Output() counter = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
        this.countClick = 0;

        this.text = this.buttonText;
    }

    increment(): void {
        this.countClick++;
        this.counter.emit(this.countClick);
    }


}
