import { Component } from '@angular/core';
import {
  IPrettyearth,
  NgxPrettyearthService,
} from 'projects/ngx-prettyearth/src/public-api';

@Component({
  selector: 'app-root',
  template: `
    <ngx-prettyearth [interval]="interval">
      <button
        class="button"
        (click)="prettyearthService.call()"
        (mouseenter)="stopInterval()"
        (mouseleave)="continueInterval()"
      >
        🌎
        <span class="tooltip">Get a new pic</span>
      </button>
      <div class="content">
        <h4>{{ prettyearth?.region }}</h4>
        <h2>{{ prettyearth?.country }}</h2>
      </div>
    </ngx-prettyearth>
  `,
  styles: [
    `
      .button {
        position: absolute;
        display: inline-block;
        top: 1em;
        right: 1em;
        background-color: rgba(255, 255, 255, 0.75);
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
        border: none;
        width: 3em;
        height: 3em;
        font-size: 1em;
        padding: 0px !important;
        border-radius: 50%;
        transition: ease-in 0.3s;
        z-index: 1;
      }
      .button:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 1);
      }
      .button .tooltip {
        visibility: hidden;
        position: absolute;
        width: 120px;
        background-color: white;
        color: black;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.3s;
        bottom: auto;
        font-size: 0.8em;
        right: 128%;
      }
      .button .tooltip::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 100%;
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent transparent white;
      }
      .button:hover .tooltip {
        visibility: visible;
        opacity: 1;
      }
      .content {
        position: absolute;
        display: inline-block;
        font-family: Arial, sans-serif;
        bottom: 1em;
        right: 1em;
        color: white;
        text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
        text-align: right;
        transition: ease-in 0.2s;
        z-index: 1;
      }
    `,
  ],
})
export class AppComponent {
  public title: string = 'prettyearth';

  private hz: number = 10 * 1000;
  public prettyearth: IPrettyearth | undefined;
  public interval: number = this.hz;

  constructor(public prettyearthService: NgxPrettyearthService) {
    this.prettyearthService.prettyearth.subscribe(
      (prettyearth: IPrettyearth) => {
        this.prettyearth = prettyearth;
      }
    );
  }

  public onChange(event: IPrettyearth): void {
    this.prettyearth = event;
  }

  public stopInterval() {
    this.prettyearthService.stopInterval();
  }

  public continueInterval() {
    this.prettyearthService.setInterval(this.hz);
  }
}
