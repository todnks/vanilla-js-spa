export class Component {
  #element;
  state = {};

  constructor({ element }) {
    this.#element = element;
    this.setup();
    this.render();
    this.onMounted();
  }

  stateInit() {}

  addEvent(eventType, selector, callback, option = {}) {
    const selectList = [...document.querySelectorAll(selector)];

    if (selectList.length > 1) {
      selectList.forEach((item) =>
        item.addEventListener(eventType, callback, option)
      );
      return;
    }

    const selectItem = selectList.pop();
    if (!selectItem) return;
    selectItem.addEventListener(
      eventType,
      (event) => {
        callback(event);
      },
      option
    );
  }

  setup() {
    this.state = this.stateInit();
  }
  onMounted() {}
  setState() {
    this.state = { ...this.state };
    this.render();
  }

  template() {
    return '';
  }

  render() {
    this.#element.innerHTML = this.template();
  }
}
