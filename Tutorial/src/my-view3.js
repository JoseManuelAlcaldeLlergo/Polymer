/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView3 extends PolymerElement {
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

        #Marco{
          color: black;
        }

        #horizontal{
          display: flex;
        }

      </style>

      <div class="card">
        <div class="circle">3</div>
        <h1>Nuestro primer componente</h1>
        <wc-markdown src="./Examples.md"></wc-markdown>
      </div>

      <div class="card" id="Marco">
        <h1>Resultado</h1>
        <hr/>
        <div id="horizontal">
          <prueba-2-app nombre="Volkswagen New Beetle" forma="cloud" ruta="./src/img/foto-4.jpg" contador= 5 ></prueba-2-app>
          <prueba-2-app nombre="Ferrari" forma="flag" ruta="./src/img/foto-2.jpeg" contador= 19 ></prueba-2-app>
        </div>
      </div>
    `;
  }
}

window.customElements.define('my-view3', MyView3);
