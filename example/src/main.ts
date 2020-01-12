import Vue from "vue";
import App from "./App.vue";
import plugin from "../../plugin/src/plugin";

Vue.use(plugin);

new Vue({
  render: h => h(App)
}).$mount("#app");
