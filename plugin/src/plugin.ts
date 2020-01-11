import { animate } from "./animate";
import { Observer } from "./observer";

export default {
  install: function(Vue: any, _options: object) {
    Vue.config.productionTip = false;

    const modifierToValueDict = {
      // delay
      d1: "delay-1s",
      d2: "delay-2s",
      d3: "delay-3s",
      d4: "delay-4s",
      d5: "delay-5s",
      // speed
      slow: "slow",
      slower: "slower",
      fast: "fast",
      faster: "faster",
      // times
      infinite: "infinite"
    } as const;

    type ModifierKeys = keyof typeof modifierToValueDict;

    type Modifiers = { [key in ModifierKeys]: true };

    let observer = new Observer<string[]>({}, [animate]);

    Vue.directive("veveal", {
      inserted: function(
        element: HTMLElement,
        { modifiers, value }: { modifiers: Modifiers; value: unknown }
      ) {
        if (value && typeof value !== "string") {
          throw TypeError("[veveal]: Directive value must be string ");
        }

        modifiers as Modifiers;

        let names = [...Object.keys(modifiers), value].map(
          key => modifierToValueDict[(key as unknown) as ModifierKeys] || key
        );

        observer.add(element, names);
      }
    });
  }
};
