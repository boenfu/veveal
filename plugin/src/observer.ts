export interface ObserverOptions {
  threshold?: number;
  distance?: number;
}

export type IntersectingEventListener<TPayload> = (
  el: HTMLElement,
  payload: TPayload
) => void | Promise<void>;

export class Observer<TPayload = any> {
  private elToPayloadMap: WeakMap<HTMLElement, TPayload> = new WeakMap();
  private intersectionObserver!: IntersectionObserver;

  constructor(
    private options: ObserverOptions = {},
    private listeners: IntersectingEventListener<TPayload>[] = []
  ) {
    this.initialize();
  }

  private initialize(): void {
    let { threshold, distance } = this.options;

    this.intersectionObserver = new IntersectionObserver(this.handler, {
      rootMargin: generateRootMargin(distance),
      threshold: generateThreshold(threshold)
    });
  }

  add(el: HTMLElement, payload?: TPayload): void {
    this.intersectionObserver.observe(el);

    if (payload) {
      this.elToPayloadMap.set(el, payload);
    }
  }

  remove(el: HTMLElement): void {
    this.intersectionObserver.unobserve(el);
  }

  addEventListener(eventListener: IntersectingEventListener<TPayload>): void {
    this.listeners.push(eventListener);
  }

  private handler = async (
    entries: IntersectionObserverEntry[]
  ): Promise<void> => {
    for (let entry of entries) {
      let el = entry.target as HTMLElement;

      if (!entry.isIntersecting || el.dataset.veveal) {
        return;
      }

      let payload = this.elToPayloadMap.get(el);

      for (let listener of this.listeners) {
        listener(el, payload!);
      }

      el.dataset.veveal = "true";

      this.remove(el);
    }
  };
}

function generateRootMargin(distance: number = 0): string {
  return `0px 0px -${distance}px 0px`;
}

function generateThreshold(threshold?: number): number[] | undefined {
  return threshold ? [threshold] : undefined;
}
