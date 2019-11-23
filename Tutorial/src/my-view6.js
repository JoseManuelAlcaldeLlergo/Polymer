import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView6 extends PolymerElement {
  static get template() {
    return html`
      
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }

       .card h1{
          font-size: 3em;
        }

      </style>

      <div class="card">
        <div class="circle">5</div>
        <h1>Caso de &eacute;xito y estudio</h1>
        <wc-markdown src="./Casos.md"></wc-markdown>
      </div>

    `;
  }
}

window.customElements.define('my-view6', MyView6);
