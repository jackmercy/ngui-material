import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngui-ngui-lib',
  template: `
    <p>
      ngui-lib works!
    </p>
  `,
  styleUrls: ['../assets/src/styles/styles.material.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NguiLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
