import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView4 extends PolymerElement {
  static get template() {
    return html`

   

      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        p{
          font-size: 1em;
        }
        .card h1{
          font-size: 2em;
        }

        .foto img{
          width: 10%;
          height: 10%;
          border-radius: 15%;
        }
        #icono{
          width: 1.3%;
        }
      </style>

      <div class="card">
        <div class="foto"><img src="./src/img/pepe.jpeg"></div>
        <h1>Jos&eacute; Manuel Alcalde Llergo</h1>
        <p>Estudiante de Ingenier&iacute;a Inform&aacute;tica en la Universidad de C&oacute;rdoba (UCO). </p>
        <div id="redes">
          <p><img src="./src/img/correo.png" id="icono">  i72alllj@uco.es</p>
          <p><img src="./src/img/github.png" id="icono">  JoseManuelAlcaldeLlergo</p>
        </div>
      </div>

      <div class="card">
        <div class="foto" id="foto_derecha"><img src="./src/img/tomas.jpeg"></div>
        <h1>Tom&aacute;s Fern&aacute;ndez Urbano</h1>
        <p>Estudiante de Ingenier&iacute;a Inform&aacute;tica en la Universidad de C&oacute;rdoba (UCO). </p>
        <div id="redes">
          <p><img src="./src/img/correo.png" id="icono">  i72feurt@uco.es</p>
          <p><img src="./src/img/github.png" id="icono">  TomasFdez5</p>
          <p><img src="./src/img/insta.png" id="icono">  tomasfdeez</p>
        </div>


      </div>

    `;
  }
}

window.customElements.define('my-view4', MyView4);
