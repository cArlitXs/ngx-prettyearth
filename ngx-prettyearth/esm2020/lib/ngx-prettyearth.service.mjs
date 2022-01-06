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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXByZXR0eWVhcnRoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcHJldHR5ZWFydGgvc3JjL2xpYi9uZ3gtcHJldHR5ZWFydGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDbEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQTRCLE1BQU0sTUFBTSxDQUFDOztBQVkzRSxNQUFNLE9BQU8scUJBQXFCO0lBYWhDO1FBWlEsUUFBRyxHQUFHLE1BQU0sQ0FBQztZQUNuQixPQUFPLEVBQ0wsNEVBQTRFO1lBQzlFLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxnQ0FBZ0MsRUFBRTtTQUN0RCxDQUFDLENBQUM7UUFFSyxRQUFHLEdBQVcsYUFBYSxDQUFDO1FBT2xDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSTtRQUNmLE1BQU0sSUFBSSxHQUFpQixJQUFJLENBQUMsS0FBSyxDQUNuQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsQ0FDekIsQ0FBQztRQUVsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdDLElBQUksSUFBSTtZQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUNqQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLLENBQUMsSUFBSTtRQUNmLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksRUFBRSxFQUFFO1lBQ04sTUFBTSxjQUFjLEdBQWtCLElBQTRCLENBQ2hFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFHLElBQTRCLENBQUMsTUFBTSxDQUFDLENBQzNDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztTQUNoRTthQUFNO1lBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxPQUFPO1FBQ1osWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksV0FBVyxDQUFDLGVBQXVCLElBQUk7UUFDNUMsSUFBSSxZQUFZLElBQUksSUFBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDekQsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxDQUFDLEtBQUssQ0FDWCxvRUFBb0UsQ0FDckUsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssWUFBWSxDQUFDLEdBQVcsRUFBRSxHQUFXO1FBQzNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDdkQsQ0FBQzs7a0hBaEZVLHFCQUFxQjtzSEFBckIscUJBQXFCLGNBRnBCLE1BQU07MkZBRVAscUJBQXFCO2tCQUhqQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ2FwaXNhdWNlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgaW50ZXJ2YWwsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQcmV0dHllYXJ0aCB7XG4gIGNvdW50cnk6IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgbWFwOiBzdHJpbmc7XG4gIHJlZ2lvbjogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTmd4UHJldHR5ZWFydGhTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBhcGkgPSBjcmVhdGUoe1xuICAgIGJhc2VVUkw6XG4gICAgICAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xpbWhlbnJ5L2VhcnRodmlldy9tYXN0ZXIvZWFydGh2aWV3Lmpzb24nLFxuICAgIGhlYWRlcnM6IHsgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52Mytqc29uJyB9LFxuICB9KTtcblxuICBwcml2YXRlIGtleTogc3RyaW5nID0gJ3ByZXR0eWVhcnRoJztcbiAgcHVibGljIHByZXR0eWVhcnRoITogQmVoYXZpb3JTdWJqZWN0PElQcmV0dHllYXJ0aD47XG5cbiAgcHJpdmF0ZSB0aW1lSW50ZXJ2YWw6IE9ic2VydmFibGU8bnVtYmVyPiB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGl0ZW06IElQcmV0dHllYXJ0aCA9IEpTT04ucGFyc2UoXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSkgYXMgc3RyaW5nXG4gICAgKSBhcyBJUHJldHR5ZWFydGg7XG5cbiAgICB0aGlzLnByZXR0eWVhcnRoID0gbmV3IEJlaGF2aW9yU3ViamVjdChpdGVtKTtcblxuICAgIGlmIChpdGVtKSB0aGlzLnByZXR0eWVhcnRoLm5leHQoaXRlbSk7XG4gICAgZWxzZSBhd2FpdCB0aGlzLmNhbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIHRoaXMgZnVuIHRvIHNldCBgcHJldHR5ZWFydGhgLlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGNhbGwoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgeyBvaywgZGF0YSwgcHJvYmxlbSwgb3JpZ2luYWxFcnJvciB9ID0gYXdhaXQgdGhpcy5hcGkuZ2V0KCcnKTtcbiAgICBpZiAob2spIHtcbiAgICAgIGNvbnN0IHJhbmRvbVJlc3BvbnNlOiBJUHJldHR5ZWFydGggPSAoZGF0YSBhcyBBcnJheTxJUHJldHR5ZWFydGg+KVtcbiAgICAgICAgdGhpcy5nZXRSYW5kb21JbnQoMCwgKGRhdGEgYXMgQXJyYXk8SVByZXR0eWVhcnRoPikubGVuZ3RoKVxuICAgICAgXSBhcyBJUHJldHR5ZWFydGg7XG4gICAgICB0aGlzLnByZXR0eWVhcnRoLm5leHQocmFuZG9tUmVzcG9uc2UpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIEpTT04uc3RyaW5naWZ5KHJhbmRvbVJlc3BvbnNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IocHJvYmxlbSwgb3JpZ2luYWxFcnJvcj8udG9KU09OKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIHRoaXMgZnVuYyB0byBkZWxldGUgaW1hZ2UgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICovXG4gIHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMua2V5KTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnByZXR0eWVhcnRoLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJ2YWwgdG8gY2FsbCBgcHJldHR5ZWFydGhgXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIEluIG1pbGlzZWNvbmRzXG4gICAqIEBkZWZhdWx0IDEwMDAgbXNcbiAgICovXG4gIHB1YmxpYyBzZXRJbnRlcnZhbCh0aW1lSW50ZXJ2YWw6IG51bWJlciA9IDUwMDApOiB2b2lkIHtcbiAgICBpZiAodGltZUludGVydmFsID49IDEwMDApIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy50aW1lSW50ZXJ2YWwgPSBpbnRlcnZhbCh0aW1lSW50ZXJ2YWwpO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnRpbWVJbnRlcnZhbC5zdWJzY3JpYmUoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmNhbGwoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnRVJST1I6IEludGVydmFsIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDEwMDAgbWlsbGlzZWNvbmRzJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoZXhjbHVkZWQpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBudW1iZXJcbiAgICovXG4gIHByaXZhdGUgZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgfVxufVxuIl19