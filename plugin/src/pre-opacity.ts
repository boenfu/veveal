function register() {
  let style = document.createElement("style");

  style.textContent = `.pre-opacity {opacity: 0;}`;
  style.type = "text/css";

  document.head.appendChild(style);
}

register();

export function before(el: HTMLElement) {
  el.classList.add("pre-opacity");
}

export function after(el: HTMLElement) {
  el.classList.remove("pre-opacity");
}
