import { Component } from '@angular/core';
import { IPrettyearth } from 'projects/ngx-prettyearth/src/public-api';

@Component({
  selector: 'app-root',
  template: `
    <ngx-prettyearth [interval]="5000" (change)="onChange($event)">
      <div class="content">
        <h4>{{ prettyearth?.region }}</h4>
        <h2>{{ prettyearth?.country }}</h2>
      </div>
    </ngx-prettyearth>
  `,
  styles: [
    `
      .content {
        position: absolute;
        display: inline-block;
        font-family: Arial, sans-serif;
        bottom: 1em;
        right: 1em;
        color: white;
        text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
        text-align: right;
        z-index: 1;
      }
    `,
  ],
})
export class AppComponent {
  public title: string = 'prettyearth';

  public prettyearth: IPrettyearth | undefined;

  public onChange(event: IPrettyearth): void {
    this.prettyearth = event;
  }
}
