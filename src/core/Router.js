import { Home } from '@views/Home';
export class Router {
  #routes;
  #selector;
  #element;
  constructor({ selector, routes }) {
    this.#routes = routes;
    this.#selector = selector || '#content';
  }
  eventInit() {
    window.addEventListener('popstate', () => {
      this.checkRoutes();
    });
    window.addEventListener('click', ({ target }) => {
      if (target.matches('button[data-href]')) {
        const { href } = target.dataset;
        history.pushState({ data: `${href}` }, '', href);
        this.checkRoutes();
      }
    });
  }
  start() {
    const element = document.querySelector(this.#selector);
    // if (!element) {
    //   throw new Error(`${this.#selector}를 찾을 수 없습니다.`);
    // }
    this.#element = element;
    this.eventInit();
    this.checkRoutes();
  }
  checkRoutes() {
    const LocalName = window.location.pathname;
    let selectComponent = Object.values(this.#routes)[
      this.#findRoute(LocalName)
    ];
    if (!selectComponent) selectComponent = Home;
    new selectComponent({ element: this.#element });
  }
  #findRoute(path) {
    return Object.keys(this.#routes).findIndex((key) => key === path);
  }
}

export default Router;
