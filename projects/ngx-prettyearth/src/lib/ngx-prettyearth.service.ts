import { Injectable } from '@angular/core';
import { create } from 'apisauce';
import { BehaviorSubject, interval, Observable, Subscription } from 'rxjs';

export interface IPrettyearth {
  country: string;
  image: string;
  map: string;
  region: string;
}

@Injectable({
  providedIn: 'root',
})
export class NgxPrettyearthService {
  private api = create({
    baseURL:
      'https://raw.githubusercontent.com/limhenry/earthview/master/earthview.json',
    headers: { Accept: 'application/vnd.github.v3+json' },
  });

  private key: string = 'prettyearth';
  public prettyearth!: BehaviorSubject<IPrettyearth>;

  private timeInterval: Observable<number> | undefined;
  private subscription: Subscription | undefined;

  constructor() {
    this.init();
  }

  public async init(): Promise<void> {
    const item: IPrettyearth = JSON.parse(
      localStorage.getItem(this.key) as string
    ) as IPrettyearth;

    this.prettyearth = new BehaviorSubject(item);

    if (item) this.prettyearth.next(item);
    else await this.call();
  }

  /**
   * Call this fun to set `prettyearth`.
   */
  public async call(): Promise<void> {
    const { ok, data, problem, originalError } = await this.api.get('');
    if (ok) {
      const randomResponse: IPrettyearth = (data as Array<IPrettyearth>)[
        this.getRandomInt(0, (data as Array<IPrettyearth>).length)
      ] as IPrettyearth;
      this.prettyearth.next(randomResponse);
      localStorage.setItem(this.key, JSON.stringify(randomResponse));
    } else {
      console.error(problem, originalError?.toJSON());
    }
  }

  /**
   * Call this func to delete image from localStorage
   */
  public destroy(): void {
    localStorage.removeItem(this.key);
    this.subscription?.unsubscribe();
    this.prettyearth.unsubscribe();
  }

  /**
   * Interval to call `prettyearth`
   * @param {number} time In miliseconds
   * @default 1000 ms
   */
  public setInterval(timeInterval: number = 5000): void {
    if (timeInterval >= 1000) {
      this.subscription?.unsubscribe();
      this.timeInterval = interval(timeInterval);
      this.subscription = this.timeInterval.subscribe(async () => {
        await this.call();
      });
    } else {
      console.error(
        'ERROR: Interval must be greater than or equal to 1000 milliseconds'
      );
    }
  }

  /**
   * Returns a random integer between min (included) and max (excluded)
   * @param {number} min
   * @param {number} max
   * @returns {number} number
   */
  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
