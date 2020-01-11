import { animate } from "./animate";
import { Observer, ObserverOptions } from "./observer";
import { Modifiers, getModifierValue } from "./modifier";

export interface VevealOptions extends ObserverOptions {}

export default {
  install: function(
    Vue: any,
    options: VevealOptions = {
      distance: 10
    }
  ) {
    let observer = new Observer<string[]>(options, [animate]);

    Vue.directive("veveal", {
      inserted: function(
        el: HTMLElement,
        { modifiers, value }: { modifiers: Modifiers; value: unknown }
      ) {
        let names = [...Object.keys(modifiers)].map(getModifierValue);

        if (typeof value === "string") {
          names.push(value);
        }

        observer.add(el, names);
      }
    });
  }
};
