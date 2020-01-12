import { animate } from "./animate";
import { Observer, ObserverOptions } from "./observer";
import { Modifiers, getModifierValue } from "./modifier";

export interface VevealOptions extends ObserverOptions {
  animate?: string;
}

export default {
  install: function(Vue: any, options: VevealOptions = {}) {
    let observer = new Observer<string[]>(options, [animate]);

    Vue.directive("veveal", {
      inserted: function(
        el: HTMLElement,
        { modifiers, value }: { modifiers: Modifiers; value: unknown }
      ) {
        let names: string[] = [];

        let defaultAnimate = options.animate;

        let hasAnimateClass = false;

        if (typeof value === "string") {
          names.push(value);
          hasAnimateClass = true;
        }

        for (let key of Object.keys(modifiers)) {
          let value = getModifierValue(key);

          if (value) {
            names.push(value);
            continue;
          }

          if (hasAnimateClass) {
            continue;
          }

          hasAnimateClass = true;
          names.push(key);
        }

        if (!hasAnimateClass && defaultAnimate) {
          names.push(defaultAnimate);
        }

        observer.add(el, names);
      }
    });
  }
};
