import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView7 extends PolymerElement {
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
        <div class="circle">6</div>
        <h1>Referencias de inter&eacute;s</h1>

        <h3>Polymer Project</h3>
        <a href="https://www.polymer-project.org/">www.polymer-project.org</a>

        <h3>¿Qu&eacute; es Polymer?</h3>
        <a href="https://desarrolloweb.com/articulos/que-es-polymer.html">desarrolloweb.com/articulos/que-es-polymer</a> 

        <h3>¿C&oacute;mo instalar Polymer?</h3>
        <a href="https://polymer-library.polymer-project.org/3.0/docs/install-3-0">polymer-library.polymer-project.org/3.0/docs/install-3-0</a> 

        <h3>¿Qu&eacute; son web components?</h3>
        <a href="https://www.webcomponents.org/introduction">www.webcomponents.org/introduction</a> 

        <h3>Peque&ntilde;o manual de Polymer</h3>
        <a href="https://desarrolloweb.com/manuales/manual-polymer-3.html">desarrolloweb.com/manuales/manual-polymer-3</a> 

        <h3>World Wide Web Consortium (W3C)</h3>
        <a href="https://www.w3c.es">www.w3c.es</a> 

        <h3>¿Qu&eacute; es npm?</h3>
        <a href="https://devcode.la/blog/que-es-npm/">devcode.la/blog/que-es-npm</a> 

        <h3>Acerca de Nodejs</h3>
        <a href="https://nodejs.org/es/about/">nodejs.org/es</a> 

        <h3>Polymer y Youtube</h3>
        <a href="https://youtube.googleblog.com/2017/05/a-sneak-peek-at-youtubes-new-look-and.html">youtube.googleblog.com</a> 

        <h3>¿Por qu&eacute; usar Polymer? Video oficial</h3>
        <a href="https://www.youtube.com/watch?v=2_BQz-ywx0o">www.youtube.com/watch?v=2_BQz-ywx0o</a> 

        <h3>Repositorio oficial de Polymer</h3>
        <a href="https://github.com/Polymer/polymer">github.com/Polymer/polymer</a> 




        
      </div>

    `;
  }
}

window.customElements.define('my-view7', MyView7);
