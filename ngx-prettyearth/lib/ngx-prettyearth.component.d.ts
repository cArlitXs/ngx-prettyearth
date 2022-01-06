import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPrettyearth, NgxPrettyearthService } from './ngx-prettyearth.service';
import * as i0 from "@angular/core";
export declare class NgxPrettyearthComponent implements OnInit, OnDestroy {
    private prettyearthService;
    prettyearth: BehaviorSubject<IPrettyearth>;
    interval: number | undefined;
    change: EventEmitter<IPrettyearth>;
    constructor(prettyearthService: NgxPrettyearthService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Get a random picture
     */
    getRandomPic(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxPrettyearthComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxPrettyearthComponent, "ngx-prettyearth", never, { "interval": "interval"; }, { "change": "change"; }, never, ["*"]>;
}
