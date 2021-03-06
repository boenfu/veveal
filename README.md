[English](./README.EN.md) | 简体中文

<p align="center"><img width="180" src="./logo.png"></p>
<p align="center">
  <a href="#"><img alt="npm" src="https://img.shields.io/npm/v/veveal?style=flat-square"></a>
    <a href="#"><img alt="npm" src="https://img.shields.io/npm/dt/veveal?style=flat-square"></a>
  <a href="#"><img alt="NPM" src="https://img.shields.io/npm/l/veveal?style=flat-square"></a>
  <a href="#"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/boenfu/veveal?style=flat-square"></a>
  <a href="http://makeapullrequest.com"><img alt="PRS" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"></a>
</p>

<h3 align="center">veveal - 使用指令轻松处理入帘动画</h3>

## 安装

```shell
npm install veveal --save
# or
yarn add veveal
```

## 用法

` main.js `

```javascript
import veveal from 'veveal'

Vue.use(veveal);
```

在组件中

```typescript
<HelloWorld v-veveal/>
```

## 参数

### 插件设置

| **字段**  | 必选 | 类型   | 描述           |
| --------- | ---- | ------ | -------------- |
| animate   | 否   | String | 默认使用动画   |
| threshold | 否   | Number | 动画触发的阈值 |
| distance  | 否   | Number | 底部的距离     |

例如：

```typescript
Vue.use(veveal, {
	animate: 'fadeInUp',
  threshold: 0.5,
  distance: 100
});
```

表示元素 `height` 有 `50%` 在页面底部  `100px ` 之上时触发动画



### 修饰符

- 延迟 (秒)
  - `d1` `d2` `d3` `d4` `d5`
- 速度
  - `slow` `slower` `fast` `faster`
- 次数
  - `infinite`
- 动画
  - 动画列表见 [animate.css](https://github.com/daneden/animate.css/#animations)

例如：

```typescript
<HelloWorld v-veveal.d1.slow.infinite.fadeInUp/>
```



### 指令值

除了使用修饰符描述动画，通过设置指令值也是有效的，需要动态设置的情况下能够发挥作用

例如：

```typescript
<HelloWorld v-for="i in 2" :key="i" v-veveal="i%2?'fadeInLeft':'fadeInRight'" />
```

## License

- [MIT](https://opensource.org/licenses/MIT)
