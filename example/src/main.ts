import Vue from "vue";
import App from "./App.vue";
import plugin from "../../plugin/src/plugin";

Vue.use(plugin, { distance: 200 });

new Vue({
  render: h => h(App)
}).$mount("#app");
