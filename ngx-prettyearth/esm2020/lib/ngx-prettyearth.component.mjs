import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./ngx-prettyearth.service";
import * as i2 from "./safe.pipe";
export class NgxPrettyearthComponent {
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
NgxPrettyearthComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: NgxPrettyearthComponent, deps: [{ token: i1.NgxPrettyearthService }], target: i0.ɵɵFactoryTarget.Component });
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
  `, isInline: true, styles: [":host{margin:0;padding:0;z-index:-1}.containerImg{position:relative;width:100vw;height:100vh}.img{position:absolute;display:inline-block;width:100%;height:100%;border-style:none;object-fit:cover}\n"], pipes: { "safe": i2.SafePipe } });
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
        }], ctorParameters: function () { return [{ type: i1.NgxPrettyearthService }]; }, propDecorators: { interval: [{
                type: Input
            }], change: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXByZXR0eWVhcnRoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1wcmV0dHllYXJ0aC9zcmMvbGliL25neC1wcmV0dHllYXJ0aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBZ0R2QyxNQUFNLE9BQU8sdUJBQXVCO0lBTWxDLFlBQW9CLGtCQUF5QztRQUF6Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO1FBRjVDLFdBQU0sR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd2RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDM0MsQ0FBQyxXQUF5QixFQUFRLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLLENBQUMsWUFBWTtRQUN2QixNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QyxDQUFDOztvSEE3QlUsdUJBQXVCO3dHQUF2Qix1QkFBdUIsd0hBM0N4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CVDsyRkF3QlUsdUJBQXVCO2tCQTdDbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQ7b0JBQ0QsTUFBTSxFQUFFO3dCQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbUJDO3FCQUNGO2lCQUNGOzRHQUlpQixRQUFRO3NCQUF2QixLQUFLO2dCQUNXLE1BQU07c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJUHJldHR5ZWFydGgsIE5neFByZXR0eWVhcnRoU2VydmljZSB9IGZyb20gJy4vbmd4LXByZXR0eWVhcnRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtcHJldHR5ZWFydGgnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJJbWdcIj5cbiAgICAgIDxwaWN0dXJlPlxuICAgICAgICA8c291cmNlXG4gICAgICAgICAgbWVkaWE9XCIobWF4LXdpZHRoOiA2NDBweClcIlxuICAgICAgICAgIFtzcmNzZXRdPVwicHJldHR5ZWFydGg/LmdldFZhbHVlKCk/LmltYWdlIHwgc2FmZTogJ3VybCdcIlxuICAgICAgICAvPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3M9XCJpbWdcIlxuICAgICAgICAgIFtzcmNdPVwicHJldHR5ZWFydGg/LmdldFZhbHVlKCk/LmltYWdlIHwgc2FmZTogJ3VybCdcIlxuICAgICAgICAgIFthbHRdPVwiXG4gICAgICAgICAgICBwcmV0dHllYXJ0aD8uZ2V0VmFsdWUoKT8ucmVnaW9uICtcbiAgICAgICAgICAgIChwcmV0dHllYXJ0aD8uZ2V0VmFsdWUoKT8ucmVnaW9uID8gJyAtICcgOiAnJykgK1xuICAgICAgICAgICAgcHJldHR5ZWFydGg/LmdldFZhbHVlKCk/LmNvdW50cnlcbiAgICAgICAgICBcIlxuICAgICAgICAvPlxuICAgICAgPC9waWN0dXJlPlxuICAgIDwvZGl2PlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgfVxuICAgICAgLmNvbnRhaW5lckltZyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgfVxuICAgICAgLmltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neFByZXR0eWVhcnRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgcHJldHR5ZWFydGghOiBCZWhhdmlvclN1YmplY3Q8SVByZXR0eWVhcnRoPjtcblxuICBASW5wdXQoKSBwdWJsaWMgaW50ZXJ2YWw6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgQE91dHB1dCgpIHB1YmxpYyBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxJUHJldHR5ZWFydGg+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJldHR5ZWFydGhTZXJ2aWNlOiBOZ3hQcmV0dHllYXJ0aFNlcnZpY2UpIHtcbiAgICB0aGlzLnByZXR0eWVhcnRoU2VydmljZS5wcmV0dHllYXJ0aC5zdWJzY3JpYmUoXG4gICAgICAocHJldHR5ZWFydGg6IElQcmV0dHllYXJ0aCk6IHZvaWQgPT4ge1xuICAgICAgICB0aGlzLnByZXR0eWVhcnRoID0gbmV3IEJlaGF2aW9yU3ViamVjdChwcmV0dHllYXJ0aCk7XG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQocHJldHR5ZWFydGgpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnRlcnZhbCkgdGhpcy5wcmV0dHllYXJ0aFNlcnZpY2Uuc2V0SW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnByZXR0eWVhcnRoU2VydmljZS5wcmV0dHllYXJ0aC5nZXRWYWx1ZSgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucHJldHR5ZWFydGhTZXJ2aWNlLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSByYW5kb20gcGljdHVyZVxuICAgKi9cbiAgcHVibGljIGFzeW5jIGdldFJhbmRvbVBpYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLnByZXR0eWVhcnRoU2VydmljZS5jYWxsKCk7XG4gIH1cbn1cbiJdfQ==