import * as i0 from '@angular/core';
import { Injectable, Pipe, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { create } from 'apisauce';
import { BehaviorSubject, interval } from 'rxjs';
import * as i1 from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

class NgxPrettyearthService {
    constructor() {
        this.api = create({
            baseURL: 'https://raw.githubusercontent.com/limhenry/earthview/master/earthview.json',
            headers: { Accept: 'application/vnd.github.v3+json' },
        });
        this.key = 'prettyearth';
        this.init();
    }
    async init() {
        const item = JSON.parse(localStorage.getItem(this.key));
        this.prettyearth = new BehaviorSubject(item);
        if (item)
            this.prettyearth.next(item);
        else
            await this.call();
    }
    /**
     * Call this fun to set `prettyearth`.
     */
    async call() {
        const { ok, data, problem, originalError } = await this.api.get('');
        if (ok) {
            const randomResponse = data[this.getRandomInt(0, data.length)];
            this.prettyearth.next(randomResponse);
            localStorage.setItem(this.key, JSON.stringify(randomResponse));
        }
        else {
            console.error(problem, originalError?.toJSON());
        }
    }
    /**
     * Call this func to delete image from localStorage
     */
    destroy() {
        localStorage.removeItem(this.key);
        this.subscription?.unsubscribe();
        this.prettyearth.unsubscribe();
    }
    /**
     * Interval to call `prettyearth`
     * @param {number} time In miliseconds
     * @default 1000 ms
     */
    setInterval(timeInterval = 5000) {
        if (timeInterval >= 1000) {
            this.subscription?.unsubscribe();
            this.timeInterval = interval(timeInterval);
            this.subscription = this.timeInterval.subscribe(async () => {
                await this.call();
            });
        }
        else {
            console.error('ERROR: Interval must be greater than or equal to 1000 milliseconds');
        }
    }
    /**
     * Returns a random integer between min (included) and max (excluded)
     * @param {number} min
     * @param {number} max
     * @returns {number} number
     */
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
NgxPrettyearthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NgxPrettyearthService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxPrettyearthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NgxPrettyearthService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NgxPrettyearthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
SafePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SafePipe, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe });
SafePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SafePipe, name: "safe" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SafePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'safe',
                }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }]; } });

class NgxPrettyearthComponent {
    constructor(prettyearthService) {
        this.prettyearthService = prettyearthService;
        this.change = new EventEmitter();
        this.prettyearthService.prettyearth.subscribe((prettyearth) => {
            this.prettyearth = new BehaviorSubject(prettyearth);
            this.change.emit(prettyearth);
        });
    }
    ngOnInit() {
        if (this.interval)
            this.prettyearthService.setInterval(this.interval);
        this.change.emit(this.prettyearthService.prettyearth.getValue());
    }
    ngOnDestroy() {
        this.prettyearthService.destroy();
    }
    /**
     * Get a random picture
     */
    async getRandomPic() {
        await this.prettyearthService.call();
    }
}
NgxPrettyearthComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NgxPrettyearthComponent, deps: [{ token: NgxPrettyearthService }], target: i0.ɵɵFactoryTarget.Component });
NgxPrettyearthComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: NgxPrettyearthComponent, selector: "ngx-prettyearth", inputs: { interval: "interval" }, outputs: { change: "change" }, ngImport: i0, template: `
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
    <ng-content></ng-content>
  `, isInline: true, styles: [":host{margin:0;padding:0;z-index:-1}.containerImg{position:relative;width:100vw;height:100vh}.img{position:absolute;display:inline-block;width:100%;height:100%;border-style:none;object-fit:cover}\n"], pipes: { "safe": SafePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NgxPrettyearthComponent, decorators: [{
            type: Component,
            args: [{
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
    <ng-content></ng-content>
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
    `,
                    ],
                }]
        }], ctorParameters: function () { return [{ type: NgxPrettyearthService }]; }, propDecorators: { interval: [{
                type: Input
            }], change: [{
                type: Output
            }] } });

class NgxPrettyearthModule {
}
NgxPrettyearthModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NgxPrettyearthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxPrettyearthModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NgxPrettyearthModule, declarations: [NgxPrettyearthComponent, SafePipe], imports: [CommonModule], exports: [NgxPrettyearthComponent] });
NgxPrettyearthModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NgxPrettyearthModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NgxPrettyearthModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgxPrettyearthComponent, SafePipe],
                    imports: [CommonModule],
                    exports: [NgxPrettyearthComponent],
                }]
        }] });

/*
 * Public API Surface of ngx-prettyearth
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxPrettyearthComponent, NgxPrettyearthModule, NgxPrettyearthService };
//# sourceMappingURL=ngx-prettyearth.mjs.map
