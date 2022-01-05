# ngx-prettyearth

Component to show random picture from Google Earth Image Gallery.

> Angular component inspired by [EarthView](https://github.com/limhenry/earthview) & [PrettyEarth](https://github.com/evertdespiegeleer/PrettyEarth).

---

## Preinstall

This component depends on [`apisauce`](https://github.com/infinitered/apisauce).

```
npm i apisauce
```

o

```
yarn add apisauce
```

---

## Install

```
npm i ngx-prettyearth
```

o

```
yarn add ngx-prettyearth
```

---

## Import

Add `NgxPrettyearthModule` in your imports

```typescript
import { NgxPrettyearthModule } from 'ngx-prettyearth';

...
imports: [..., NgxPrettyearthModule],
```

---

## Use

### HTML Component

```html
<ngx-prettyearth></ngx-prettyearth>
```

o

```html
<ngx-prettyearth
  [classes]="['class']"
  [interval]="1000"
  (change)="onChange($event)"
>
</ngx-prettyearth>
```

### TS Component

```typescript
...
  public prettyearth!: IPrettyearth;

  public onChange(event: IPrettyearth) {
    this.prettyearth = event;
  }
...
```

> Can also be used by reference

---

## Variables

| Name          | Type                         | Description                                          |
| ------------- | ---------------------------- | ---------------------------------------------------- |
| `prettyearth` | `Observable<IPrettyearth>`   | Object where the information is stored               |
| `classes`     | `Array<string>`              | Similar to `ngClass` to `<ng-content>` tag           |
| `interval`    | `number`                     | Time interval to save a random image in milliseconds |
| `change`      | `EventEmitter<IPrettyearth>` | Capture the change of the `prettyearth` variable     |

---

## Interfaces

```typescript
interface IPrettyearth {
  country: string;
  image: string;
  map: string;
  region: string;
}
```

---

## Services

If you don't want to use the component and want to build your own component you can use the service by subscribing to it.

This service gives you all the access to the component

```typescript
constructor(private prettyearthService: NgxPrettyearthService) {
    prettyearthService.prettyearth.subscribe(
      (prettyearth: IPrettyearth): void => {
          ...
      }
    );
}
```

---

## Support

You can help me 😊 [Issues](https://github.com/cArlitXs/ngx-prettyearth/issues).

---

## License

ngx-prettyearth is available under the MIT license.

---

## ☕ Coffee!

[<img src="https://user-images.githubusercontent.com/1685680/61808727-4925de00-ae3c-11e9-9d60-66bef358fd8e.png" alt="drawing" width="180"/>](https://www.buymeacoffee.com/carlitxs "Buy me a coffee")
