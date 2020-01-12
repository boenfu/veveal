<template>
  <div id="app">
    <img src="./assets/1.jpg" v-veveal.flash.infinite />
    <div>
      <img src="./assets/2.jpg" v-veveal.shake.infinite />
      <img src="./assets/3.jpg" v-veveal.tada.d1 />
    </div>

    <main>
      <section v-for="i in 10" :key="i" v-veveal.fadeInUp>
        <p v-veveal.fadeInLeft.d1>
          <a href="https://github.com/boenfu/veveal" target="_blank">veveal</a>
        </p>
        <img v-veveal.fadeInRight.d1 v-if="i % 2" src="./assets/4.jpg" />
        <img v-veveal.fadeInRight.d1 v-else src="./assets/5.jpg" />
      </section>
    </main>

    <img src="./assets/6.jpg" v-veveal.rollIn />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {}
</script>

<style>
#app {
  width: 480px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

div {
  display: flex;
}

div:not(#app) img {
  width: 240px;
  height: auto;
}

#app > img {
  margin: 20px;
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

section {
  width: 48%;
  box-sizing: border-box;
  padding: 24px;
  height: 200px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  box-shadow: 2px 1px 6px #000;
  background-color: #fff;
}

section p {
  width: 100%;
  text-align: left;
  font-size: 24px;
}

section img {
  width: 120px;
  height: auto;
}
</style>
