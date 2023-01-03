import { Component } from '@core/Component';
import router from './router';
export class App extends Component {
  onMounted() {
    router.start();
  }
  template() {
    return `
    <header>
    <nav>
    <button data-href="/">home</button>
      <ul>
        <button data-href="/test">test</button>
      </ul>
    </nav>
  </header>
  <section id="content"></section>
    `;
  }
}
