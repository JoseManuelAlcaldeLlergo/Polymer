import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class Ejemplo1 extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h1>Bienvenidos a nuestro tutorial!!</h1>
      <h2>Iteraci&oacute;n [[contador]] de la sucesión: [[prop1]],[[prop2]].</h2>
      <button on-click="click">Dame otro elemento</button>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: Number,
        value: 0
      },
      prop2: {
        type: Number,
        value: 1
      },
      aux: {
        type: Number,
        value: 0
      },
      contador: {
        type: Number,
        value: 0
      }

    };
  }
  click(){
      this.aux=this.prop2;
      this.prop2=this.prop1+this.prop2;
      this.prop1=this.aux;
      this.contador++;
  }
}

window.customElements.define('ejemplo-1', Ejemplo1);
