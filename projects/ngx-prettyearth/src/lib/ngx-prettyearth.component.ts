import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPrettyearth, NgxPrettyearthService } from './ngx-prettyearth.service';

@Component({
  selector: 'ngx-prettyearth',
  template: `
    <div class="containerImg">
      <picture>
        <source
          media="(max-width: 640px)"
          [srcset]="prettyearth?.getValue()?.image | safe: 'url'"
        />
        <img
          class="img"
          [src]="prettyearth?.getValue()?.image | safe: 'url'"
          [alt]="
            prettyearth?.getValue()?.region +
            (prettyearth?.getValue()?.region ? ' - ' : '') +
            prettyearth?.getValue()?.country
          "
        />
      </picture>
    </div>
    <div [ngClass]="classes ? classes : 'content'">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        margin: 0;
        padding: 0;
        z-index: -1;
      }
      .containerImg {
        position: relative;
        width: 100vw;
        height: 100vh;
      }
      .img {
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-style: none;
        object-fit: cover;
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
        z-index: 1;
      }
    `,
  ],
})
export class NgxPrettyearthComponent implements OnInit, OnDestroy {
  public prettyearth!: BehaviorSubject<IPrettyearth>;

  @Input() public interval: number | undefined;
  @Input() public classes!: Array<string>;
  @Output() public change: EventEmitter<IPrettyearth> = new EventEmitter();

  constructor(private prettyearthService: NgxPrettyearthService) {
    this.prettyearthService.prettyearth.subscribe(
      (prettyearth: IPrettyearth): void => {
        this.prettyearth = new BehaviorSubject(prettyearth);
        this.change.emit(prettyearth);
      }
    );
  }

  ngOnInit(): void {
    if (this.interval) this.prettyearthService.setInterval(this.interval);
    this.change.emit(this.prettyearthService.prettyearth.getValue());
  }

  ngOnDestroy(): void {
    this.prettyearthService.destroy();
  }

  /**
   * Get a random picture
   */
  public async getRandomPic(): Promise<void> {
    await this.prettyearthService.call();
  }
}
