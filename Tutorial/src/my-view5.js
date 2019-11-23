import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView5 extends PolymerElement {
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
        <div class="circle">4</div>
        <h1>Creando a partir del polymer starter kit</h1>
        <wc-markdown src="./Tutorial.md"></wc-markdown>
      </div>

    `;
  }
}

window.customElements.define('my-view5', MyView5);
