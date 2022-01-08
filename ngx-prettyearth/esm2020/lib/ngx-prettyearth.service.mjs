import { Injectable } from '@angular/core';
import { create } from 'apisauce';
import { BehaviorSubject, interval } from 'rxjs';
import * as i0 from "@angular/core";
export class NgxPrettyearthService {
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
     * Call this func to set `prettyearth`.
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
     * To stop the interval
     */
    stopInterval() {
        this.subscription?.unsubscribe();
        this.timeInterval = undefined;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXByZXR0eWVhcnRoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHJldHR5ZWFydGgvc3JjL2xpYi9uZ3gtcHJldHR5ZWFydGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQTRCLE1BQU0sTUFBTSxDQUFDOztBQVkzRSxNQUFNLE9BQU8scUJBQXFCO0lBYWhDO1FBWlEsUUFBRyxHQUFHLE1BQU0sQ0FBQztZQUNuQixPQUFPLEVBQ0wsNEVBQTRFO1lBQzlFLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxnQ0FBZ0MsRUFBRTtTQUN0RCxDQUFDLENBQUM7UUFFSyxRQUFHLEdBQVcsYUFBYSxDQUFDO1FBT2xDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFTyxLQUFLLENBQUMsSUFBSTtRQUNoQixNQUFNLElBQUksR0FBaUIsSUFBSSxDQUFDLEtBQUssQ0FDbkMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFXLENBQ3pCLENBQUM7UUFFbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QyxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFDakMsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxDQUFDLElBQUk7UUFDZixNQUFNLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRSxJQUFJLEVBQUUsRUFBRTtZQUNOLE1BQU0sY0FBYyxHQUFrQixJQUE0QixDQUNoRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRyxJQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUMzQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7U0FDaEU7YUFBTTtZQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksT0FBTztRQUNaLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFdBQVcsQ0FBQyxlQUF1QixJQUFJO1FBQzVDLElBQUksWUFBWSxJQUFJLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3pELE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLE9BQU8sQ0FBQyxLQUFLLENBQ1gsb0VBQW9FLENBQ3JFLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLFlBQVk7UUFDakIsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxZQUFZLENBQUMsR0FBVyxFQUFFLEdBQVc7UUFDM0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUN2RCxDQUFDOztrSEF4RlUscUJBQXFCO3NIQUFyQixxQkFBcUIsY0FGcEIsTUFBTTsyRkFFUCxxQkFBcUI7a0JBSGpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnYXBpc2F1Y2UnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBpbnRlcnZhbCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByZXR0eWVhcnRoIHtcbiAgY291bnRyeTogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xuICBtYXA6IHN0cmluZztcbiAgcmVnaW9uOiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hQcmV0dHllYXJ0aFNlcnZpY2Uge1xuICBwcml2YXRlIGFwaSA9IGNyZWF0ZSh7XG4gICAgYmFzZVVSTDpcbiAgICAgICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vbGltaGVucnkvZWFydGh2aWV3L21hc3Rlci9lYXJ0aHZpZXcuanNvbicsXG4gICAgaGVhZGVyczogeyBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb24nIH0sXG4gIH0pO1xuXG4gIHByaXZhdGUga2V5OiBzdHJpbmcgPSAncHJldHR5ZWFydGgnO1xuICBwdWJsaWMgcHJldHR5ZWFydGghOiBCZWhhdmlvclN1YmplY3Q8SVByZXR0eWVhcnRoPjtcblxuICBwcml2YXRlIHRpbWVJbnRlcnZhbDogT2JzZXJ2YWJsZTxudW1iZXI+IHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGl0ZW06IElQcmV0dHllYXJ0aCA9IEpTT04ucGFyc2UoXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSkgYXMgc3RyaW5nXG4gICAgKSBhcyBJUHJldHR5ZWFydGg7XG5cbiAgICB0aGlzLnByZXR0eWVhcnRoID0gbmV3IEJlaGF2aW9yU3ViamVjdChpdGVtKTtcblxuICAgIGlmIChpdGVtKSB0aGlzLnByZXR0eWVhcnRoLm5leHQoaXRlbSk7XG4gICAgZWxzZSBhd2FpdCB0aGlzLmNhbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIHRoaXMgZnVuYyB0byBzZXQgYHByZXR0eWVhcnRoYC5cbiAgICovXG4gIHB1YmxpYyBhc3luYyBjYWxsKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgb2ssIGRhdGEsIHByb2JsZW0sIG9yaWdpbmFsRXJyb3IgfSA9IGF3YWl0IHRoaXMuYXBpLmdldCgnJyk7XG4gICAgaWYgKG9rKSB7XG4gICAgICBjb25zdCByYW5kb21SZXNwb25zZTogSVByZXR0eWVhcnRoID0gKGRhdGEgYXMgQXJyYXk8SVByZXR0eWVhcnRoPilbXG4gICAgICAgIHRoaXMuZ2V0UmFuZG9tSW50KDAsIChkYXRhIGFzIEFycmF5PElQcmV0dHllYXJ0aD4pLmxlbmd0aClcbiAgICAgIF0gYXMgSVByZXR0eWVhcnRoO1xuICAgICAgdGhpcy5wcmV0dHllYXJ0aC5uZXh0KHJhbmRvbVJlc3BvbnNlKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCBKU09OLnN0cmluZ2lmeShyYW5kb21SZXNwb25zZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKHByb2JsZW0sIG9yaWdpbmFsRXJyb3I/LnRvSlNPTigpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCB0aGlzIGZ1bmMgdG8gZGVsZXRlIGltYWdlIGZyb20gbG9jYWxTdG9yYWdlXG4gICAqL1xuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmtleSk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5wcmV0dHllYXJ0aC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVydmFsIHRvIGNhbGwgYHByZXR0eWVhcnRoYFxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZSBJbiBtaWxpc2Vjb25kc1xuICAgKiBAZGVmYXVsdCAxMDAwIG1zXG4gICAqL1xuICBwdWJsaWMgc2V0SW50ZXJ2YWwodGltZUludGVydmFsOiBudW1iZXIgPSA1MDAwKTogdm9pZCB7XG4gICAgaWYgKHRpbWVJbnRlcnZhbCA+PSAxMDAwKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMudGltZUludGVydmFsID0gaW50ZXJ2YWwodGltZUludGVydmFsKTtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy50aW1lSW50ZXJ2YWwuc3Vic2NyaWJlKGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5jYWxsKCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ0VSUk9SOiBJbnRlcnZhbCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAxMDAwIG1pbGxpc2Vjb25kcydcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvIHN0b3AgdGhlIGludGVydmFsXG4gICAqL1xuICBwdWJsaWMgc3RvcEludGVydmFsKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMudGltZUludGVydmFsID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGV4Y2x1ZGVkKVxuICAgKiBAcGFyYW0ge251bWJlcn0gbWluXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcbiAgICogQHJldHVybnMge251bWJlcn0gbnVtYmVyXG4gICAqL1xuICBwcml2YXRlIGdldFJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gIH1cbn1cbiJdfQ==