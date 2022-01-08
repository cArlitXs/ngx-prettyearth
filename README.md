# ngx-prettyearth [![version](https://img.shields.io/npm/v/ngx-prettyearth?style=flat-square)](https://www.npmjs.com/package/ngx-prettyearth)

Component to show random picture from Google Earth Image Gallery.

> Angular component inspired by [EarthView](https://github.com/limhenry/earthview) & [PrettyEarth](https://github.com/evertdespiegeleer/PrettyEarth).

---

## Contents

- [Demo](#demo)
- [Preinstall](#preinstall)
- [Install](#install)
- [Import](#import)
- [Use](#use)
  - [HTML Component](#html-component)
  - [TS Component](#ts-component)
- [Variables](#variables)
- [Services](#services)
- [Methods](#methods)
  - [Service](#service)
  - [Component](#component)
- [Interfaces](#interfaces)
- [Support](#support)
- [License](#license)

---

## Demo

See demo [here](https://carlitxs.github.io/ngx-prettyearth/prettyearth/)

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

Add `NgxPrettyearthModule` in import of `app.module.ts`

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
<ngx-prettyearth [interval]="1000" (change)="onChange($event)">
  <div class="content">
    <h4>{{ prettyearth?.region }}</h4>
    <h2>{{ prettyearth?.country }}</h2>
  </div>
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
| `interval`    | `number`                     | Time interval to save a random image in milliseconds |
| `change`      | `EventEmitter<IPrettyearth>` | Capture the change of the `prettyearth` variable     |

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

## Methods

### Service

#### `async call()`

Async method to set image in `localStorage` & `prettyearth`.

#### `destroy()`

Delete all subscriptions from service & remove image from `localStorage`.

#### `setInterval(interval: number)`

Interval to set random image.

#### `stopInterval()`

Destroy a interval subscription.

### Component

#### `getRandomPic()`

Similar to `call()` method.

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

## Support

You can help me 😊 [Issues](https://github.com/cArlitXs/ngx-prettyearth/issues).

---

## License

ngx-prettyearth is available under the MIT license.

---

## ☕ Coffee!

[<img src="https://user-images.githubusercontent.com/1685680/61808727-4925de00-ae3c-11e9-9d60-66bef358fd8e.png" alt="drawing" width="180"/>](https://www.buymeacoffee.com/carlitxs "Buy me a coffee")
