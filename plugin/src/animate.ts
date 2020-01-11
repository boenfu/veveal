import "animate.css";

const ANIMATED_PREFIX_CLASS_NAME = "animated";

const ANIMATED_EVENT_NAME = "animationend";

const ANIMATED_MAX_DURATION = 10000;

export async function animate(el: HTMLElement, names: string[]): Promise<void> {
  return Promise.race<void>([
    new Promise<void>(resolve => {
      el.classList.add(ANIMATED_PREFIX_CLASS_NAME, ...names);
      el.addEventListener(ANIMATED_EVENT_NAME, handleAnimationEnd);

      function handleAnimationEnd() {
        el.classList.remove(ANIMATED_PREFIX_CLASS_NAME, ...names);
        el.removeEventListener(ANIMATED_EVENT_NAME, handleAnimationEnd);

        resolve();
      }
    }),
    new Promise<void>(resolve => setTimeout(resolve, ANIMATED_MAX_DURATION))
  ]);
}
