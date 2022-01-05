import { Component } from '@angular/core';
import { IPrettyearth } from 'projects/ngx-prettyearth/src/public-api';

@Component({
  selector: 'app-root',
  template: `
    <ngx-prettyearth
      [classes]="['class']"
      [interval]="3000"
      (change)="onChange($event)"
    >
      <h4>{{ prettyearth?.region }}</h4>
      <h2>{{ prettyearth?.country }}</h2>
    </ngx-prettyearth>
  `,
  styles: [``],
})
export class AppComponent {
  public title: string = 'prettyearth';

  public prettyearth: IPrettyearth | undefined;

  public onChange(event: IPrettyearth): void {
    this.prettyearth = event;
  }
}
