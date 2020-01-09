import "animate.css";

export default {
  install: function(Vue: any) {
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

    Vue.directive("veveal", {
      inserted: function(
        element: HTMLElement,
        { modifiers }: { modifiers: Modifiers }
      ) {
        modifiers as Modifiers;

        let intersectionObserver = new IntersectionObserver(function(entries) {
          if (
            // temp handler
            entries[0].isIntersecting &&
            !element.dataset.veveal
          ) {
            animateCSS(
              entries[0].target as HTMLElement,
              Object.keys(modifiers).map(
                key =>
                  modifierToValueDict[(key as unknown) as ModifierKeys] || key
              ),
              () => (element.dataset.veveal = "true")
            );
          }
        });

        intersectionObserver.observe(element);

        function animateCSS(
          element: HTMLElement,
          animationNames: string[],
          callback?: () => void
        ) {
          element.classList.add("animated", ...animationNames);

          function handleAnimationEnd() {
            element.classList.remove("animated", ...animationNames);
            element.removeEventListener("animationend", handleAnimationEnd);

            if (callback) {
              callback();
            }
          }

          element.addEventListener("animationend", handleAnimationEnd);
        }
      }
    });
  }
};
