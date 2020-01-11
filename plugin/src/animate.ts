import "animate.css";

const ANIMATED_PREFIX_CLASS_NAME = "animated";

const ANIMATED_EVENT_NAME = "animationend";

export function animate(el: HTMLElement, names: string[]): void {
  el.classList.add(ANIMATED_PREFIX_CLASS_NAME, ...names);
  el.addEventListener(ANIMATED_EVENT_NAME, handleAnimationEnd);

  function handleAnimationEnd() {
    el.classList.remove(ANIMATED_PREFIX_CLASS_NAME, ...names);
    el.removeEventListener(ANIMATED_EVENT_NAME, handleAnimationEnd);
  }
}
