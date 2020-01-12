English | [简体中文](./README.md)

<p align="center"><img width="180" src="./logo.png"></p>
<p align="center">
  <a href="#"><img alt="npm" src="https://img.shields.io/npm/v/veveal?style=flat-square"></a>
    <a href="#"><img alt="npm" src="https://img.shields.io/npm/dt/veveal?style=flat-square"></a>
  <a href="#"><img alt="NPM" src="https://img.shields.io/npm/l/veveal?style=flat-square"></a>
  <a href="#"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/boenfu/veveal?style=flat-square"></a>
  <a href="http://makeapullrequest.com"><img alt="PRS" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"></a>
</p>

<h3 align="center">veveal - Easily handle curtain-entry animations with vue directive</h3>

## Install

```shell
npm install veveal --save
# or
yarn add veveal
```

## Usage

`main.js` 

```javascript
import veveal from 'veveal'

Vue.use(veveal);
```

your component

```typescript
<HelloWorld v-veveal/>
```

## Config

### PluginOptions

| **Field** | **Required** | **Type** | **Description**               |
| --------- | ------------ | -------- | ----------------------------- |
| animate   | false        | String   | default animation name        |
| threshold | false        | Number   | animation triggered threshold |
| distance  | false        | Number   | distance from the bottom      |

e.g.

```typescript
Vue.use(veveal, {
	animate: 'fadeInUp',
  threshold: 0.5,
  distance: 100
});
```

Indicates that the element `height` has` 50% `which is triggered when it is above` 100px` at the bottom of the page



### Modifier

- delay (s)
  - `d1` `d2` `d3` `d4` `d5`
- speed
  - `slow` `slower` `fast` `faster`
- times
  - `infinite`
- animation
  - see [animate.css](https://github.com/daneden/animate.css/#animations)

e.g.

```typescript
<HelloWorld v-veveal.d1.slow.infinite.fadeInUp/>
```



### Value

In addition to using modifiers to describe the animation, it is also effective to set the command value, which can be useful when dynamic settings are required.

e.g.

```typescript
<HelloWorld v-for="i in 2" :key="i" v-veveal="i%2?'fadeInLeft':'fadeInRight'" />
```

## License

- [MIT](https://opensource.org/licenses/MIT)