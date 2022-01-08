import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export interface IPrettyearth {
    country: string;
    image: string;
    map: string;
    region: string;
}
export declare class NgxPrettyearthService {
    private api;
    private key;
    prettyearth: BehaviorSubject<IPrettyearth>;
    private timeInterval;
    private subscription;
    constructor();
    private init;
    /**
     * Call this func to set `prettyearth`.
     */
    call(): Promise<void>;
    /**
     * Call this func to delete image from localStorage
     */
    destroy(): void;
    /**
     * Interval to call `prettyearth`
     * @param {number} time In miliseconds
     * @default 1000 ms
     */
    setInterval(timeInterval?: number): void;
    /**
     * To stop the interval
     */
    stopInterval(): void;
    /**
     * Returns a random integer between min (included) and max (excluded)
     * @param {number} min
     * @param {number} max
     * @returns {number} number
     */
    private getRandomInt;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxPrettyearthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxPrettyearthService>;
}
