import { html, render } from 'lit-html';
import { GainChain_backend } from 'declarations/GainChain_backend';

class App {
  greeting = '';

  constructor() {
    this.#render();
  }

  #handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    this.greeting = await GainChain_backend.greet(name);
    this.#render();
  };

  #render() {
    let body = html`
      <main>
        
      </main>
    `;
    render(body, document.getElementById('root'));
    document
      .querySelector('form')
      .addEventListener('submit', this.#handleSubmit);
  }
}

export default App;
