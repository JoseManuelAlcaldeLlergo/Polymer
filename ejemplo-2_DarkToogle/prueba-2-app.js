import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-tooltip/paper-tooltip.js';
import '@polymer/paper-toolbar/paper-toolbar.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-image/iron-image.js';
import * as DarkModeToggle from './node_modules/dark-mode-toggle';

/**
 * @customElement
 * @polymer
 */
class Prueba2App extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;

        }
        paper-tooltip {
          --paper-tooltip-background: #0033FF;
          --paper-tooltip-delay-out: 150;
          margin-top: 10px;
        }

        #boton {
          margin: 10px;
          padding: 10px;
        }
        paper-toolbar {
          --paper-toolbar-background: #330066;
        }

        .icono{
          width: 50px;
          height: 50px;
          margin-bottom: 7px;
        }

        .linea {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          width:450px;
          height:250px;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 1px 4px 0 var(--shadow-color, hsla(0, 0%, 0%, 0.1)), 0 0px 4px 0 var(--shadow-color, hsla(0, 0%, 0%, 0.1));
          margin: 10px;
        }
        .img {
          display: inline block;
          padding: 5px;
        }
        .text {
          padding: 12px 16px;
          border-top: 1px solid #ededed;
          flex: 1 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--backgroundText-color);

        }
        .centrado {
          text-align: center;
        }
        img { 
          width: 250px;
          height: 160px;
        }
             
      </style>

      <div class="linea">
          <div class="container">
            <section class="img">
            <center>
              <img src="[[ruta]]">
            </center>
            </section>
            <section class="text">
              <p class="centrado">[[nombre]]</p>
              <paper-icon-button slot="top" icon="[[forma]]" class="icono" on-click="function"></paper-icon-button>
              <p>[[contador]]</p>
            </section>
          </div>
      </div>

    `;
  }
  static get properties() {
    return {
      nombre: {
        type: String,
        value: "cadena"
      },
      forma: {
        type: String,
        value: "cadena"
      },
      ruta: {
        type: String,
        value: "ninguna"
      },
      contador: {
        type: Number,
        value: 0
      }
    };
  }
  function(tipo) {
    this.contador++;
  }
}




window.customElements.define('prueba-2-app', Prueba2App);
